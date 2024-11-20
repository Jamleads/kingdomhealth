import Image from "next/image";
import { FC } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface CardProps {
  index: number;
  imageDir: string;
  title: string;
  details: string;
}

// export function Card({ iconBg, imageDir, title, details }: CardProps) {
export const Card: FC<CardProps> = ({ index, imageDir, title, details }) => {
  return (
    <>
      <div className="rounded-2xl shadow-3xl border-[#E5F4F2] border-2 shadow-[#1CABA50D] p-10 flex items-center justify-center flex-col gap-5 ">
        <div
          className={`p-4 ${
            index === 0
              ? "bg-[#20BEB82E]"
              : index === 1
              ? "bg-[#E275502E]"
              : "bg-[#7250E22E]"
          } rounded-lg`}
        >
          <Image src={imageDir} alt="" width={40} height={20} />
        </div>
        <p className="text-[#0F172A] text-center font-bold text-2xl">{title}</p>
        <p className="text-[#475569] font-light text-center">{details}</p>

        <button className="text-[#1CABA5] flex items-center gap-3 font-bold">
          Learn More <FaArrowRightLong />
        </button>
      </div>
    </>
  );
};
