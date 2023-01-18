"use client";

import { useSearchContext } from "../../context/search";
import { v4 as uuidv4 } from "uuid";
import { Card } from "@nextui-org/react";
import SearchBar from "../../components/SearchBar";
import Link from "next/link";
import Map from "../../components/map";
import { NavBar } from "../../components/NavBar/NavBar";
import { useRouter } from "next/navigation";
//import { Navbar } from "@nextui-org/react"; for later checking

export default function About() {
  const [
    search,
    setSearch,
    text,
    setText,
    searchResults,
    setSearchResults,
    location,
    setLocation,
    bank,
    setBank,
  ]: any = useSearchContext();
  const router = useRouter();

  function moreInfo(index: number) {
    setBank(searchResults[index]);
    setLocation(searchResults[index].lat_lng);
    router.push("/moreInfoBank");
  }

  function handleCard(index: number) {
    setLocation(searchResults[index].lat_lng);
    console.log(`handleCard: `, location);
  }

  return (
    <div id="everything">
      <div className="p-3">
      <NavBar />
      <SearchBar />
      </div>
      <div id="mobile-content" className=" lg:hidden md:flex-col">
        <p>toggle bar</p>
        <Map coord={location} />
        <div
          id="List"
          className="
          min-w-[33%] max-w-[33%] overflow-auto
          ">
          {searchResults.map((element: any, index: number) => {
            return (
              <Card
                isPressable
                key={uuidv4()}
                onPress={() => {
                  handleCard(index);
                }}>
                <p>{element.name}</p>
                <p>{element.address}</p>
                <div>
                  <button
                    onClick={() => {
                      moreInfo(index);
                    }}>
                    More Info
                  </button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
      <div
        id="desktop-content"
        className=" flex flex-row justify-items-start bg-red-500 min-h-[80vh] max-h-[72vh] ">
        <Map coord={location} />
        <div className="
        min-w-[33%] max-w-[33%] overflow-auto my-3 pr-3">
          <div
          id="List"
          className="
          
        ">
          {searchResults.map((element: any, index: number) => {
            return (
             
                <Card
                isPressable
                key={uuidv4()}
                onPress={() => {
                  handleCard(index);
                }}>
                <p>{element.name}</p>
                <p>{element.address}</p>
                <div>
                  <button
                    onClick={() => {
                      moreInfo(index);
                    }}>
                    More Info
                  </button>
                </div>
              </Card>
               
            );
          })}
         
         </div>
        </div>
      </div>
    </div>
  );
}