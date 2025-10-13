import type { Social } from "./definitions";

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
