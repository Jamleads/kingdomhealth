import Image from "next/image";
import Link from "next/link";
import { Container, Typography } from "@mui/material";
import { Facebook, YouTube, Instagram, LinkedIn } from "@mui/icons-material";

export function Footer() {
  return (
    <>
      <footer className="bg-gray-900 text-white py-16">
        <Container maxWidth="lg">
          <div className="gridmd:grid-cols- md:flex justify-between gap-8">
            <div className="md:w-1/3 md:border-b-[1px] border-[#94A3B8]">
              <div className="flex flex-row items-center justify-start space-x-1">
                <Image
                  src="/kingnobg.png"
                  alt="MediCare Logo"
                  width={150}
                  height={40}
                  className="h-10 w-auto"
                />
                <div className="text-lg font-semibold">
                  KHealth
                </div>
              </div>
              <Typography variant="body2" className="text-[#94A3B8]">
                A personal healthcare companion that brings together expert
                medical care, convenience, and peace of mind — all in one secure
                platform.
              </Typography>

              <div className="flex gap-3 py-10">
                <Link href="#" className="text-[#CBD5E1] hover:text-teal-600">
                  <Facebook fontSize="small" />
                </Link>
                <Link href="#" className="text-[#CBD5E1] hover:text-teal-600">
                  <YouTube fontSize="small" />
                </Link>
                <Link href="#" className="text-[#CBD5E1] hover:text-teal-600">
                  <Instagram fontSize="small" />
                </Link>
                <Link href="#" className="text-[#CBD5E1] hover:text-teal-600">
                  <LinkedIn fontSize="small" />
                </Link>
              </div>
            </div>

            <div className="md:w-1/2 grid md:grid-cols-3 gap-8">
              <div>
                <Typography variant="h6" className="mb-4">
                  Quick links
                </Typography>
                <div className="space-y-2">
                  <Link
                    href="/"
                    className="block text-[#CBD5E1] hover:text-white"
                  >
                    Home
                  </Link>
                  <Link
                    href="/services"
                    className="block text-[#CBD5E1] hover:text-white"
                  >
                    Services
                  </Link>
                  <Link
                    href="/about"
                    className="block text-[#CBD5E1] hover:text-white"
                  >
                    About us
                  </Link>
                </div>
              </div>
              <div>
                <Typography variant="h6" className="mb-4">
                  Resources
                </Typography>
                <div className="space-y-2">
                  <Link
                    href="#"
                    className="block text-[#CBD5E1] hover:text-white"
                  >
                    Medical FAQs
                  </Link>
                  <Link
                    href="#"
                    className="block text-[#CBD5E1] hover:text-white"
                  >
                    Patient education
                  </Link>
                  <Link
                    href="#"
                    className="block text-[#CBD5E1] hover:text-white"
                  >
                    Health tips
                  </Link>
                </div>
              </div>
              <div>
                <Typography variant="h6" className="mb-4">
                  Contact us
                </Typography>
                <div className="space-y-2 text-[#CBD5E1]">
                  <p>+234 807 8910 112</p>
                  <p>info@medicare.com</p>
                  <p>Osler Tower, 25 Apple Avenue New York, NY</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:border-0 border-t border-[#94A3B8] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <Typography variant="body2" className="text-[#CBD5E1]">
              © 2024 MediCare. All rights reserved.
            </Typography>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-[#94A3B8] hover:text-white">
                Privacy policy
              </Link>
              <Link href="#" className="text-[#94A3B8] hover:text-white">
                Legal
              </Link>
              <Link href="#" className="text-[#94A3B8] hover:text-white">
                Terms and conditions
              </Link>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
