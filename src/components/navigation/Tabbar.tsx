import useSession from "@/hooks/useSession";
import Logged from "../auth/Logged";
import NotLogged from "../auth/NotLogged";

function Tabbar() {
  const { session } = useSession();

  return (
    <footer className="border-t bg-white p-4">
      {session?.user ? <Logged session={session} /> : <NotLogged />}
    </footer>
  );
}

export default Tabbar;
