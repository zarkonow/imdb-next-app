"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavBarItem({ title, param }) {
  const genre = usePathname().split("/")[2];

  return (
    <div className="">
      <Link
        className={` hover:text-amber-500 font-semibold  ${
          genre === param
            ? "underline underline-offset-8 decoration-4 text-amber-300 rounded-lg"
            : ""
        }  `}
        href={`/top/${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
