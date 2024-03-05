import React, { useEffect, useState } from "react";

const SideBar = () => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log(
              "Service Worker registered with scope:",
              registration.scope
            );
          })
          .catch((error) => {
            console.error("Service Worker registration failed:", error);
          });
      });
    }
  }, []);

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Toggle button in the top-down navbar for small screens */}
      <button
        onClick={toggleSidebar}
        className="md:hidden bg-indigo-500 text-white p-2 rounded-full absolute top-4 left-4 mt-10  z-40 "
      >
        <svg
          width="32px"
          height="32px"
          viewBox="0 0 24.00 24.00"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#4d1aad"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#CCCCCC"
            stroke-width="0.048"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M11 21H12C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3H11M11 16L15 12M15 12L11 8M15 12H3"
              stroke="#000000"
              stroke-width="1.792"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </button>

      {/* Sidebar content */}
      <div
        className={`bg-black text-white h-screen w-1/8 p-4 m-4  md:block ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        style={{
          borderRadius: "22px",
          backgroundColor: "#0C0D14",
        }}
      >
        <ul>
          <li className="py-1 ">
            <a
              href="#"
              className="flex text-gray-500 items-center hover:ml-2 hover:text-white  p-1 font-bold text-sm rounded-lg"
            >
              <svg
                class="w-[27px] h-[27px] text-gray-800 m dark:text-white mr-2 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m4 12 8-8 8 8M6 10.5V19c0 .6.4 1 1 1h3v-3c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v3h3c.6 0 1-.4 1-1v-8.5"
                />
              </svg>
              Profile
            </a>
          </li>
          <li className="py-1">
            <a
              href="#"
              className="flex text-gray-500 items-center hover:ml-2 hover:text-white  p-1 font-bold text-sm rounded-lg"
            >
              <svg
                class="w-[27px] h-[27px] text-gray-800 dark:text-white mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m16 10 3-3m0 0-3-3m3 3H5v3m3 4-3 3m0 0 3 3m-3-3h14v-3"
                />
              </svg>
              Recent
            </a>
          </li>
          <li className="py-1">
            <a
              href="#"
              className="flex text-gray-500 items-center hover:ml-2 hover:text-white  p-1 font-bold text-sm rounded-lg"
            >
              <svg
                class="w-[27px] h-[27px] text-gray-800 dark:text-white mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18.1 17.6A7.2 7.2 0 0 1 12 21a6.6 6.6 0 0 1-5.8-3c-2.7-4.6.3-8.8.9-9.7A4.4 4.4 0 0 0 8 4c1.3 1 6.4 3.3 5.5 10.6 1.5-1.1 2.7-3 2.9-6.2 1.4 1 4 5.5 1.7 9.2Z"
                />
              </svg>
              Trending Now
            </a>
          </li>
          <li className="py-1">
            <a
              href="#"
              className="flex text-gray-500 items-center hover:ml-2 hover:text-white  p-1 font-bold text-sm rounded-lg"
            >
              <svg
                class="w-[27px] h-[27px] text-gray-800 dark:text-white mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-width="2"
                  d="M11 5.1a1 1 0 0 1 2 0l1.7 4c.1.4.4.6.8.6l4.5.4a1 1 0 0 1 .5 1.7l-3.3 2.8a1 1 0 0 0-.3 1l1 4a1 1 0 0 1-1.5 1.2l-3.9-2.3a1 1 0 0 0-1 0l-4 2.3a1 1 0 0 1-1.4-1.1l1-4.1c.1-.4 0-.8-.3-1l-3.3-2.8a1 1 0 0 1 .5-1.7l4.5-.4c.4 0 .7-.2.8-.6l1.8-4Z"
                />
              </svg>
              New
            </a>
          </li>
          <li className="py-1">
            <a
              href="#"
              className="flex text-gray-500 items-center hover:ml-2 hover:text-white  p-1 font-bold text-sm rounded-lg"
            >
              {/* Home Icon */}
              <svg
                class="w-[27px] h-[27px] text-gray-800 dark:text-white mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
              Random
            </a>
          </li>
          <li className="py-1">
            <a
              href="#"
              className="flex text-gray-500 items-center hover:ml-2 hover:text-white  p-1 font-bold text-sm rounded-lg"
            >
              <svg
                class="w-[27px] h-[27px] text-gray-800 dark:text-white mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M16 19h4c.6 0 1-.4 1-1v-1a3 3 0 0 0-3-3h-2m-2.2-4A3 3 0 0 0 19 8a3 3 0 0 0-5.2-2M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              2 player
            </a>
          </li>
          <li className="py-1">
            <a
              href="#"
              className="flex text-gray-500 items-center hover:ml-2 hover:text-white  p-1 font-bold text-sm rounded-lg"
            >
              <svg
                class="w-[27px] h-[27px] text-gray-800 dark:text-white mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 6.8a3 3 0 0 0-4.2.1M13 20h1a4 4 0 0 0 4-4V9A6 6 0 1 0 6 9v7m7 4v-1c0-.6-.4-1-1-1h-1a1 1 0 0 0-1 1v1c0 .6.4 1 1 1h1c.6 0 1-.4 1-1Zm-7-4v-6H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1Zm12-6h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v-6Z"
                />
              </svg>
              Action
            </a>
          </li>
          <li className="py-1">
            <a
              href="#"
              className="flex text-gray-500 items-center hover:ml-2 hover:text-white  p-1 font-bold text-sm rounded-lg"
            >
              {/* Home Icon */}
              <svg
                class="w-[27px] h-[27px] text-gray-800 dark:text-white mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.1 1.9-.7-.7m5.6 5.6-.7-.7m-4.2 0-.7.7m5.6-5.6-.7.7M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              Chees
            </a>
          </li>
          <li className="py-1">
            <a
              href="#"
              className="flex text-gray-500 items-center hover:ml-2 hover:text-white  p-1 font-bold text-sm rounded-lg"
            >
              <svg
                class="w-[27px] h-[27px] text-gray-800 dark:text-white mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="square"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.1 1.9-.7-.7m5.6 5.6-.7-.7m-4.2 0-.7.7m5.6-5.6-.7.7M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              Settings
            </a>
          </li>
          <div className="mt-12">
            <li className="py-1">
              <a
                href="#"
                className="flex text-gray-500 items-center hover:ml-2 hover:text-white  p-1 font-bold text-sm rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                  />
                </svg>
                Help
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                className="flex text-gray-500 items-center hover:ml-2 hover:text-white  p-1 font-bold text-sm rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                  />
                </svg>
                feedback
              </a>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
