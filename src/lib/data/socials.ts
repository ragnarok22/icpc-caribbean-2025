import { type Social } from "@/lib/definitions";

import Instagram from "@/assets/svg/instagram.svg";
import Telegram from "@/assets/svg/telegram.svg";
import Facebook from "@/assets/svg/facebook.svg";
import Youtube from "@/assets/svg/youtube.svg";
import X from "@/assets/svg/x.svg";

export const SOCIALS: Social[] = [
  {
    name: "facebook",
    url: "https://www.facebook.com/share/17bk3W7gZp/",
    image: {
      logo: Facebook,
      width: 200,
      height: 200,
    },
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/icpccaribbeanmedia",
    image: {
      logo: Instagram,
      width: 200,
      height: 200,
    },
  },
  {
    name: "x",
    url: "https://x.com/icpc_caribbean",
    image: {
      logo: X,
      width: 200,
      height: 200,
    },
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/@CaribbeanMedia",
    image: {
      logo: Youtube,
      width: 200,
      height: 200,
    },
  },
  {
    name: "telegram",
    url: "https://t.me/icpccaribbeanmedia",
    image: {
      logo: Telegram,
      width: 200,
      height: 200,
    },
  },
  {
    name: "telegram",
    url: "https://t.me/+08XS4hp5GZJhNGMx",
    image: {
      logo: Telegram,
      width: 200,
      height: 200,
    },
  },
];
