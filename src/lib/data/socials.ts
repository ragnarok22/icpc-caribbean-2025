import { type Social } from "@/lib/definitions";

import Instagram from "@/assets/svg/instagram.svg";
import Telegram from "@/assets/svg/telegram.svg";

export const SOCIALS: Social[] = [
  {
    name: "instagram",
    url: "https://instagram.com/icpc_caribbean",
    image: {
      logo: Instagram,
      width: 200,
      height: 200,
    },
  },
  {
    name: "telegram",
    url: "https://t.me/ICPC_Caribbean",
    image: {
      logo: Telegram,
      width: 200,
      height: 200,
    },
  },
];
