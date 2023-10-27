import { useToggle } from "../../hooks/useToggle";

import { Logo } from "../../components/Logo/index";
import { ButtonMenu } from "./partials/ButtonMenu";
import { NavMenu } from "./partials/NavMenu";

const Header = ({ links }) => {
  const [isMenuOpen, setIsMenuOpen] = useToggle(false);

  return (
    <header className="container justify-between py-8 mb-16 items-center">
      <Logo>Events</Logo>
      <ButtonMenu onClick={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      <NavMenu links={links} isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
