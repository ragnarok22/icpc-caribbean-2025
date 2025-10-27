import {
  ParticipantType,
  type APISponsorsResponse,
  type APITeamsResponse,
  type GetSponsorsParams,
  type GetTeamsParams,
  type Sponsor,
  type Team,
  type Participant,
  type APISponsor,
  type APITeam,
} from "@/lib/definitions";
import { DEFAULT_UNIVERSITY_LOGO } from "@/lib/data";

const API_BASE_URL = import.meta.env.PUBLIC_API_BASE_URL;

/**
 * Transform API sponsor to internal Sponsor format
 */
export function transformAPISponsor(apiSponsor: APISponsor): Sponsor {
  return {
    logo: apiSponsor.image_url,
    name: apiSponsor.name,
    url: "", // URL not provided by API, could be added later
  };
}

/**
 * Transform API team to internal Team format
 */
export function transformAPITeam(apiTeam: APITeam): Team {
  const participants: Participant[] = apiTeam.contestants.map((contestant) => ({
    name: contestant.name,
    type: contestant.is_coach ? ParticipantType.COACH : ParticipantType.MEMBER,
  }));

  return {
    teamName: apiTeam.name,
    picture: apiTeam.image_url,
    participants,
    university: {
      name: apiTeam.university,
      logo: apiTeam.university_image || DEFAULT_UNIVERSITY_LOGO,
    },
  };
}

/**
 * Build query string from parameters object
 */
function buildQueryString(
  params: Record<string, string | number | undefined>,
): string {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      searchParams.append(key, String(value));
    }
  });

  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : "";
}

/**
 * Fetch sponsors from the API
 * @param params - Query parameters for pagination
 * @returns Promise with sponsors data and pagination info
 */
export async function getSponsors(
  params: GetSponsorsParams = {},
): Promise<APISponsorsResponse> {
  const { page = 1, page_size = 10 } = params;

  // Validate page_size maximum
  const validatedPageSize = Math.min(page_size, 100);

  const queryString = buildQueryString({
    page,
    page_size: validatedPageSize,
  });

  try {
    const response = await fetch(`${API_BASE_URL}/getsponsors${queryString}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: APISponsorsResponse = await response.json();

    // Return error response if API returned an error
    if (data.error) {
      return {
        data: [],
        pagination: {
          page: 1,
          pageSize: 10,
          hasNextPage: false,
        },
        error: data.error,
      };
    }

    return data;
  } catch (error) {
    console.error("Error fetching sponsors:", error);
    return {
      data: [],
      pagination: {
        page: 1,
        pageSize: 10,
        hasNextPage: false,
      },
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}

/**
 * Fetch teams from the API
 * @param params - Query parameters for filtering and pagination
 * @returns Promise with teams data and pagination info
 */
export async function getTeams(
  params: GetTeamsParams = {},
): Promise<APITeamsResponse> {
  const { id, university_id, name, page = 1, page_size = 10 } = params;

  // Validate page_size maximum
  const validatedPageSize = Math.min(page_size, 100);

  const queryString = buildQueryString({
    id,
    university_id,
    name,
    page,
    page_size: validatedPageSize,
  });

  try {
    const response = await fetch(`${API_BASE_URL}/getteams${queryString}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: APITeamsResponse = await response.json();

    // Return error response if API returned an error
    if (data.error) {
      return {
        data: [],
        pagination: {
          page: 1,
          pageSize: 10,
          hasNextPage: false,
        },
        error: data.error,
      };
    }

    return data;
  } catch (error) {
    console.error("Error fetching teams:", error);
    return {
      data: [],
      pagination: {
        page: 1,
        pageSize: 10,
        hasNextPage: false,
      },
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
}
