import Link from "next/link";
import type ILink from "@/types/link";

type Props = {
  link: ILink;
};

function NavLink({ link }: Props) {
  return (
    <li>
      <Link className="hover:underline" href={link.href}>
        {link.label}
      </Link>
    </li>
  );
}

export default NavLink;
