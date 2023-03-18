/* eslint-disable @typescript-eslint/no-floating-promises */
"use client";

import Router from "next/router";
import useModal from "@/hooks/useModal";
import type IConfession from "@/types/confession";

type Props = {
  confession: IConfession;
};

function Confession({ confession }: Props) {
  const { handleOpen } = useModal();

  const handleOpenConfession = () => {
    Router.push({
      pathname: "/",
      query: { type: "detail", id: confession.id },
    });
    handleOpen();
  };

  return (
    <article
      className="flex h-[187px] w-[383px] cursor-pointer select-none flex-col items-center justify-center border bg-white p-2 transition-all hover:scale-95"
      onClick={handleOpenConfession}
    >
      <p className="text-center text-lg font-medium">{confession.content}</p>
    </article>
  );
}

export default Confession;
