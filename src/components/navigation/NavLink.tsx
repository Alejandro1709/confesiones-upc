import Link from "next/link";
import type ILink from "@/types/link";

type Props = {
  link: ILink;
};

function NavLink({ link }: Props) {
  return link.isButton ? (
    <li>
      <button className="rounded-full bg-gray-700 p-2 text-xs text-white hover:bg-gray-800">
        {link.label}
      </button>
    </li>
  ) : (
    <li>
      <Link className="hover:underline" href={link.href}>
        {link.label}
      </Link>
    </li>
  );
}

export default NavLink;
