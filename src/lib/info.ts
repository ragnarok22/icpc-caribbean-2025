import {
  ParticipantType,
  type Social,
  type Sponsor,
  type Team,
} from "./definitions";

export const EVENT_DATE = new Date("2025-11-08T14:00:00");

export const DEFAULT_TEAM_PICTURE =
  "https://placehold.co/800/?text=Sin+imagen&font=roboto";

export const DEFAULT_UNIVERSITY_LOGO =
  "https://placehold.co/800/999/FFF?text=Sin+imagen&font=roboto";

export const CONTACT_INFORMATION = {
  email: "example@gmail.com",
  phone: "+1234567890",
};

export const SCHEDULE = [
  {
    date: "2025-11-05",
    description: "Fecha de apertura",
  },
  {
    date: "2025-11-06",
    description: "Fecha del concurso",
  },
];

export const SOCIALS: Social[] = [
  {
    type: "instagram",
    url: "https://instagram.com/icpc_caribbean",
  },
  {
    type: "telegram",
    url: "https://t.me/ICPC_Caribbean",
  },
];

export const SPONSORS: Sponsor[] = [
  {
    name: "Benjuli",
    url: "https://sponsor1.com",
    logo: "https://sponsor1.com/logo.png",
  },
  {
    name: "SalvaPC",
    url: "https://sponsor2.com",
    logo: "https://sponsor2.com/logo.png",
  },
  {
    name: "Geocuba",
    url: "https://sponsor2.com",
    logo: "https://sponsor2.com/logo.png",
  },
  {
    name: "Datys",
    url: "https://sponsor2.com",
    logo: "https://sponsor2.com/logo.png",
  },
  {
    name: "Fajardo's Pizza",
    url: "https://sponsor2.com",
    logo: "https://sponsor2.com/logo.png",
  },
  {
    name: "Cripto Intercambio",
    url: "https://sponsor2.com",
    logo: "https://sponsor2.com/logo.png",
  },
  {
    name: "Centro Tecnológico",
    url: "https://sponsor2.com",
    logo: "https://sponsor2.com/logo.png",
  },
];

export const TEAMS: Team[] = [
  {
    teamName: "Team 1",
    picture: "",
    participants: [
      {
        name: "Participant 1",
        type: ParticipantType.MEMBER,
      },
      {
        name: "Participant 2",
        type: ParticipantType.MEMBER,
      },
    ],
    university: {
      name: "University 1",
      logo: "",
    },
  },
];
