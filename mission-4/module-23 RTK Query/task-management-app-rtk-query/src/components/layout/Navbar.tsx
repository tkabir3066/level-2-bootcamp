import Logo from "@/assets/Logo";
import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center justify-between gap-3 px-5">
      <div className="flex items-center">
        <Link to="/">
          <Logo />
        </Link>{" "}
        <div className="font-bold ml-2">
          <span>Task</span>Master
        </div>
      </div>
      <Link to="/tasks">Tasks</Link>
      <Link to="/users">Users</Link>

      <div className="ml-auto">
        <ModeToggle />
      </div>
    </nav>
  );
}
