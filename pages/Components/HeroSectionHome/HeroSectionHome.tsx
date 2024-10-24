import React from "react";

export default function HeroSectionHome() {
  return (
    <>
      <div
        className="hero min-h-[400px]"
        style={{
          backgroundImage: "url(/slide1-conv.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center items-end">
          <div className="max-w-md bg-blue-950 flex-col">
            <p className="mb-5 text-xl font-bold text-justify">
              NSMP develope legal practice that provides premium representations
            </p>
            <p className="mb-5 text-xl font-bold text-justify">
              for clients which cover broad diversity of commercial practice
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
