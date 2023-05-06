import * as FiIcons from "react-icons/fi";
import { Logo, NavMenu } from "./NavbarData";

const logo = {
  name: "Visioned",
  path: "/",
};

const navItems = [
  {
    name: "Settings",
    icon: <FiIcons.FiSettings />,
    path: "/settings",
  },
  {
    name: "About",
    icon: <FiIcons.FiInfo />,
    path: "/about",
  },
];

function Navbar() {
  return (
    <div className="Navbar">
      <div className="inline-flex gap-3 w-full items-center">
        <Logo item={logo} />
        <NavMenu items={navItems} />
      </div>
    </div>
  );
}

export default Navbar;
