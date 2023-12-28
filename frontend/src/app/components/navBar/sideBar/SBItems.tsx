"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect } from "react";
export default function SBItems(prompt: {
  pageName: string;
  children: React.ReactNode;
  onClick: () => void;
}) {

  const currentPath = usePathname();

  useEffect(() => {
    console.log(currentPath, prompt.pageName)
  }, [currentPath])
  return (
    <Link
      onClick={prompt.onClick}
      href={`/${prompt.pageName}`}
      className={`flex flex-row border-4 border-transparent   
      ${currentPath === `/${prompt.pageName}` ? "border-l-white shadow-md " : ""}
      px-3 mb-2
      sm:px-5 sm:mb-6`}
    >
      {prompt.children}
    </Link>
  );
}
