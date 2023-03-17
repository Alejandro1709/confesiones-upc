"use client";

import Link from "next/link";

function Navigation() {
  return (
    <header className="flex h-16 items-center justify-center border-b bg-white">
      <div className="mx-6 flex w-full items-center justify-between md:mx-40">
        <h2 className="text-3xl md:text-4xl">♨️</h2>
        <form className="w-2/4 md:block">
          <input
            className="w-full rounded-md border p-1"
            type="text"
            placeholder="Buscar confesión..."
          />
        </form>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-6">
            <li>
              <Link className="hover:underline" href="/">
                Feed
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/confesiones/">
                Nueva confesión
              </Link>
            </li>
            <li>
              <button className="rounded-full bg-gray-700 p-2 text-xs text-white hover:bg-gray-800">
                Cerrar sesión
              </button>
            </li>
          </ul>
        </nav>
        <button className="block rounded-md border p-2 md:hidden">Menu</button>
      </div>
    </header>
  );
}

export default Navigation;
