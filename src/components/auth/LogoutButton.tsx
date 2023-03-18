/* eslint-disable @typescript-eslint/no-misused-promises */
import { signOut } from "next-auth/react";
import Image from "next/image";

function LogoutButton({ image }: { image: string }) {
  return (
    <button
      className="flex items-center gap-2 rounded-md bg-gray-700 p-2 text-xs text-white hover:bg-gray-800"
      onClick={() => signOut()}
    >
      <Image
        className="rounded-full"
        src={image}
        width={20}
        height={20}
        alt="Logout"
        priority
      />
      Cerrar Sesión
    </button>
  );
}

export default LogoutButton;
