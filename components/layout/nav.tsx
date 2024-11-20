"use client";

import { Button, Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

export function Nav() {
  const [mobileNav, setMobileNav] = useState(false);

  const handleNavigation = (path: string) => {
    window.location.href = path;
    setMobileNav(false);
  };

  return (
    <div>
      <header
        className="border-b w-full bg-blur bg-white/50
      "
      >
        <Container maxWidth="lg">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/assets/kingdomhealth_logo.svg"
                alt="MediCare Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-600 hover:text-teal-600">
                Home
              </Link>

              <Link
                href="/services"
                className="text-gray-600 hover:text-teal-600"
              >
                Services
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-teal-600">
                About us
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-teal-600"
              >
                Contact
              </Link>
              <Button
                variant="contained"
                className="!bg-teal-500 hover:bg-teal-600"
              >
                Get Started
              </Button>
            </nav>

            <div className="md:hidden flex">
              {mobileNav ? (
                <GrClose
                  className=" text-[#0F172A] font-bold text-4xl cursor-pointer"
                  onClick={() => setMobileNav(!mobileNav)}
                />
              ) : (
                <IoMdMenu
                  className=" text-[#0F172A] font-bold text-4xl cursor-pointer"
                  onClick={() => setMobileNav(!mobileNav)}
                />
              )}
            </div>
          </div>
        </Container>
      </header>

      {mobileNav && (
        <div className="bg-transparent absolute left-0 right-0 top-24">
          <nav className="bg-white flex flex-col gap-8 w-[90%] mx-auto p-5 rounded-2xl">
            <p
              onClick={() => handleNavigation("/")}
              className="text-gray-600 hover:text-teal-600 text-lg cursor-pointer"
            >
              Home
            </p>

            <p
              onClick={() => handleNavigation("/services")}
              className="text-gray-600 hover:text-teal-600 text-lg cursor-pointer"
            >
              Services
            </p>

            <p
              onClick={() => handleNavigation("/about")}
              className="text-gray-600 hover:text-teal-600 text-lg cursor-pointer"
            >
              About us
            </p>
            <p
              onClick={() => handleNavigation("/contact")}
              className="text-gray-600 hover:text-teal-600 text-lg cursor-pointer"
            >
              Contact
            </p>
          </nav>
        </div>
      )}
    </div>
  );
}
