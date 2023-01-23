"use client";
import React, { useState } from "react";
import { useSearchContext } from "../../context/search";
import Map from "../../components/map";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import supabase from "../../components/supabaseClient";
import SearchBar from "../../components/SearchBar";
import { NavBar } from "../../components/NavBar/NavBar";
//import { Button, Card, Text } from "@nextui-org/react";
import { Card, Button } from "flowbite-react";
import CommentsBlock from "../../components/CommentsBlock/CommentsBlock";
import MobileMapListSwitch from "../../components/MobileMapListSwitch";

export default function MoreInfoBank() {
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
    comments,
    setComments,
    toggle,
    setToggle,
    mapCode,
    setMapCode,
    showMap,
    setShowMap,
    tailwindMobileMap,
    setTailwindMobileMap,
    tailwindMobileList,
    setTailwindMobileList,
  ]: any = useSearchContext();

  const router = useRouter();
  const element = bank;

 

  function goBack() {
    router.push("/find");
  }

  const mapCodeDirections = `&origin=${search}&destination=${location}`;

  function spoopy() {
    console.log("Mapcode:", mapCode);
    setMapCode(mapCodeDirections);
  }

  return (
    <>
      <div className="p-3">
        <NavBar />
        <SearchBar />
      </div>
      <Button onClick={goBack} color="warning" className="ml-3 m-1">
        Go Back
      </Button>
      <div id="mobile-content" className="md:hidden lg:hidden md:flex-col">
        <MobileMapListSwitch/>
        <Map coord={location} visibility={tailwindMobileMap}/>
        <div
          id="List"
          className={`
            overflow-auto p-2 ${tailwindMobileList}
          `}>
          <Card className="">
            <h5 className="text-l font-bold tracking-tight text-gray-900 dark:text-white">
              {element.name}
            </h5>
            <p className="font-light text-gray-900 dark:text-gray-300">
              {element.address}
            </p>
            <p className="font-light text-gray-900 dark:text-gray-300">
              {element.phone}
            </p>
            <p className="font-light text-gray-900 dark:text-gray-300">
              {element.email}
            </p>
            <Button
              onClick={() => { spoopy();
               
                
              }}
            >
              Directions
              <svg
                className="ml-2 -mr-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
          <CommentsBlock data={comments} />
        </div>
      </div>
      <div
        id="desktop-content"
        className="hidden md:flex lg:flex flex-row justify-items-start min-h-[80vh] max-h-[72vh]  lg:visible  "
      >
        <Map coord={location} />
        <div
          id="List"
          className="
            overflow-auto
            "
          >
          <Card className="">
            <h5 className="text-l font-bold tracking-tight text-gray-900 dark:text-white">
              {element.name}
            </h5>
            <p className="font-light text-gray-900 dark:text-gray-300">
              {element.address}
            </p>
            <p className="font-light text-gray-900 dark:text-gray-300">
              {element.phone}
            </p>
            <p className="font-light text-gray-900 dark:text-gray-300">
              {element.email}
            </p>
            <Button
              onClick={() => {
                console.log("directions clicked");
              }}
            >
              Directions
              <svg
                className="ml-2 -mr-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Card>
          <CommentsBlock data={comments} />
        </div>
      </div>
    </>
  );
}
