"use client";
import { FaSistrix } from "react-icons/fa6";

function SearchBar() {
  return (
    <search className="absolute flex items-center gap-1 left-0 top-[50%] text-xl translate-y-[-50%] mx-3">
      <div className="text-2xl">
        <FaSistrix />
      </div>
      <label htmlFor="search" className="sr-only relative" />
      <input
        id="search"
        type="text"
        placeholder="Search..."
        className="bg-slate-900 text-white border border-white/40 rounded-sm px-2 py-1 max-w-40 lg:max-w-60 font-extralight"
      />
    </search>
  );
}

export default SearchBar;
