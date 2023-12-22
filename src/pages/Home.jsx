import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
// Components
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import EventsBlogs from "../components/EventsBlogs";
import Events from "../components/Events";
import Contact from "../components/Contact";
import Maps from "../components/Map";
import { BackToTop } from "../components/globalStyledComponents";
import Footer from "../components/Footer";

export default function Home() {
  const { name } = useSelector(selectData);

  // React.useEffect(
  //   function () {
  //     document.title = `${name} | Portfolio`;
  //   },
  //   [name]
  // );

  document.title = `HumaneSleepProject | Portfolio`;

  return (
    <>
      <Hero />
      <main>
        <AboutMe />
        <Events />
        <Maps />
        <EventsBlogs />
        <Contact />
      </main>
      <BackToTop home={"Home"} />
      <Footer />
    </>
  );
}
