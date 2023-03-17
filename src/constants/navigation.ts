import type ILink from "@/utils/link";

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
    label: "Mis confesiones",
    name: "my-confessions",
    href: "/confesiones/mis-confesiones",
  },
  {
    label: "Cerrar sesión",
    name: "logout",
    isButton: true,
    href: "#!",
  },
];
