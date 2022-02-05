import { NavLink } from "remix";

type Props = {};

export const Navbar: React.FC<Props> = (props) => {
  console.log("\n", "\n", `props = `, props, "\n", "\n");
  const inactiveStyle =
    "text-blue-100 p-3 text-2xl hover:text-red-900 hover:underline mr-2";

  const activeStyle =
    "text-blue-500 p-3 text-2xl font-bold hover:text-red-900 underline mr-2";

  return (
    <nav className="flex p-2 bg-slate-600 text-slate-200">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
      >
        home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
      >
        About
      </NavLink>
    </nav>
  );
};
