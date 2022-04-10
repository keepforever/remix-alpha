import {
  json,
  Links,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "remix";
import type { MetaFunction } from "remix";
import styles from "./tailwind.css";
import { Navbar, RoutesConfig } from "./components/Navbar";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "icon",
      href: "guitar.png",
    },
  ];
}

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

type LoaderData = { routesConfig: RoutesConfig };

export const loader: LoaderFunction = async ({ request, params }) => {
  const data: LoaderData = {
    routesConfig: [
      {
        name: "home",
        href: "/",
      },
      {
        name: "about",
        href: "/about",
      },
      {
        name: "contact",
        href: "/contact",
      },
    ],
  };
  return json(data);
};

export default function App() {
  const data = useLoaderData();

  console.group(`root.tsx`);
  console.log("\n", `data = `, data, "\n");
  console.groupEnd();
  return (
    <html lang="en" className="bg-green-100 min-h-screen">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar routesConfig={data.routesConfig} />
        <div className="container mx-auto">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
