"use client";

import '../styles/globals.css'
import { useRouter } from 'next/navigation'
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { SearchContextProvider, useSearchContext } from "../context/search";
import Router from 'next/router';


export function SearchBar() {
  const [search, setSearch, text, setText, searchResults, setSearchResults, location, setLocation] = useSearchContext();
  const router = useRouter()

  function handleChange(event: any) {
    setSearch(event.target.value);
    //console.log(`handleChange`);
  }

  function handleClick() {
    setText(search);
    getFoodBanks();
    if (location == '') {
      setLocation(searchResults[0].lat_lng)
    }
    
    router.push('/find');
  }


  function handleEnter(event: any) {
    if (event.keyCode == 13) {
      setText(search);
      getFoodBanks();
      if (location == '') {
        setLocation(searchResults[0].lat_lng)
      }
      
      router.push('/find');
      // console.log(`search: `, search);
      // console.log(`text: `, text);
      // console.log(`searchResults: `, searchResults)
      // console.log(`length of searchResults:`, searchResults.length)
      // console.log(`typeof searchResults: `, typeof(searchResults))

    }
  }
    
  async function getFoodBanks() {
    try {
      if (text.length !== 0) {
        const res = await fetch(
          `https://www.givefood.org.uk/api/2/locations/search/?address=${text}`, {
            method: 'GET', 
            headers: {
              accept: 'Access-Control-Allow-Origin'
            }
          }
        );
        const data = await res.json();
        //console.log(data);
        setSearchResults(data);
        //console.log(`searchResults: `, searchResults);
        return data as any[];
      }
    } catch (e) {
      console.log(`getFoodBanks error`)
      //console.log(e)
    }
  }

  return (
    <div className="flex items-center">  
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input onChange={handleChange} onKeyDown={handleEnter} type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
      </div>
      <button onClick={handleClick} type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-[#FF6720] rounded-lg border border-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-[#FF6720] dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <span className="sr-only">Search</span>
      </button>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html className="bg-[#F3EFE8]">
      
      
      <head />
      <body>
        <Image
          src="/../images/foodbanklogo2.svg"
          alt="logo-image"
          width="300"
          height="200"
        />
        <SearchContextProvider>
          <SearchBar />
          {children}
        </SearchContextProvider>
      </body>
    </html>
  );
}