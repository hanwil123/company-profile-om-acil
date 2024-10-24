import AboutContentComponents from "@/pages/Components/AboutContentComponents/AboutContentComponents";
import CardHome from "@/pages/Components/CardHome/CardHome";
import Footerr from "@/pages/Components/Footer/Footerr";
import HeroSectionAboutUs from "@/pages/Components/HeroSectionAboutUs/HeroSectionAboutUs";
import NavbarComponents from "@/pages/Components/Navbarr/NavbarComponents";
import React from "react";

export default function AboutUsViews() {
  return (
    <>
      <NavbarComponents />
      <div className=" flex-col bg-white container mx-auto w-full h-full pb-5">
        <div>
          <HeroSectionAboutUs />
        </div>
        <div className=" flex-col justify-center container px-4 md:px-60 py-5 space-y-5">
          <AboutContentComponents />
          <div>
            <div className=" grid grid-cols-2 md:grid-cols-3 gap-4">
              <CardHome />
              <CardHome />
              <CardHome />
            </div>
          </div>
        </div>
      </div>
      <Footerr />
    </>
  );
}
