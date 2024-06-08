import Image from "next/image";
import { MdArrowUpward } from "react-icons/md";

export default function LayoutFooter() {
  return (
    <footer className="p-8 flex flex-col space-y-8 md:w-[32em] md:self-center md:p-16">
      <div className="flex-col space-y-8 md:w-[36em] md:self-center ">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center p-4 bg-gradient-to-r from-primary-dark/50 to-primary-light/50 border border-primary-dark rounded-md">
            <h1 className="flex-1 text-xl">Total Supply</h1>
            <p className="text-xl font-extrabold">1B+</p>
          </div>
          <div className="flex items-center p-4 bg-gradient-to-r from-primary-dark/50 to-primary-light/50 border border-primary-dark rounded-md">
            <h1 className="flex-1 text-xl">Liquidity Token Burnt</h1>
            <p className="text-xl font-extrabold">1M+</p>
          </div>
          <div className="flex items-center p-4 bg-gradient-to-r from-primary-dark/50 to-primary-light/50 border border-primary-dark rounded-md">
            <h1 className="flex-1 text-xl">Tax</h1>
            <p className="text-xl font-extrabold">0/0</p>
          </div>
        </div>
      </div>
      <div className="flex space-x-1 bg-black text-white text-xs text-center rounded-full px-2 py-1 items-center justify-center">
        <Image
          src="/dexscreener.png"
          width={16}
          height={16}
          alt="dexscreener"
        />
        <p className="truncate">0x22dA3dCbCEC36947De7C7aD3d3CA138E6d37f27d</p>
        <MdArrowUpward className="rotate-45 text-lg" />
      </div>
    </footer>
  );
}
