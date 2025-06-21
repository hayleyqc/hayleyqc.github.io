import { useRef } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../content/portfolio/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();
  const textFive = useRef();
  const router = useRouter();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current, textFive.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative  ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="container mx-auto mb-10">
        <div
          className="fixed top-0 left-0 w-full"
          style={{ height: "200px", zIndex: 100, pointerEvents: "none" }}
        >
          <div className="w-full h-full gradient-circle" />
        </div>
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-40 mt-24">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-xl tablet:text-4xl laptop:text-5xl laptopl:text-6xl p-1 tablet:p-2 font-bold w-full sm:w-4/5 laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-base tablet:text-2xl laptop:text-3xl laptopl:text-4xl p-1 tablet:p-2 w-full sm:w-4/5 laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-base tablet:text-2xl laptop:text-3xl laptopl:text-4xl p-1 tablet:p-2 w-full sm:w-4/5 laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-base tablet:text-2xl laptop:text-3xl laptopl:text-4xl p-1 tablet:p-2 w-full sm:w-4/5 laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
            <h1
              ref={textFive}
              className="text-base tablet:text-2xl laptop:text-3xl laptopl:text-4xl p-1 tablet:p-2 w-full sm:w-4/5 laptop:w-4/5"
            >
              {data.headerTaglineFive}
            </h1>
          </div>

          <Socials className="mt-2 laptop:mt-5" />
        </div>
        <div className="mt-20 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold underline">Portfolio</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => router.push(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold underline">About</h1>
          <div className="flex flex-col laptop:flex-row items-center laptop:items-start tablet:m-10 mt-2 gap-6">
            <p className="text-xl laptop:text-3xl w-full laptop:w-3/5">
              {data.aboutpara[0]}
              <br />
              <br />
              {data.aboutpara[1]}
            </p>
            <img
              src="images/about-me.png"
              alt="About Me"
              className="w-80 h-80 rounded-full object-cover shadow-lg mb-4 laptop:mb-0 laptop:ml-16"
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
