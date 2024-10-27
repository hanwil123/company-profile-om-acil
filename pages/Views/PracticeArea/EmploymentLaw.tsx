import Footerr from '@/pages/Components/Footer/Footerr'
import HeroSectionPracticeArea from '@/pages/Components/HeroSectionPracticeArea/HeroSectionPracticeArea'
import NavbarComponents from '@/pages/Components/Navbarr/NavbarComponents'
import EmploymentLawComponent from '@/pages/Components/PracticeAreaComponents/EmploymentLawComponent'
import React from 'react'

export default function EmploymentLaw  ()  {
  return (
    <>
      <NavbarComponents />
      <div className=" flex-col bg-white container mx-auto w-full h-full pb-5">
        <div>
          <HeroSectionPracticeArea />
        </div>
        <div className=" flex-col justify-center container px-4 md:px-60 py-5 space-y-5">
          <EmploymentLawComponent />
        </div>
      </div>
      <Footerr />
    </>  )
}
