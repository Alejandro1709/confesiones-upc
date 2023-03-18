import Logo from "./Logo";
import NavForm from "./NavForm";
import NavLinks from "./NavLinks";
import useSession from "@/hooks/useSession";

function Navigation() {
  const { session } = useSession();

  return (
    <header className="flex h-16 items-center justify-center border-b bg-white">
      <div className="mx-6 flex w-full items-center justify-between md:mx-40">
        <Logo />
        <NavForm />
        <NavLinks session={session} />
        <button className="block rounded-md border p-2 md:hidden">Menu</button>
      </div>
    </header>
  );
}

export default Navigation;
