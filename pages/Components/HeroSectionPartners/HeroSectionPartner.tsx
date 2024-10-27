import React from 'react'

export default function HeroSectionPartner () {
  return (
    <>
    <div
      className="hero min-h-[300px]"
      style={{
        backgroundImage:
          "url(/bnrbnr.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Partners</h1>
        </div>
      </div>
    </div>
  </>
  )
}
