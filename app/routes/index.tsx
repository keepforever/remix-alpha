// import styles from "../tailwind.css";

// export function links() {
//   return [{ rel: "stylesheet", href: styles }];
// }

export default function Index() {
  return (
    <div className="bg-green-400">
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            <button
              type="button"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Deep Dive Into Jokes
            </button>
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>

        <div className="rounded-md bg-yellow-100 p-6">
          <div className="flex">
            <div className="flex-shrink-0">Exclamation Icon</div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Attention needed
              </h3>
              <div className="mt-2 text-sm text-yellow-700 py-7">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid pariatur, ipsum similique veniam quo totam eius
                  aperiam dolorum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ul>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              Pricing
            </h2>
            <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Take control of your team.
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Start building for free, then add a site plan to go live. Account
              plans unlock additional features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
