// @ts-expect-error - This import is not working
import EnglishLogo from "@/assets/images/english-logo.svg?react";
import { useLanguage } from "@/hooks/useLanguage";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./ui/Button";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, toggleString, toggleLanguage } = useLanguage();
  const menuItems = [
    {
      title: t("Home"),
      to: "#",
    },
    {
      title: t("Prices"),
      to: "#",
    },
    {
      title: t("Sales"),
      to: "#",
    },
  ];
  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 relative">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
              <EnglishLogo />
            </Link>

            <div className="flex items-center lg:order-2">
              <Link
                to="/"
                className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                {t("Login")}
              </Link>
              <Button variant="text" onClick={() => toggleLanguage()}>
                {toggleString}
              </Button>
              <Button
                variant="transparent"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="w-5 h-5" aria-hidden="true" />
              </Button>
            </div>
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col font-medium lg:flex-row lg:mt-0 gap-5 m-0">
                {menuItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.to}
                      className="block text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
