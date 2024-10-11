// @ts-expect-error - This import is not working
import EnglishLogo from "@/assets/images/english-logo.svg?react";
// @ts-expect-error - This import is not working
import ArabicLogo from "@/assets/images/arabic-logo.svg?react";
import { useLanguage } from "@/hooks/useLanguage";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./ui/Button";
import TrackRequest from "./TrackRequest";
import Language from "@/models/language.enum";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, toggleString, toggleLanguage, currentLanguage } = useLanguage();
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
      <header className="border-b">
        <nav className="bg-white border-gray-200 px-4 md:px-6 py-2.5 relative">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
              {currentLanguage === Language.Arabic ? (
                <ArabicLogo />
              ) : (
                <EnglishLogo />
              )}
            </Link>

            <div className="flex items-center md:order-2">
              <div className="hidden md:flex md:items-center">
                <TrackRequest />
                <Link
                  to="/"
                  className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-4 md:px-5 py-2 md:py-2.5 mr-2 focus:outline-none font-semibold"
                >
                  {t("Login")}
                </Link>
              </div>
              <Button variant="text" onClick={() => toggleLanguage()}>
                {toggleString}
              </Button>
              <Button
                variant="transparent"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="w-5 h-5" aria-hidden="true" />
              </Button>
            </div>
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } justify-between items-center w-full md:flex md:w-auto md:order-1`}
              id="mobile-menu-2"
            >
              <ul className="flex flex-col font-medium md:flex-row md:mt-0 gap-5 m-0">
                {menuItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.to}
                      className="block text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 font-semibold"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li className="md:hidden">
                  <TrackRequest />
                </li>
                <li className="md:hidden">
                  <Link
                    to="/"
                    className="block text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 font-semibold"
                  >
                    {t("Login")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
