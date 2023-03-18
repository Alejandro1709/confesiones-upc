/* eslint-disable @typescript-eslint/no-misused-promises */
"use client";

import { signIn } from "next-auth/react";

function LoginButton() {
  return (
    <button
      className="rounded-full bg-gray-700 p-2 text-xs text-white hover:bg-gray-800"
      onClick={() => signIn()}
    >
      Iniciar Sesión
    </button>
  );
}

export default LoginButton;
