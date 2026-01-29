import type { CardProps } from "~/types/ui/card";
import usedAdvancedIcon from "~/assets/svgs/used-advanced.svg";
import cleanDesignIcon from "~/assets/svgs/clean-design.svg";
import bestCustomerSupport from "~/assets/svgs/best-customer-support.svg";

export const advantages: CardProps[] = [
  {
    icon: usedAdvancedIcon,
    title: "Used advanced technologies",
    description:
      "I must explain to you how all this mistaken. Idea of main denouncing pleasure and praising pain was born",
    to: "/services/performance",
  },
  {
    icon: cleanDesignIcon,
    title: "Clean design & Typography",
    description:
      "I must explain to you how all this mistaken. Idea of main denouncing pleasure and praising pain was born",
    to: "/services/security",
  },
  {
    icon: bestCustomerSupport,
    title: "Best customer support",
    description:
      "I must explain to you how all this mistaken. Idea of main denouncing pleasure and praising pain was born",
    to: "/services/reliability",
  },
];
