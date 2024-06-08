import { socials } from "@/config/socials";
import Image from "next/image";

export default function LayoutHeader() {
  return (
    <header className="flex items-center p-4">
      <div className="flex-1">
        <Image
          alt="PopCaty"
          src="/bonk.png"
          width={56}
          height={56}
        />
      </div>
      <div className="flex space-x-4">
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
