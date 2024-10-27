import CareerComponent from '@/pages/Components/CareerComponents/CareerComponent'
import Footerr from '@/pages/Components/Footer/Footerr'
import HeroSectionCareerAdvancement from '@/pages/Components/HeroSectionCareerAdvancement/HeroSectionCareerAdvancement'
import NavbarComponents from '@/pages/Components/Navbarr/NavbarComponents'
import React from 'react'

export default function CareerAdvancement  ()  {
  return (
    <>
      <NavbarComponents />
      <div className=" flex-col bg-white container mx-auto w-full h-full pb-5">
        <div>
          <HeroSectionCareerAdvancement />
        </div>
        <div className=" flex-col justify-center container px-4 md:px-60 py-5 space-y-5">
          <CareerComponent />
        </div>
      </div>
      <Footerr />
    </>  )
}
