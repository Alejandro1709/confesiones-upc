import Link from "next/link";
import type IConfession from "@/types/confession";

type Props = {
  confession: IConfession;
};

function Confession({ confession }: Props) {
  return (
    <Link href={`/confesiones/${confession.slug}`}>
      <article className="flex h-[187px] w-[383px] cursor-pointer select-none flex-col items-center justify-center border bg-white p-2 transition-all hover:scale-95 md:w-auto">
        <p className="text-center text-lg font-medium">{confession.content}</p>
      </article>
    </Link>
  );
}

export default Confession;
