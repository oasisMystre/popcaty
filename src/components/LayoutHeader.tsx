import { socials } from "@/config/socials";
import Image from "next/image";

export default function LayoutHeader() {
  return (
    <header className="flex flex-col space-y-4 p-4">
      <div className="self-center">
        <Image
          alt="PopCaty"
          src="/bonk.png"
          width={64}
          height={64}
        />
      </div>
      <div className="self-end flex space-x-4">
        <button className="btn">Buy PopCaty</button>
        <div className="flex space-x-2">
          {socials.map((social, index) => (
            <button
              key={index}
              className="bg-primary-dark/50 p-3 rounded-full"
            >
              <social.icon className="text-xl" />
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
