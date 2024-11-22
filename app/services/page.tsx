/* eslint-disable react/no-unescaped-entities */
"use client";

import { Journey } from "@/components/journey";
import { Container } from "@mui/material";
import Image from "next/image";

const data = [
  "General health concerns",
  "Follow-up appointments",
  "Prescription renewals",
  "Medical advice and second opinions",
];
const data2 = [
  "Dermatology",
  "Pediatrics",
  "Mental Health",
  "Cardiology",
  "Women's Health",
];
const data3 = [
  "Same-day delivery options",
  "Automated refill reminders",
  "Medication tracking",
  "Prescription management",
];
const data4 = [
  {
    title: "Choose Your Service",
    details: "Select from our range of healthcare services based on your needs",
  },
  {
    title: "Book Your Appointment",
    details:
      "Schedule a convenient time slot with your chosen healthcare provider",
  },
  {
    title: "Receive Care",
    details: "Connect with your provider through our secure platform",
  },
  {
    title: "Follow-Up & Prescriptions",
    details: "Get your prescriptions and follow-up care all through the app",
  },
];

export default function ServicePage() {
  return (
    <>
      <section className="showcase_gradient">
        <Container
          maxWidth="lg"
          className="md:py-36 py-16 md:flex items-center gap-10"
        >
          <div className="md:w-1/2">
            <p className="md:text-[50px] text-[45px] font-bold text-[#0F172A] md:text-left text-center">
              Comprehensive Healthcare Services at Your Fingertips
            </p>
            <p className="text-md font-light md:text-left text-center">
              From routine check-ups to specialist consultations, we've got your
              healthcare needs covered
            </p>
          </div>

          <div className="md:w-1/2 md:mt-0 mt-16">
            <div className="relative flex justify-end">
              <Image
                src="/assets/Mockup2.svg"
                alt=""
                className=" md:ml-[50px]"
                width={450}
                height={100}
              />

              <span className="absolute left-20 top-64 md:block hidden">
                <Image
                  src="/assets/Ellipse.svg"
                  alt=""
                  className=""
                  width={60}
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

      <section>
        <Container maxWidth="lg" className="py-20 md:w-[85%] mx-auto">
          <div className="">
            <div className="flex items-center justify-center flex-col">
              <p className="protest-riot-regular text-[#0F172A] text-[40px] text-center">
                Our Primary services
                <Image
                  src="/assets/line.svg"
                  alt="line"
                  width={400}
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
                  src="/assets/image11.svg"
                  alt="line"
                  width={500}
                  height={40}
                  className=""
                />
              </div>

              <div className="md:w-1/2">
                <p className="text-[#0F172A] font-bold text-2xl">
                  Real-time Virtual Consultations
                </p>
                <p className="text-[#64748B] font-light mt-5">
                  Connect with licensed healthcare professionals through secure
                  video calls for:
                </p>

                <div className="flex flex-col gap-3 my-5">
                  {data.map((_, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-[#0F172A]"
                    >
                      <Image
                        src="/assets/circle_check.svg"
                        alt=""
                        width={25}
                        height={10}
                      />
                      <p>{_}</p>
                    </div>
                  ))}
                </div>

                <button className="bg-[#20BEB8] text-white px-7 py-2 rounded-lg">
                  Book a Consultation
                </button>
              </div>
            </div>

            <div
              className=" rounded-3xl bg-[#fff] md:p-10 p-5 my-10 flex md:flex-row flex-col-reverse
             items-center gap-10"
            >
              <div className="md:w-1/2">
                <p className="text-[#0F172A] font-bold text-2xl">
                  Expert Specialist Care
                </p>
                <p className="text-[#64748B] font-light mt-5">
                  Access and book appointments with a network of certified
                  specialists across various medical fields like:
                </p>

                <div className="flex flex-col gap-3 my-5">
                  {data2.map((_, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-[#0F172A]"
                    >
                      <Image
                        src="/assets/circle_check.svg"
                        alt=""
                        width={25}
                        height={10}
                      />
                      <p>{_}</p>
                    </div>
                  ))}
                </div>

                <button className="bg-[#20BEB8] text-white px-7 py-2 rounded-lg">
                  Find a Specialist
                </button>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/assets/image12.svg"
                  alt="line"
                  width={500}
                  height={40}
                  className=""
                />
              </div>
            </div>

            <div
              className=" rounded-3xl bg-[#fff] md:p-10 p-5 my-10 flex md:flex-row flex-col
             items-center gap-10"
            >
              <div className="md:w-1/2">
                <Image
                  src="/assets/image13.svg"
                  alt="line"
                  width={500}
                  height={40}
                  className=""
                />
              </div>

              <div className="md:w-1/2">
                <p className="text-[#0F172A] font-bold text-2xl">
                  Swift Prescription Delivery
                </p>
                <p className="text-[#64748B] font-light mt-5">
                  Get your medications delivered safely to your doorstep
                </p>

                <div className="flex flex-col gap-3 my-5">
                  {data3.map((_, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-[#0F172A]"
                    >
                      <Image
                        src="/assets/circle_check.svg"
                        alt=""
                        width={25}
                        height={10}
                      />
                      <p>{_}</p>
                    </div>
                  ))}
                </div>

                <button className="bg-[#20BEB8] text-white px-7 py-2 rounded-lg">
                  Order Medications
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container maxWidth="lg" className="py-20 md:w-[80%] mx-auto">
          <div className="flex items-center justify-center flex-col">
            <p className="protest-riot-regular text-[#0F172A] text-[40px] text-center">
              How MedisCare Works
              <Image
                src="/assets/line.svg"
                alt="line"
                width={400}
                height={40}
                className="md:flex hidden"
              />
            </p>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            {data4.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center gap-5 p-10"
              >
                <div
                  className={`p-5 flex items-center text-2xl font-bold justify-center text-white ${
                    idx == 1 || idx == 2 ? "bg-[#475569]" : "bg-[#1CABA5]"
                  } rounded-lg`}
                >
                  0{idx + 1}
                </div>
                <p className=" text-center text-2xl font-bolds">
                  Choose Your Service
                </p>
                <p className="text-center font-light text-[#64748B] w-[350px]">
                  Select from our range of healthcare services based on your
                  needs
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Journey />
      </section>
    </>
  );
}
