import React from "react";

function SearchBar() {
  return (
    <>
      <header
        className="shadow-2xl "
        style={{
          borderBottomRightRadius: "32px",
          borderBottomLeftRadius: "32px",
        }}
      >
        <div className="mx-auto p-4 flex ">
          <div className="ml-auto w-1/4 relative">
            <input
              className="w-full px-4 py-2   border rounded-md focus:outline-none  focus:border--300"
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
      </header>
    </>
  );
}

export default SearchBar;
