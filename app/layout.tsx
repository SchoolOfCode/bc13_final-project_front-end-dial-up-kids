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
    <div>
      <input
        type="search"
        onChange={handleChange}
        onKeyDown={handleEnter}
      ></input>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html>
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