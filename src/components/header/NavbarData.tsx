import * as FiIcons from "react-icons/fi"

const styles = {
  className: "text-gray-500 text-2xl hover:text-neutral-200/80",
};

export const links = [
  {
    icon: <FiIcons.FiSettings />,
    path: "/settings",
    className: styles.className,
  },
  {
    icon: <FiIcons.FiInfo />,
    path: "/about",
    className: styles.className,
  },
  {
    icon: <FiIcons.FiUser />,
    path: "/account",
    className: styles.className,
  },
];
