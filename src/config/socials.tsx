import { IconType } from "react-icons";
import { FaTelegram, FaTwitter } from "react-icons/fa";

export type Social = {
  name: string;
  href: string;
  icon: IconType;
};

export const socials: Social[] = [
  {
    name: "Telegram",
    href: "",
    icon: FaTelegram,
  },
  {
    name: "Twitter",
    href: "",
    icon: FaTwitter,
  },
];
