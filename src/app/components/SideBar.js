"use client"; // Add this if you're using Next.js App Router (for Next.js 13+)

import { useRouter } from "next/navigation"; // Use Next.js built-in router
import Image from 'next/image';

const SideBar = () => {
  const router = useRouter();

  const navItems = [
    { imgSrc: "/overview.png", label: "Overview", path: "/" },
    { imgSrc: "/routine.png", label: "Routine", path: "/routine" },
    { imgSrc: "/communication.png", label: "Communication", path: "/communication" },
    { imgSrc: "/analysis.png", label: "AI Analysis", path: "/ai-analysis" },
  ];

  return (
    <div className="w-40 bg-white h-screen fixed left-0 top-0 py-4 flex flex-col justify-center">
      <div className="flex flex-col space-y-6 justify-center flex-grow">
        <Image
          src="/logo.png"
          alt="logo"
          width={150}
          height={150}
          className="object-contain"
        />
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => router.push(item.path)} // Navigate on click
            className="w-full flex flex-col items-center p-8 transition-colors hover:bg-purple-300 hover:bg-opacity-30"
          >
            <Image
              src={item.imgSrc}
              alt={item.label}
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-s mt-1 text-gray-600">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
