import React from "react";

function Footer() {
  return (
    <>
      <div
        className="flex flex-col min-h-0 pt-3 "
        style={{
          backgroundColor: "#0C0D14",
        }}
      >
        <footer className=" text-white pb-2 mt-auto ">
          <hr
            style={{
              backgroundColor: "#666699",
              margin: "auto",
              display: "block",
              height: "0.4px",
              width: "90%",
            }}
          />
          <div className="container mx-auto mt-4 text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
