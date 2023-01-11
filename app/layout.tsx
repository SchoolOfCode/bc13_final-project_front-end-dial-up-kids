"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { SearchContextProvider, useSearchContext } from "../context/search";

export function NavBar() {
  return (
    <nav className="navbar">
      <Link href="/">Home</Link>
      <Link href="/About">About</Link>
      <Link href="/Info">More Info</Link>
      <Link href="/Contact">Contact</Link>
    </nav>
  );
}

export function SearchBar() {
  const [search, setSearch, text, setText, searchResults, setSearchResults] = useSearchContext();

  function handleChange(event: any) {
    setSearch(event.target.value);
    //console.log(`handleChange`);
  }

  function handleClick() {
    getFoodBanks()
    setText(search);
    //console.log(`handleClick`);
  }

  function handleEnter(event: any) {
    if (event.keyCode == 13) {
      getFoodBanks();
      setText(search);
      console.log(`search: `, search);
      console.log(`text: `, text);
      console.log(`searchResult: `, searchResults)
    }
  }

  
  //useEffect(() => {
  //    async function getFoodBanks() {
  //      try {
  //        const res = await fetch(
  //          `https://www.givefood.org.uk/api/2/locations/search/?address=${text}`, {
  //            method: 'GET', 
  //            headers: {
  //              accept: 'Access-Control-Allow-Origin'
  //            }
  //          }
            
  //        );
  //        const data = await res.json();
  //        //console.log(data);
  //        setSearchResults(data);
  //        //console.log(`searchResults: `, searchResults);
  //        return data as any[];
  //      } catch (e) {
  //        console.log(`getFoodBanks error`)
  //        //console.log(e)
  //      }
  //  } 
  //  if (text.length !== 0) {
  //    getFoodBanks();
  //  }
  //}, [text])
    
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
        <NavBar />
        <SearchContextProvider>
          <SearchBar />
          {children}
        </SearchContextProvider>
        Example text
      </body>
    </html>
  );
}
