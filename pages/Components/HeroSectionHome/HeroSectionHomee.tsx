import React from "react";

export default function HeroSectionHomee() {
  return (
    <>
      <div
        className="hero min-h-[400px]"
        style={{
          backgroundImage: "url(/slide2-conv.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center items-end">
          <div className="max-w-md bg-blue-950 flex-col">
            <p className="mb-5 text-xl font-bold">
              Nurjadin Sumono Mulyadi & Partners handle complex, sophisticated
              transactions as well as.
            </p>
            <p className="mb-5 text-xl font-bold">
              high-profile cases leading to its recognition as a
              well-established law firm in Indonesia.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
