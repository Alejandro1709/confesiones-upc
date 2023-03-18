"use client";

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
  return (
    <ul className="flex items-center gap-4">
      <li>
        <button
          className="flex items-center gap-2 rounded-md bg-gray-700 p-2 text-sm text-white hover:bg-gray-800"
          onClick={handleOpen}
        >
          Crear confesión
        </button>
      </li>
      <li>{session?.user && <LogoutButton image={session.user?.image} />}</li>
    </ul>
  );
}

export default Logged;
