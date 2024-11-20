import { Container } from "@mui/material";
import Image from "next/image";
import "./globals.css";
import { card2Data, card3Data, cardData } from "@/lib/utils";
import { Card } from "@/components/card";
import { Card2 } from "@/components/card2";
import { Card3 } from "@/components/card3";
import { AppStoreBtn } from "@/components/appStoreBtn";

export default function Page() {
  return (
    <>
      <section className="showcase_gradient">
        <Container
          maxWidth="lg"
          className="md:py-36 py-16 md:flex items-center gap-10"
        >
          <div className="md:w-1/2 md:block flex flex-col items-center">
            <span className="bg-[#79D8D480]/20 py-2 pl-2 pr-5 text-[#0F172A]">
              <span className="text-white bg-[#79D8D4] py-1 px-2 rounded-sm">
                NEW
              </span>{" "}
              Seamless and Intuitive user interface
            </span>

            <p className="md:text-[72px] text-[45px] font-bold text-[#0F172A] md:text-left text-center">
              Healthcare in the{" "}
              <span className="palm protest-riot-regular font-light">Palm</span>{" "}
              of your{" "}
              <span className="hands protest-riot-regular font-light">
                Hands
              </span>
            </p>
            <p className="text-md font-light md:text-left text-center">
              Our telemedicine app brings healthcare to you, anytime, anywhere.
              Consult with healthcare professionals, book appointments, and
              order prescriptions - all from your mobile device.
            </p>

            <button className="text-white bg-[#20BEB8] rounded-md shadow-md text-sm px-8 py-2 mt-10 hover:bg-teal-600">
              Get Started
            </button>
          </div>

          <div className="md:w-1/2 md:mt-0 mt-16">
            <div className="relative">
              <Image
                src="/assets/Mockup.svg"
                alt=""
                className=" md:ml-[50px]"
                width={750}
                height={100}
              />

              <span className="absolute -right-8 top-72 bg-[#ffffffad] md:block hidden">
                <Image
                  src="/assets/Doctor.svg"
                  alt=""
                  className=""
                  width={150}
                  height={40}
                />
              </span>

              <span className="absolute left-10 top-[25rem] bg-[#ffffffad] md:block hidden">
                <Image
                  src="/assets/tooth.svg"
                  alt=""
                  className=" rounded-lg"
                  width={60}
                  height={40}
                />
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#FFFFFF]">
        <Container maxWidth="lg" className="py-32">
          <div className="flex items-center justify-center flex-col">
            <p className="protest-riot-regular text-[#0F172A] text-[40px] text-center">
              Features that make us stand out
              <Image
                src="/assets/line.svg"
                alt="line"
                width={400}
                height={40}
                className="md:flex hidden"
              />
            </p>
            <p className="text-[#475569] mt-10 font-light text-center">
              These are some of the perks you get for using our app.
            </p>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-5 md:mt-20 mt-10">
            {cardData.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#CBD5E1]">
        <Container maxWidth="lg" className="">
          <div className="md:flex items-center">
            <div className="md:w-1/2 pt-20 md:block hidden">
              <Image
                src="/assets/Doctor2.svg"
                alt=""
                width={600}
                height={100}
              />
            </div>
            <div className="md:w-1/2 md:py-0 py-10">
              <div>
                <p className="text-[32px] text-center md:text-left font-bold protest-riot-regular text-[#0F172A]">
                  Why Choose us?
                </p>
                <p className=" font-light text-[#475569] text-center md:text-left text-sm mt-4">
                  As a personal healthcare companion that brings together expert
                  medical care, convenience, and peace of mind — all in one
                  secure platform, here are some reasons to choose us:
                </p>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-10">
                {card2Data.map((item, idx) => (
                  <Card2 key={idx} {...item} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#1CABA5]">
        <Container maxWidth="lg" className="py-32">
          <div>
            <div className="flex items-center justify-center flex-col">
              <p className="text-white font-bold text-[32px] protest-riot-regular">
                What our users say
              </p>
              <p className=" font-light text-sm text-white">
                Here’s why people choose and like us
              </p>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 mt-20 gap-5">
              {card3Data.map((item, idx) => (
                <Card3 key={idx} {...item} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#FFFFFF]">
        <Container maxWidth="lg" className="">
          <div className="md:flex items-center justify-between">
            <div className="md:pt-0 pt-10">
              <p className="protest-riot-regular md:text-left text-center text-[32px] font-bold md:w-[400px]">
                Get the Care you need, Anytime, Anywhere
              </p>
              <p className="text-[#475569] md:text-left text-center font-light my-5">
                Download the app and start your journey to better health.
              </p>
              <div className="md:block flex items-center justify-center">
                <AppStoreBtn />
              </div>
            </div>
            <div className="pt-20">
              <Image
                src="/assets/app_image.svg"
                alt=""
                width={600}
                height={100}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
