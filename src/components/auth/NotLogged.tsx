import LoginButton from "./LoginButton";

function NotLogged() {
  return (
    <ul className="flex items-center gap-4">
      <li>
        <LoginButton />
      </li>
    </ul>
  );
}

export default NotLogged;
