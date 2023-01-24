"use client";
const key = process.env.NEXT_PUBLIC_GOOGLE_KEY
import { useState, useEffect } from "react";
import { useSearchContext } from "../../context/search";
import { v4 as uuidv4 } from "uuid";
//import { Text, Card, Grid, Button, Row } from "@nextui-org/react";
import { Card, Button } from "flowbite-react";
import SearchBar from "../../components/SearchBar";
import Link from "next/link";
// import FindMain from "../../components/Find/FindMain";
import Map from "../../components/map";
import { NavBar } from "../../components/NavBar/NavBar";
import { useRouter } from "next/navigation";
import supabase from "../../components/supabaseClient";
import MobileMapListSwitch from "../../components/MobileMapListSwitch";

export default function About() {
  const [search, setSearch, text, setText, searchResults, setSearchResults, location, setLocation, bank, setBank, comments, setComments, toggle, setToggle, mapCode, setMapCode, showMap, setShowMap, tailwindMobileMap, setTailwindMobileMap, tailwindMobileList, setTailwindMobileList, commentInput, setCommentInput, usernameGlobal, setUsernameGlobal]: any = useSearchContext();
  const router = useRouter();

   const [cardIndex, setCardIndex] = useState(0)
   const [cssToggle, setCssToggle] = useState(``)

  const cssLightMode =`
    hover:bg-blue-400 
    active:bg-blue-500
  `
  ;

  const cssDarkMode = `
  dark:hover:bg-blue-800
  dark:active:bg-blue-900
  `;
  const cardSelectColour = `
  bg-lime-400 dark:bg-green-400
  `;

useEffect(()=>{
  setCssToggle (cardSelectColour)
},[cardIndex])




  async function fetchComments(index: number) {
    let slugData = searchResults[index].foodbank.slug;
    const { data, error } = await supabase
      .from("comments")
      .select()
      .like("slug", slugData);
    console.log("supabase url", supabase);
    setComments(data);
  }

  function moreInfo(index: number) {
    setBank(searchResults[index]);
    setLocation(searchResults[index].lat_lng);
    router.push("/moreInfoBank");
    fetchComments(index);
  }

  async function setMap(key:any, location:any ) {
    setMapCode(`https://www.google.com/maps/embed/v1/place?key=${key}&q=${location}` ) 
  }

  function handleCard(index: number) {
    setLocation(searchResults[index].lat_lng);
    console.log(`handleCard: `, location);
    setMap(key, searchResults[index].lat_lng);
  }

  function selectedCardCheck(index:number) {
    if (cardIndex === index)
      return cssToggle
  }



  return (
    <div id="everything" className="dark:bg-gray-900">
      <div className="p-3">
      
        <NavBar />
        <SearchBar />
      </div>
      <div id="mobile-content" className="md:hidden lg:hidden md:flex-col">
        <MobileMapListSwitch/>
        <Map coord={location} visibility={tailwindMobileMap} />
        <div
          id="List"
          className={`
          overflow-auto space-y-1 ${tailwindMobileList}
          `}
        >
          {searchResults.map((element: any, index: number) => {
            return (
              <Card
                key={index}
                onClick={() => {
                  handleCard(index);
                  setCardIndex(index);
                  selectedCardCheck(index);                
                }}
                className={`
                hover:cursor-pointer
                ${cssDarkMode} ${cssLightMode}
                ${selectedCardCheck(index)}
                `}
              >
                <h5 className="text-l font-bold tracking-tight text-gray-900 dark:text-white">
                  {element.name}
                </h5>
                <p className="font-light text-gray-900 dark:text-gray-300">
                  {element.address}
                </p>
                <Button
                  onClick={() => {
                    moreInfo(index);
                  }}
                >
                  More Info
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
            );
          })}
        </div>
      </div>
      <div
        id="desktop-content"
        className="hidden md:flex lg:flex flex-row justify-items-start min-h-[80vh] max-h-[72vh] lg:visible  "
      >
        <Map coord={location} />
        <div
          className="
        min-w-[33%] max-w-[33%] overflow-auto my-3 pr-3"
        >
          <div
            id="List"
            className="space-y-1
        "
          >
            {searchResults.map((element: any, index: number) => { 

            
              return (

                <Card 
                  key={index}
                  onClick={() => {
                    handleCard(index);
                    setCardIndex(index);
                    selectedCardCheck(index);
                  }}
                  className={ `hover:cursor-pointer 
                    ${cssDarkMode} ${cssLightMode}
                    ${selectedCardCheck(index)}
                 `}
                >
                  <h5 className="text-l font-bold tracking-tight text-gray-900  dark:text-white">
                    {element.name}
                  </h5>
                  <p className="font-light text-gray-900 dark:text-gray-300">
                    {element.address}
                  </p>
                  <Button
                    onClick={() => {
                      moreInfo(index);
                    }}
                  >
                    More Info
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
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
