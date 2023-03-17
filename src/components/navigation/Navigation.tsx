import Logo from "./Logo";
import NavForm from "./NavForm";
import NavLinks from "./NavLinks";

function Navigation() {
  return (
    <header className="flex h-16 items-center justify-center border-b bg-white">
      <div className="mx-6 flex w-full items-center justify-between md:mx-40">
        <Logo />
        <NavForm />
        <NavLinks />
        <button className="block rounded-md border p-2 md:hidden">Menu</button>
      </div>
    </header>
  );
}

export default Navigation;
