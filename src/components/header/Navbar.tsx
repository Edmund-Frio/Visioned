import { NavLink } from "react-router-dom";

export function Navbar() {
  const styled = {
    className: "text-neutral-400 font-medium hover:text-neutral-200",
  };

  const links = [
    {
      className: styled.className,
      to: "/settings",
      name: "Settings",
    },
    {
      className: styled.className,
      to: "/about",
      name: "About",
    },
    {
      className: styled.className,
      to: "/account",
      name: "Account",
    },
  ];

  return (
    <div className="p-2">
      <nav className="flex  justify-end gap-4">
        {links.map((link) => (
          <NavLink className={link.className} to={link.to}>
            {link.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
