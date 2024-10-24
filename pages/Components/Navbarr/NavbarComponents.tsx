import React from "react";
import Link from "next/link";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function NavbarComponents() {
  return (
    <>
      <Navbar fluid rounded className=" bg-white">
        <NavbarBrand href="/">
            <h1 className=" text-amber-800">NURJADIN SUMONO MULYADI & PARTNERS</h1>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Button>
            <Link href="/Components/LoginForm/LoginForm">Login</Link>
          </Button>
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="/" className=" text-black">
            Home
          </NavbarLink>
          <NavbarLink
            href="/Views/AboutUsViews/AboutUsViews"
            className=" text-black"
          >
            About Us
          </NavbarLink>
          <NavbarLink href="#" className=" text-black">
            People
          </NavbarLink>
          <NavbarLink href="#" className=" text-black">
            Practice Area
          </NavbarLink>
          <NavbarLink href="#" className=" text-black">
            Global Reach
          </NavbarLink>
          <NavbarLink href="#" className=" text-black">
            Careers
          </NavbarLink>
          <NavbarLink href="#" className=" text-black">
            Contact
          </NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </>
  );
}
