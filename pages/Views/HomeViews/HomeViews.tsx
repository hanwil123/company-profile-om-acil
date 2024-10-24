import AboutContentComponents from "@/pages/Components/AboutContentComponents/AboutContentComponents";
import CardHome from "@/pages/Components/CardHome/CardHome";
import ContactHomeComponent from "@/pages/Components/ContactHomeComponent/ContactHomeComponent";
import Footerr from "@/pages/Components/Footer/Footerr";
import HeroSectionHome from "@/pages/Components/HeroSectionHome/HeroSectionHome";
import HeroSectionHomee from "@/pages/Components/HeroSectionHome/HeroSectionHomee";
import NavbarComponents from "@/pages/Components/Navbarr/NavbarComponents";
import { Carousel } from "flowbite-react";
import React from "react";

export default function HomeViews() {
  return (
    <>
      <NavbarComponents />
      <div className=" flex-col bg-white container mx-auto w-full h-full pb-5">
        <div>
          <Carousel slideInterval={1000}>
            <HeroSectionHome />
            <HeroSectionHomee />
          </Carousel>
        </div>
        <div className=" flex-col justify-center container px-4 md:px-60 py-5 space-y-5">
          <div>
            <p>NEWS AND ARTICLE</p>
          </div>
          <div className=" grid grid-cols-2 md:grid-cols-3 gap-4 pb-5">
            <CardHome />
            <CardHome />
            <CardHome />
          </div>
          <AboutContentComponents />
          <ContactHomeComponent />
        </div>
      </div>
      <Footerr />
    </>
  );
}
