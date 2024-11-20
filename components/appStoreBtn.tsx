import { Button } from "@mui/material";
import Image from "next/image";

export function AppStoreBtn() {
  return (
    <>
      <div className="flex gap-4">
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
            <span className="font-bold md:text-lg !text-center">App Store</span>
          </span>
        </Button>
      </div>
    </>
  );
}
