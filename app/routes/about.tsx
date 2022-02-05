import { NavLink } from "remix";

export default function About() {
  return (
    <div className="bg-blue-200">
      <h1 className="text-2xl">About</h1>

      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500"
            : "text-blue-100 p-3 text-2xl hover:text-red-900 hover:underline"
        }
      >
        home
      </NavLink>
    </div>
  );
}
