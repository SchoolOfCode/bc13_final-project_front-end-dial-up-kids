"use client";
const key = process.env.NEXT_PUBLIC_GOOGLE_KEY;
import { useSearchContext } from "../../context/search";
import SearchBar from "../../components/SearchBar";
import Link from "next/link";
// import FindMain from "../../components/Find/FindMain";
import Map from "../../components/map";
import { NavBar } from "../../components/NavBar/NavBar";
import MobileMapListSwitch from "../../components/MobileMapListSwitch";
import FindList from "../../components/FindList";

export default function About() {
  const {
    location,
    tailwindMobileMap,
    tailwindMobileList,
  }: any = useSearchContext();


  return (
    <div id="everything" className="dark:bg-gray-900">
      <div id='header' className="p-3">
        <NavBar />
        <div className="py-2">
        <SearchBar />
        </div>
      </div>
      <div id="main-body">
        <div id="mobile-content" className="md:hidden lg:hidden md:flex-col">
          <MobileMapListSwitch />
          <Map coord={location} visibility={tailwindMobileMap} />
          <div
            id="List"
            className={`
            overflow-auto space-y-1 ${tailwindMobileList}
            `}
          >
            <FindList />
          </div>
        </div>
        <div
          id="desktop-content"
          className="hidden md:flex lg:flex flex-row justify-items-start min-h-[80vh] max-h-[72vh] lg:visible  "
        >
          <Map coord={location} />
          <div
            id="List"
            className="
          min-w-[33%] max-w-[33%] overflow-auto my-3 pr-3 space-y-1"
          >
            <FindList />
          </div>
        </div>
      </div>
    </div>
  );
}
