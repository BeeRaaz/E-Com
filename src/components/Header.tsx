import { Link } from "react-router-dom";
import Container from "./Container";
import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { CartContext } from "../contexts/CartContext";

const Header = () => {
  const [isNavActive, setIsNavActive] = useState<boolean>(false);
  const { theme } = useContext(ThemeContext);
  const { getCartCount } = useContext(CartContext);

  const initNav = (e: React.MouseEvent) => {
    e.preventDefault();
    const body = document.body;

    if (!isNavActive) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }

    setIsNavActive(!isNavActive);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] py-5 bg-white shadow-md dark:bg-slate-950 dark:text-white dark:shadow-slate-800">
      <Container>
        <div className="flex flex-wrap items-center">
          <div className="inline-block">
            <Link
              to={"/"}
              className="w-full text-2xl font-normal md:text-3xl md:font-semibold"
            >
              E-Com
            </Link>
          </div>
          <div className="flex-1 flex flex-wrap justify-center items-center px-5">
            <Link
              to={"#"}
              aria-label="nav opener"
              onClick={initNav}
              className={`w-8 h-6 relative before:w-full before:h-[2px] before:bg-black dark:before:bg-white before:rounded-[2px] before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 after:w-full after:h-[2px] after:bg-black dark:after:bg-white after:rounded-[2px] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:transition-all after:duration-300 before:transition-all before:duration-300 ${
                isNavActive
                  ? "before:mt-0 before:rotate-45 after:mt-0 after:-rotate-45"
                  : "before:-mt-[8px] after:mt-[8px]"
              }`}
            >
              <span
                className={`inline-block w-full h-full before:w-full before:h-[2px] before:bg-black dark:before:bg-white before:rounded-[2px] before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2 before:transition-all before:duration-300 ${
                  isNavActive ? "opacity-0 invisible" : "opacity-100 visible"
                }`}
              ></span>
            </Link>
          </div>
          <Link
            to={"/cart"}
            className="text-2xl font-normal md:text-3xl md:font-semibold ms-auto"
          >
            Cart({getCartCount()})
          </Link>
        </div>
      </Container>
      <nav
        aria-label="main navigation"
        className={`py-24 absolute w-full top-full left-0 bg-white dark:bg-slate-950 h-[calc(100dvh-76px)] z-[999] overflow-y-auto transition-all duration-700 ${
          isNavActive
            ? "opacity-100 visible -translate-x-0"
            : "opacity-0 invisible translate-x-full"
        }`}
      >
        <Container>
          <ul>
            <li>
              <Link
                to={""}
                onClick={() => {
                  setIsNavActive(!isNavActive);
                  document.body.style.overflow = "";
                }}
                className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-loose md:leading-relaxed lg:leading-snug transition-all duration-300 hover:text-white dark:hover:text-black"
                style={{ WebkitTextStroke: `2px ${theme === 'dark' ? 'white' : 'black'}` }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                onClick={() => {
                  setIsNavActive(!isNavActive);
                  document.body.style.overflow = "";
                }}
                className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-loose md:leading-relaxed lg:leading-snug transition-all duration-300 hover:text-white dark:hover:text-black"
                style={{ WebkitTextStroke: `2px ${theme === 'dark' ? 'white' : 'black'}` }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/products"}
                onClick={() => {
                  setIsNavActive(!isNavActive);
                  document.body.style.overflow = "";
                }}
                className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-loose md:leading-relaxed lg:leading-snug transition-all duration-300 hover:text-white dark:hover:text-black"
                style={{ WebkitTextStroke: `2px ${theme === 'dark' ? 'white' : 'black'}` }}
              >
                Products
              </Link>
            </li>
          </ul>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
