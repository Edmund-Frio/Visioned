import { NavLink } from "react-router-dom";
import { links } from "./NavbarData";

export function Navbar() {
  return (
    <div className="p-2.5">
      <nav className="grid grid-flow-col justify-end gap-10">
        <div>
          <NavLink >

          </NavLink>
        </div>
        {links.map((link, index) => (
          <div key={index}>
            <NavLink className={link.className} to={link.path}>
              {link.icon}
            </NavLink>
          </div>
        ))}
      </nav>
    </div>
  );
}
