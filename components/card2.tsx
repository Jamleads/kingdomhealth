import Image from "next/image";
import { FC } from "react";

interface Card2Props {
  imgDir: string;
  text: string;
}

export const Card2: FC<Card2Props> = ({ imgDir, text }) => {
  return (
    <>
      <div className="bg-[#E5F4F2] border-[#79D8D44D] border-2 p-5 md:block flex flex-col items-center justify-center rounded-2xl">
        <Image src={imgDir} alt="" width={40} height={20} />
        <p className="text-[#2D2D2D] text-xl text-center md:text-left mt-5">
          {text}
        </p>
      </div>
    </>
  );
};
