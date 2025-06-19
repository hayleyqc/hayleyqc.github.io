import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../content/portfolio/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
            <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll}>Portfolio</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  <Button
                    onClick={() => window.open('/resume.pdf', '_blank')}
                  >
                    Resume
                  </Button>

                  <Button
                    onClick={() => window.open("mailto:hayleyqc@outlook.com")}
                  >
                    Contact
                  </Button>
                </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div className={`fixed left-0 right-0 top-0 h-20 py-6 hidden flex-row items-center justify-between z-10 tablet:flex transition-all duration-300 ${
        scrolled ? 'bg-white' : 'navbar-gradient'
      } ${scrolled ? 'shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]' : ''}`}>
        <div className="w-full max-w-8xl mx-auto flex items-center justify-between px-7">
          <h1
            onClick={() => router.push("/")}
            className="font-medium text-3xl cursor-pointer mob:p-2 laptop:p-0"
          >
            {name}.
          </h1>
          {!isBlog ? (
            <div className="flex">
              <Button onClick={handleWorkScroll}>Portfolio</Button>
              <Button onClick={handleAboutScroll}>About</Button>
              <Button
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Resume
              </Button>

              <Button onClick={() => window.open("mailto:hayleyqc@outlook.com")}>
                Contact
              </Button>
              
            </div>
          ) : (
            <div className="flex">
              <Button onClick={() => router.push("/")}>Home</Button>
              <Button
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Resume
              </Button>

              <Button onClick={() => window.open("mailto:hayleyqc@outlook.com")}>
                Contact
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
