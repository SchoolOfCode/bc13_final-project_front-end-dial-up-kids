"use client";

import { useSearchContext } from "../../context/search";
import { v4 as uuidv4 } from "uuid";
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
import SearchBar from "../../components/SearchBar";
import Link from "next/link";
// import FindMain from "../../components/Find/FindMain";
import FindBody from "../../components/FindBody/FindBody";
import Map from "../../components/map";
import { NavBar } from "../../components/NavBar/NavBar";
import { useRouter } from "next/navigation";
import ListCards from "../../components/ListCards/ListCards";
import supabase from "../../components/supabaseClient";
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
    comments,
    setComments,
  ]: any = useSearchContext();
  const router = useRouter();

  async function fetchComments(index: number) {
    let slugData = searchResults[index].foodbank.slug;
    const { data, error } = await supabase
      .from("comments")
      .select()
      .like("slug", slugData);
	  console.log("supabase url", supabase)
    setComments(data);
  }

  function moreInfo(index: number) {
    setBank(searchResults[index]);
    setLocation(searchResults[index].lat_lng);
    router.push("/moreInfoBank");
    fetchComments(index);
  }

  // function handleCard(index: number) {
  //   setLocation(searchResults[index].lat_lng);
  //   console.log(`handleCard: `, location);
  // }

  return (
    <div id="everything" className='dark:bg-gray-900'>
      <div className="p-3">
        <NavBar />
        <SearchBar />
      </div>
      <FindBody/>
      <div id="mobile-content" className=" lg:hidden md:flex-col">
        <p>toggle bar</p>
        <Map coord={location} />
        <div
          id="List"
          className="
          min-w-[33%] max-w-[33%] overflow-auto
          ">
          {searchResults.map((el: any, ind: number) => {
            console.log ("Element:", el)
            return (
              <ListCards key="card" index={ind} element={el}  />
              
            );
          })}
        </div>
      </div>
      <div
        id="desktop-content"
        className=" flex flex-row justify-items-start min-h-[80vh] max-h-[72vh] ">
        <Map coord={location} />
        <div className="
        min-w-[33%] max-w-[33%] overflow-auto my-3 pr-3">
          <div
          id="List"
          className="space-y-0
        ">
          {searchResults.map((el: any, ind: number) => {
            return (
              <ListCards key="card" index={ind} element={el}  />
            );
          })}
         </div>
        </div>
      </div>
    </div>
  );
}
