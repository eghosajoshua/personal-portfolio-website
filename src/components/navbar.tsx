import { RiMenu4Fill } from "react-icons/ri";
import { GoSun } from "react-icons/go";
import { useState, useRef } from "react";

const NavBar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const navBar = useRef(null);

  const changeDarkMode = () => {
    if (localStorage.getItem("darkmode") == "yes") {
      localStorage.setItem("darkmode", "no");
      document.body.classList.replace("dark", "light");
      if (showMobileNav) {
        //@ts-ignore
        navBar.current.style.backgroundColor = "white";
      }
    } else {
      localStorage.setItem("darkmode", "yes");
      document.body.classList.replace("light", "dark");
      if (showMobileNav) {
        //@ts-ignore
        navBar.current.style.backgroundColor = "rgb(2, 6, 23)";
      }
    }
  };

  const hideMobileNav = () => {
    setShowMobileNav((prev) => !prev);
    if (navBar.current) {
      if (showMobileNav) {
        //@ts-ignore
        navBar.current.style.backgroundColor = "transparent";
      } else {
        if (localStorage.getItem("darkmode") == "yes") {
          //@ts-ignore
          navBar.current.style.backgroundColor = "rgb(2, 6, 23)";
        } else {
          //@ts-ignore
          navBar.current.style.backgroundColor = "white";
        }
      }
    }
  };

  return (
    <nav
      ref={navBar}
      className="w-full mb-5 p-4 sticky top-0 z-10  backdrop-blur-sm bg-transparent"
    >
      <div className="max-w-6xl w-full flex justify-between items-center m-auto">
        {/* <p className="font-bold text-lg">EghosaJoshua</p> */}
        <p></p>
        <div className="flex gap-5 items-center">
          <div className="mr-10 md:flex hidden">
            <ul className="flex gap-5">
              <li>
                <a href="#about" className="dark:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="dark:text-white">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
          <button
            onClick={() => changeDarkMode()}
            className="bg-white dark:bg-slate-900 flex items-center justify-center p-2 w-10 h-10 rounded-full shadow-md"
          >
            <GoSun className="dark:text-white" size={20} />
          </button>
          <button
            onClick={() => {
              hideMobileNav();
            }}
            className="bg-white dark:bg-slate-900 flex items-center md:hidden  justify-center w-10 h-10 p-2 rounded-full shadow-md"
          >
            <RiMenu4Fill className="dark:text-white" size={20} />
          </button>
        </div>
      </div>
      {showMobileNav && (
        <div className="absolute top-[70px] shadow-lg left-0 bg-white dark:bg-slate-950 w-full md:hidden ">
          <ul className="flex gap-4 flex-col p-6 px-8">
            <li className="w-full">
              <a
                onClick={() => hideMobileNav()}
                className="p-3 dark:text-white"
                href="#about"
              >
                About
              </a>
            </li>
            <hr />
            <li>
              <a
                onClick={() => hideMobileNav()}
                className="p-3 dark:text-white"
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
