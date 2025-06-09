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

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

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
                    onClick={() => window.open("mailto:hello@chetanverma.com")}
                  >
                    Contact
                  </Button>
                </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div className="mt-10 h-20 py-6 hidden flex-row items-center justify-between sticky bg-white dark:bg-slate-900 dark:text-white top-0 z-10 tablet:flex">

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

            <Button onClick={() => window.open("mailto:hello@chetanverma.com")}>
              Contact
            </Button>
            
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            <Button
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Resume
            </Button>

            <Button onClick={() => window.open("mailto:hello@chetanverma.com")}>
              Contact
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
