import { NAVIGATION_LINKS } from "@/constants/navigation";
import NavLink from "./NavLink";

function NavLinks() {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-6">
        {NAVIGATION_LINKS.map((link) => (
          <NavLink key={link.name} link={link} />
        ))}
      </ul>
    </nav>
  );
}

export default NavLinks;
