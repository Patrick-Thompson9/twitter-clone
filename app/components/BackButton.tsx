"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

function BackButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="flex justify-start items-center gap-2 text-xl sticky top-20 z-50 bg-slate-900 border-sky-200/25 border p-2 rounded-md place-self-start ml-2 mt-2 w-fit"
    >
      <FaArrowLeftLong />
      <span>Back</span>
    </button>
  );
}

export default BackButton;
