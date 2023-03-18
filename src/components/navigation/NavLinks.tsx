import Logged from "../auth/Logged";
import NotLogged from "../auth/NotLogged";

type Props = {
  session?: {
    expires: string;
    user: { email: string; image: string; name: string };
  };
};

function NavLinks({ session }: Props) {
  return (
    <nav className="hidden md:block">
      {session?.user ? <Logged session={session} /> : <NotLogged />}
    </nav>
  );
}

export default NavLinks;
