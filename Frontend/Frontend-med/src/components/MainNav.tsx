import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

export default function MainNav() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <UsernameMenu />
      ) : (
        <div className="flex md:space-x-[200px] items-center">
          <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 space-x-4">
            <ul className="flex flex-wrap -mb-px">
              <li className="me-2">
                <a
                  href="/about-us"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-black-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  Who are we ?
                </a>
              </li>
              <li className="me-2">
                <a
                  href="/features"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-black-600 hover:border-gray-300 dark:hover:text-gray-300"
                  aria-current="page"
                >
                  Features
                </a>
              </li>
              <li className="me-2">
                <a
                  href="/pricing"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-black-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  Pricing
                </a>
              </li>
              <li className="me-2">
                <a
                  href="/demo"
                  className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-black-600 hover:border-gray-300 dark:hover:text-gray-300"
                >
                  Demo
                </a>
              </li>
              <li>
                <a className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-black-600 hover:border-gray-300 dark:hover:text-gray-300" href="/resources"> 
                  Resources
                </a>
              </li>
            </ul>
          </div>

          <Button
            variant="ghost"
            className="font-bold hover:text-black hover:bg-[#c3c0df]"
            onClick={async () => {
              await loginWithRedirect();
            }}
          >
            {" "}
            Log in
          </Button>
        </div>
      )}
    </span>
  );
}
