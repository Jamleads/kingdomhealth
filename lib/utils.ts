import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const cardData = [
  {
    title: "Appointment Bookings",
    details:
      "Easily book appointments with specialists and manage your healthcare schedule.",
    imageDir: "/assets/calendar-tick.svg",
  },
  {
    title: "Real-time virtual Consultations",
    details:
      "Connect with healthcare professionals for personalized consultations from the comfort of your home.",
    imageDir: "/assets/Video_call.svg",
  },
  {
    title: "Delivered-sent",
    details:
      "Order your medications and have them delivered straight to your doorstep.",
    iconBg: "!bg-[#7250E22E]",
    imageDir: "/assets/Delivered-sent.svg",
  },
];

export const card2Data = [
  {
    imgDir: "/assets/icon1.svg",
    text: "Convenient and Accessible Healthcare",
  },
  {
    imgDir: "/assets/icon2.svg",
    text: "Experienced Medical Professionals",
  },
  {
    imgDir: "/assets/icon3.svg",
    text: "Fast and Reliable Prescription Delivery",
  },
  {
    imgDir: "/assets/icon4.svg",
    text: "Secure and Confidential Consultations",
  },
];

export const card3Data = [
  {
    imgDir: "/assets/customer1.svg",
    name: "Sara Lee",
    testimony:
      "I've been using MediCare for the past year, and it's completely transformed the way I manage my healthcare. The app is user-friendly and the service is outstanding.",
  },
  {
    imgDir: "/assets/customer2.svg",
    name: "John Smith",
    testimony:
      "I'm so grateful for Medicare. The ability to consult with healthcare professionals and have prescriptions delivered has been a lifesaver for me and my family.",
  },
  {
    imgDir: "/assets/customer2.svg",
    name: "Jane Doe",
    testimony:
      "MediCare has been a game-changer for my healthcare routine. The virtual consultations and prescription delivery service have saved me so much time and hassle.",
  },
];
