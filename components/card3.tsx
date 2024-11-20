import Image from "next/image";
import { FC } from "react";

interface Card3Props {
  imgDir: string;
  name: string;
  testimony: string;
}
export const Card3: FC<Card3Props> = ({ imgDir, name, testimony }) => {
  return (
    <>
      <div className="rounded-2xl px-5 py-7 bg-[#FFFFFFE5] shadow-[#3366FF0D] shadow-2xl flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <Image src={imgDir} alt="" width={50} height={10} />
          <div>
            <p className=" font-bold text-lg text-[#111827]">{name}</p>
            <p className=" font-light text-sm text-[#64748B]">Patient</p>
          </div>
        </div>

        <p className="text-[#475569] text-lg">{testimony}</p>

        <div className="flex items-center gap-2">
          {[...Array(5)].map((_, idx) => (
            <Image
              key={idx}
              src="/assets/Star_Icon.svg"
              alt=""
              width={20}
              height={10}
            />
          ))}
        </div>
      </div>
    </>
  );
};
