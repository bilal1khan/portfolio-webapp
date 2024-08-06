import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import googleLogo from "../images/googlelogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => setShowMenu(!showMenu);

  return (
    <>
      <div className="text-white font-mont top-0 left-0 right-0 z-50">
        <div className="bg-[#fff] p-4">
          <div
            className="container mx-auto flex flex-wrap items-center justify-between mt-4"
          >
            {/* <!-- Google logo --> */}
            <a href="/" className="mx-auto md:mx-3 md:mb-0 mb-4">
              <img src={googleLogo} alt="Google" className="md:h-8 h-6" />
            </a>

            {/* <!-- Search bar --> */}
            <div
              className="shadow-custom flex bg-transparent rounded-full px-6 py-2 shadow-lg mx-auto w-full max-w-md md:max-w-lg hover:shadow-md"
              style={{ border: "1px solid transparent" }}
            >
              <input
                type="text"
                placeholder="Search Google"
                value="Bilal"
                className="bg-transparent focus:outline-none pr-8 text-black flex-grow"
              />

              <button className="ml-auto text-gray-600 focus:outline-none">
                <FontAwesomeIcon icon={faTimes} size="xl" />
              </button>

              <button className="ml-4 text-blue-600 focus:outline-none">
                <FontAwesomeIcon icon={faSearch} size="lg" />
              </button>
            </div>

            {/* <!-- Toggle button for mobile --> */}
            <FaBars
              onClick={handleToggle}
              className="lg:hidden cursor-pointer text-black m-4"
            />

            {/* <!-- Navigation links for desktop --> */}
            <nav className="space-x-4 hidden lg:flex text-sm items-center ml-auto mr-6">
              <a href="#" className="text-black hover:underline">
                Gmail
              </a>
              <a href="#" className="text-black hover:underline">
                Images
              </a>
            </nav>
          </div>
        </div>

        {/* <!-- Mobile Navigation --> */}
        {showMenu && (
          <div className="lg:hidden bg-white pb-3">
            <div className="menu bg-white py-2 ml-4 mr-4">
              <div className="flex flex-col items-start text-blue-500 space-y-2">
                <a
                  href="#home"
                  className="menu-item border border-gray-600 px-4 py-2 rounded-full text-sm w-full text-center"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="menu-item border border-gray-600 px-4 py-2 rounded-full text-sm w-full text-center"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="menu-item border border-gray-600 px-4 py-2 rounded-full text-sm w-full text-center"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="menu-item border border-gray-600 px-4 py-2 rounded-full text-sm w-full text-center"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        )}

        {/* <!-- Desktop Navigation --> */}
        <div className="hidden lg:block bg-white pb-3">
          <div className="menu bg-white py-2 ml-20" style={{ width: "91%" }}>
            <div className="container flex items-center text-blue-500 mx-12">
              <a
                href="#home"
                className="menu-item border border-gray-600 px-4 py-2 rounded-full text-sm mx-4"
              >
                Home
              </a>
              <a
                href="#about"
                className="menu-item border border-gray-600 px-4 py-2 rounded-full text-sm mx-4"
              >
                About
              </a>
              <a
                href="#projects"
                className="menu-item border border-gray-600 px-4 py-2 rounded-full text-sm mx-4"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="menu-item border border-gray-600 px-4 py-2 rounded-full text-sm mx-4"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        <hr className="bg-[#dadce0]" />
      </div>
    </>
  );
};

export default Header;