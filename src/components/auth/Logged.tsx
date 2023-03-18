/* eslint-disable @typescript-eslint/no-floating-promises */
"use client";

import Router from "next/router";
import useModal from "@/hooks/useModal";
import LogoutButton from "./LogoutButton";

type Props = {
  session?: {
    expires: string;
    user: { email: string; image: string; name: string };
  };
};

function Logged({ session }: Props) {
  const { handleOpen } = useModal();

  const handleOpenForm = () => {
    Router.push({
      pathname: "/",
      query: { type: "create" },
    });
    handleOpen();
  };

  return (
    <ul className="flex items-center gap-4">
      <li>
        <button
          className="flex items-center gap-2 rounded-md bg-gray-700 p-2 text-sm text-white hover:bg-gray-800"
          onClick={handleOpenForm}
        >
          Crear confesión
        </button>
      </li>
      <li>{session?.user && <LogoutButton image={session.user?.image} />}</li>
    </ul>
  );
}

export default Logged;
