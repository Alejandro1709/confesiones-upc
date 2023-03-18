/* eslint-disable @typescript-eslint/no-misused-promises */
import { signOut } from "next-auth/react";

function LogoutButton() {
  return (
    <button
      className="rounded-full bg-gray-700 p-2 text-xs text-white hover:bg-gray-800"
      onClick={() => signOut()}
    >
      Cerrar Sesión
    </button>
  );
}

export default LogoutButton;
