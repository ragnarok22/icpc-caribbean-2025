import type { ImageMetadata } from "astro";

export type University = {
  name: string;
  logo: string;
};

export enum ParticipantType {
  MEMBER = "MEMBER",
  COACH = "COACH",
}

export type Participant = {
  name: string;
  type: ParticipantType;
};

export type Team = {
  teamName: string;
  picture: string;
  participants: Participant[];
  university: University;
};

export type Sponsor = {
  logo: string;
  name: string;
  url: string;
};

export type Social = {
  name: "instagram" | "telegram" | "youtube" | "facebook" | "x";
  url: string;
  image: {
    logo: ImageMetadata;
    width: number;
    height: number;
  };
};

// API Response Types
export type APIPagination = {
  page: number;
  pageSize: number;
  hasNextPage: boolean;
};

export type APISponsor = {
  name: string;
  description: string;
  category: string;
  amount_donated: number;
  image_url: string;
};

export type APISponsorsResponse = {
  data: APISponsor[];
  pagination: APIPagination;
  error?: string;
};

export type APIContestant = {
  name: string;
  description: string;
  is_coach: boolean;
};

export type APITeam = {
  id: string;
  name: string;
  description: string;
  university: string;
  university_image: string;
  country: string;
  image_url: string;
  contestants: APIContestant[];
};

export type APITeamsResponse = {
  data: APITeam[];
  pagination: APIPagination;
  error?: string;
};

export type GetSponsorsParams = {
  page?: number;
  page_size?: number;
};

export type GetTeamsParams = {
  id?: string;
  university_id?: string;
  name?: string;
  page?: number;
  page_size?: number;
};
