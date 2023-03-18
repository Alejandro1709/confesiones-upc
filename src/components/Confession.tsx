"use client";

import { useId } from "react";
import Link from "next/link";
import type IConfession from "@/types/confession";
import { slugify } from "@/utils/confessions";

type Props = {
  confession: IConfession;
};

function Confession({ confession }: Props) {
  const id = useId();

  return (
    <Link href={`/confesiones/${slugify(confession.title, confession, id)}`}>
      <article className="flex h-[187px] w-[383px] cursor-pointer select-none flex-col items-center justify-center border bg-white p-2 transition-all hover:scale-95">
        <p className="text-center text-lg font-medium">{confession.content}</p>
      </article>
    </Link>
  );
}

export default Confession;
