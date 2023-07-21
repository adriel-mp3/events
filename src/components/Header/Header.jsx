import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-[1600px] mx-auto py-8">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Events logo" />
        <span className="flex items-center gap-4 text-2xl text-white font-medium before:content-[''] before:block before:w-[0.25rem] before:h-8 before:bg-white">
          Events
        </span>
      </div>
      <nav className="flex items-center gap-6">
        <ul className="flex items-center text-base text-white font-medium gap-6">
          <li>
            <NavLink to="/" end className='py-4'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className='py-4'>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/previous-events" className='py-4'>
              Previous Events
            </NavLink>
          </li>
        </ul>
        <Button />
      </nav>
    </header>
  );
};

export default Header;
