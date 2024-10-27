import Footerr from '@/pages/Components/Footer/Footerr'
import HeroSectionPracticeArea from '@/pages/Components/HeroSectionPracticeArea/HeroSectionPracticeArea'
import NavbarComponents from '@/pages/Components/Navbarr/NavbarComponents'
import PracticeAreaComponent from '@/pages/Components/PracticeAreaComponents/PracticeAreaComponent'
import React from 'react'

export default function PracticeArea ()  {
  return (
    <>
      <NavbarComponents />
      <div className=" flex-col bg-white container mx-auto w-full h-full">
        <div>
          <HeroSectionPracticeArea />
        </div>
        <div className=" flex-col justify-center container px-4 md:px-80 py-5 space-y-5 bg-gray-600">
          <PracticeAreaComponent/>
        </div>
      </div>
      <Footerr />
    </>
      )
}
