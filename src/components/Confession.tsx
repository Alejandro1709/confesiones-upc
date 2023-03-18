"use client";

import { useId } from "react";
import Link from "next/link";
import type IConfession from "@/types/confession";

type Props = {
  confession: IConfession;
};

function Confession({ confession }: Props) {
  const id = useId();
  const slugify = (str: string) => {
    if (!str) return `${confession.id}${id}}`;
    return str
      .toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/[\s\W-]+/g, "-");
  };

  return (
    <Link href={`/confesiones/${slugify(confession.title)}`}>
      <article className="flex h-[187px] w-[383px] cursor-pointer select-none flex-col items-center justify-center border bg-white p-2 transition-all hover:scale-95">
        <p className="text-center text-lg font-medium">{confession.content}</p>
      </article>
    </Link>
  );
}

export default Confession;
