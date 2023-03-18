import type IConfession from "@/types/confession";

export const slugify = (str: string, confession: IConfession, id: string) => {
  if (!str) return `${confession.id}${id}}`;
  return str
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-");
};

export const deslugify = (str: string, confession: IConfession, id: string) => {
  if (!str) return `${confession.id}${id}}`;
  return str
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/-/g, " ");
};
