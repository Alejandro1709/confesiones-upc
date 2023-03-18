import type ILink from "@/types/link";

export const NAVIGATION_LINKS: ILink[] = [
  {
    label: "Feed",
    name: "feed",
    href: "/",
  },
  {
    label: "Nueva confesión",
    name: "new-confession",
    href: "/confesiones/nueva",
  },
  {
    label: "Cerrar sesión",
    name: "logout",
    isButton: true,
    href: "#!",
  },
];
