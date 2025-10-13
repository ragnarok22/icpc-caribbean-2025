import {
  ParticipantType,
  type Social,
  type Sponsor,
  type Team,
} from "./definitions";

export const EVENT_DATE = new Date("2025-11-08T14:00:00");

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
    name: "Sponsor 1",
    url: "https://sponsor1.com",
    logo: "https://sponsor1.com/logo.png",
  },
  {
    name: "Sponsor 2",
    url: "https://sponsor2.com",
    logo: "https://sponsor2.com/logo.png",
  },
];

export const TEAMS: Team[] = [
  {
    teamName: "Team 1",
    picture: "https://team1.com/picture.png",
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
      logo: "https://university1.com/logo.png",
    },
  },
];
