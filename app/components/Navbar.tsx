import { NavLink } from "remix";

export type RoutesConfig = {
  name: string;
  href: string;
}[];

type Props = {
  routesConfig: RoutesConfig;
};

export const Navbar: React.FC<Props> = ({ routesConfig }) => {
  const inactiveStyle =
    "text-blue-100 p-3 text-2xl hover:text-red-900 hover:underline mr-2";

  const activeStyle =
    "text-blue-500 p-3 text-2xl font-bold hover:text-red-900 underline mr-2";

  return (
    <nav className="flex p-2 bg-slate-600 text-slate-200">
      {routesConfig.map((route) => (
        <NavLink
          key={route.name}
          to={route.href}
          className={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
        >
          {route.name}
        </NavLink>
      ))}
    </nav>
  );
};
