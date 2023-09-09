import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img src="/logo.svg" className="h-8 mr-3" alt="Clients App Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Clients App
          </span>
        </Link>

        <Nav />
      </div>
    </nav>
  );
};

export default Header;
