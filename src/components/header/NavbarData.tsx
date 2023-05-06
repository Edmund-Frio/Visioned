import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface LogoProps {
  item: {
    name: string;
    path: string;
  };
};

interface NavProps {
  items: {
    icon?: ReactNode;
    path: string;
  }[];
}

export const Logo = (props: LogoProps) => {
  return (
    <div>
      <NavLink 
        to={props.item.path}
        className="text-white text-[2.5rem]"  
      >
        {props.item.name}
      </NavLink>
    </div>
  );
};

export const NavMenu = (props: NavProps) => {
  return (
    <div className="flex w-full justify-end gap-5">
      {props.items.map((item) => {
        return (
          <div>
            <NavLink
              to={item.path}
              className="flex gap-1 items-center text-2xl text-neutral-400 font-medium hover:text-neutral-200"
            >
              {item.icon}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};
