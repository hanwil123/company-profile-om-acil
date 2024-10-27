import AboutContentComponents from "@/pages/Components/AboutContentComponents/AboutContentComponents";
import Footerr from "@/pages/Components/Footer/Footerr";
import HeroSectionPartner from "@/pages/Components/HeroSectionPartners/HeroSectionPartner";
import NavbarComponents from "@/pages/Components/Navbarr/NavbarComponents";
import PartnersComponent from "@/pages/Components/PartnersComponents/PartnersComponent";
import React from "react";

export default function Partners() {
  return (
    <>
      <NavbarComponents />
      <div className=" flex-col bg-white container mx-auto w-full h-full">
        <div>
          <HeroSectionPartner />
        </div>
        <div className=" flex-col justify-center container px-4 md:px-80 py-5 space-y-5 bg-gray-600">
          <PartnersComponent/>
        </div>
      </div>
      <Footerr />
    </>
  );
}
