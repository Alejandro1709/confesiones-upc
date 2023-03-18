import { NAVIGATION_LINKS } from "@/constants/navigation";
import useSession from "@/hooks/useSession";
import LoginButton from "../auth/LoginButton";
import LogoutButton from "../auth/LogoutButton";
import NavLink from "./NavLink";

function NavLinks() {
  const { session } = useSession();
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-6">
        {NAVIGATION_LINKS.map((link) => (
          <NavLink key={link.name} link={link} />
        ))}
        <li>
          {session?.user ? (
            <LogoutButton image={session.user?.image} />
          ) : (
            <LoginButton />
          )}
        </li>
      </ul>
    </nav>
  );
}

export default NavLinks;
