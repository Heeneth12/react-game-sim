import { Disclosure } from "@headlessui/react";
import { Bars3Icon, HeartIcon, XMarkIcon } from "@heroicons/react/24/outline";

const user = {
  name: "HeenetH",
  email: "heeneth123@gmai.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [];
const userNavigation = [];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  return (
    <>
      <div className="min-h-full font-bold ">
        <Disclosure
          as="nav"
          className="  "
          style={{
            backgroundColor: "#0C0D14",
          }}
        >
          {({ open }) => (
            <>
              <div className="mx-auto">
                <div
                  className="flex items-center justify-between "
                  style={{
                    height: "8vh",
                  }}
                >
                  <div className="flex items-center ">
                    <div className="flex-shrink-0">
                      <a href="/">
                        <img
                          className="h-16 w-16 "
                          style={{
                            borderRadius: "1%",
                          }}
                          src="https://media.tenor.com/2a4KThsm4YgAAAAi/gaming-game-on.gif"
                          alt="Your Company"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="flex-grow mx-auto flex items-center justify-center">
                    <div className="relative">
                      <input
                        className="w-full sm:w-96   px-4 py-2 border rounded-md focus:outline-none focus:border--300 transition-all duration-300 ease-in-out"
                        placeholder="Search..."
                        style={{
                          borderWidth: "2px",
                          borderRadius: "22px",

                          borderColor: "#666699",
                        }}
                      />
                      <svg
                        className="absolute top-0 right-0 mt-3 mr-3 h-6 w-6 text-gray-400 cursor-pointer"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 15l5-5m0 0l-5-5m5 5H4"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-center mr-4 ">
                    <div>
                      <button className="bg-white p-2 rounded-xl hover:bg-gray-300  ">
                        Login
                      </button>
                    </div>

                    <div className="-mr-2 flex md:hidden ml-4">
                      {/* Mobile menu button */}
                      <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <HeartIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
      <hr
        style={{
          backgroundColor: "white",
          color: "#666699",
          display: "block",
          height: "0.1px",
          width: "700px",
        }}
      />
    </>
  );
}
