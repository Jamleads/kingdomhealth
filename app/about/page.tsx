/* eslint-disable react/no-unescaped-entities */
"use client";

import { Journey } from "@/components/journey";
import { impactData } from "@/lib/utils";
import { Container } from "@mui/material";
import Image from "next/image";

const data = [
  {
    sub: "Patient First, Always",
    main: "Every decision we make starts with one question: 'How does this benefit our patients?",
  },
  {
    sub: "Quality Without Compromise",
    main: "We maintain the highest standards in healthcare delivery, technology, and service",
  },
  {
    sub: "Innovation with Purpose",
    main: "We leverage technology not for its own sake, but to create meaningful healthcare solutions",
  },
  {
    sub: "Accessibility for All",
    main: "We're committed to making quality healthcare available to everyone, regardless of location or circumstance",
  },
  {
    sub: "Trust & Security",
    main: "We protect your health information with the same care we'd want for our own families",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="showcase_gradient">
        <Container
          maxWidth="lg"
          className="md:py-36 py-16 md:flex items-center gap-10"
        >
          <div className="md:w-1/2">
            <p className="md:text-[50px] text-[45px] font-bold text-[#0F172A] md:text-left text-center">
              Revolutionizing Healthcare Access Through Technology
            </p>
            <p className="text-md font-light md:text-left text-center">
              Our telemedicine app brings healthcare to you, anytime, anywhere.
              Consult with healthcare professionals, book appointments, and
              order prescriptions - all from your mobile device.
            </p>
          </div>

          <div className="md:w-1/2 md:mt-0 mt-16">
            <div className="relative flex justify-end">
              <Image
                src="/assets/about.svg"
                alt=""
                className=" md:ml-[50px]"
                width={450}
                height={100}
              />

              <span className="absolute left-0 top-80 md:block hidden">
                <Image
                  src="/assets/Ellipse.svg"
                  alt=""
                  className=""
                  width={80}
                  height={40}
                />
              </span>

              <span className="absolute left-10 top-32 md:block hidden">
                <Image
                  src="/assets/Subtract.svg"
                  alt=""
                  className=""
                  width={60}
                  height={40}
                />
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#F9FAFB]">
        <Container maxWidth="lg" className="py-20">
          <div>
            <div className="flex items-center justify-center flex-col">
              <p className="protest-riot-regular text-[#0F172A] text-[40px] text-center">
                Our Story
                <Image
                  src="/assets/line.svg"
                  alt="line"
                  width={200}
                  height={40}
                  className="md:flex hidden"
                />
              </p>
            </div>

            <div
              className=" rounded-3xl bg-[#fff] md:p-10 p-5 my-10 flex md:flex-row flex-col
             items-center gap-10"
            >
              <div className="md:w-1/2">
                <Image
                  src="/assets/image1.svg"
                  alt="line"
                  width={500}
                  height={40}
                  className=""
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-[#0F172A] font-bold text-2xl">
                  Bridging the Gap in Healthcare
                </p>
                <p className="text-[#64748B] font-light mt-5">
                  In an increasingly connected world, we saw a fundamental
                  disconnect: while technology was transforming every aspect of
                  our lives, healthcare access remained bound by traditional
                  constraints. Founded in 2024, MediCare emerged from a simple
                  yet powerful vision – to bring quality healthcare directly to
                  people's fingertips. What started as a solution to help busy
                  professionals access medical care has evolved into a
                  comprehensive healthcare platform serving thousands of
                  patients daily. Our journey has been driven by one unchanging
                  purpose: making healthcare more accessible, efficient, and
                  patient-centered.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-32">
            <div className="flex items-center justify-center flex-col">
              <p className="protest-riot-regular text-[#0F172A] text-[40px] text-center">
                Our Mission
                <Image
                  src="/assets/line.svg"
                  alt="line"
                  width={200}
                  height={40}
                  className="md:flex hidden"
                />
              </p>
            </div>

            <div
              className=" rounded-3xl bg-[#fff] md:p-10 p-5 my-10 flex md:flex-row flex-col-reverse
             items-center gap-10"
            >
              <div className="md:w-1/2">
                <p className="text-[#0F172A] font-bold text-2xl">
                  Empowering Better Health Decisions
                </p>
                <p className="text-[#64748B] font-light mt-5">
                  We believe that everyone deserves easy access to quality
                  healthcare. Our mission is to break down the barriers between
                  patients and healthcare providers, creating a seamless
                  connection that empowers better health decisions and outcomes.
                  Through innovative technology and a human-centered approach,
                  we're building a future where quality healthcare is just a tap
                  away.
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/assets/image2.svg"
                  alt="line"
                  width={500}
                  height={40}
                  className=""
                />
              </div>
            </div>
          </div>

          <div className="mt-32">
            <div className="flex items-center justify-center flex-col">
              <p className="protest-riot-regular text-[#0F172A] text-[40px] text-center">
                Our Values
                <Image
                  src="/assets/line.svg"
                  alt="line"
                  width={200}
                  height={40}
                  className="md:flex hidden"
                />
              </p>
            </div>

            <div
              className=" rounded-3xl bg-[#fff] md:p-10 p-5 my-10 flex md:flex-row flex-col
             items-center gap-10"
            >
              <div className="md:w-1/2">
                <Image
                  src="/assets/image3.svg"
                  alt="line"
                  width={500}
                  height={40}
                  className=""
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-[#0F172A] font-bold text-2xl">
                  The Principles That Drive Us
                </p>
                <div>
                  {data.map((item, idx) => (
                    <p key={idx} className="text-[#64748B] font-light mt-5">
                      <span className="text-[#20BEB8]">{item.sub}</span> <br />
                      {item.main}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-32">
            <div className="flex items-center justify-center flex-col">
              <p className="protest-riot-regular text-[#0F172A] text-[40px] text-center">
                Our Impact
                <Image
                  src="/assets/line.svg"
                  alt="line"
                  width={200}
                  height={40}
                  className="md:flex hidden"
                />
              </p>
            </div>

            <div className=" rounded-3xl bg-[#fff] md:p-10 p-5 my-10">
              <p className=" text-center text-2xl text-[#0F172A]">
                Making a Difference in Healthcare
              </p>

              <div className="grid md:grid-cols-4 grid-cols-1 gap-5 mt-10">
                {impactData.map((item, idx) => (
                  <div
                    key={idx}
                    className=" rounded-2xl bg-[#F2F5F8] flex flex-col items-center justify-center gap-2 p-5"
                  >
                    <p className=" text-2xl font-bold text-[#0F172A] text-center">
                      {item.count}
                    </p>
                    <p className="text-[#64748B] font-light text-center">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-32">
            <div className="flex items-center justify-center flex-col">
              <p className="protest-riot-regular text-[#0F172A] text-[40px] text-center">
                The Team
                <Image
                  src="/assets/line.svg"
                  alt="line"
                  width={200}
                  height={40}
                  className="md:flex hidden"
                />
              </p>
            </div>

            <div
              className=" rounded-3xl bg-[#fff] md:p-10 p-5 my-10 flex md:flex-row flex-col-reverse
             items-center gap-10"
            >
              <div className="md:w-1/2">
                <p className="text-[#0F172A] font-bold text-2xl">
                  Led by Healthcare and Technology Experts
                </p>
                <p className="text-[#64748B] font-light mt-5">
                  Our team brings together the best minds in healthcare,
                  technology, and patient care. From experienced medical
                  professionals to innovative tech experts, every member of our
                  team shares a common goal: transforming healthcare delivery
                  for the better. Our medical advisory board consists of leading
                  practitioners across various specialties, ensuring that we
                  maintain the highest standards of medical care while pushing
                  the boundaries of digital health innovation
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/assets/image4.svg"
                  alt="line"
                  width={500}
                  height={40}
                  className=""
                />
              </div>
            </div>
          </div>
        </Container>

        <section>
          <Journey />
        </section>
      </section>
    </>
  );
}
