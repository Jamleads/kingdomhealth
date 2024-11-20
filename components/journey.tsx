"use client";

import Image from "next/image";
import { Button, Container, Typography } from "@mui/material";

export function Journey() {
  return (
    <>
      <div className="bg-[#1CABA5] text-white py-20">
        <Container
          maxWidth="lg"
          className="flex flex-col items-center justify-center gap-5"
        >
          <Typography variant="h3" className="text-center mb-4 font-bold">
            Join Our Journey
          </Typography>
          <Typography
            variant="body1"
            className="text-center max-w-3xl mx-auto mb-8"
          >
            As we continue to grow and evolve, our commitment to improving
            healthcare access remains unchanged. Whether you&apos;re a patient
            seeking better healthcare solutions or a healthcare professional
            looking to expand your practice, we invite you to join us in shaping
            the future of healthcare.
          </Typography>
          <div className="flex justify-center gap-4">
            <Button
              variant="contained"
              className="!bg-[#000000] flex items-center gap-3"
            >
              <Image
                src="assets/GooglePlaylogo.svg"
                alt=""
                width={100}
                height={37}
                className="h-[30px] w-auto"
              />
              <span className="flex flex-col items-start">
                <span className="font-light md:text-xs !text-start !text-[0.50rem]">
                  Get it on
                </span>
                <span className="font-bold md:text-lg !text-center">
                  Google Play
                </span>
              </span>
            </Button>

            <Button
              variant="contained"
              className="!bg-[#000000] flex items-center gap-3"
            >
              <Image
                src="assets/Applelogo.svg"
                alt=""
                width={100}
                height={37}
                className="h-[30px] w-auto"
              />
              <span className="flex flex-col !items-start">
                <span className="font-light md:text-xs !text-start !text-[0.50rem]">
                  Download on the
                </span>
                <span className="font-bold md:text-lg !text-center">
                  App Store
                </span>
              </span>
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}
