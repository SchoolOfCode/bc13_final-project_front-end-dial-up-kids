

import React, { useState } from "react";
import renderContent from "../FindBody/FindBody";
import Map from "../map";
import { useSearchContext } from "../../context/search";
import { Card } from "@nextui-org/react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import supabase from "../supabaseClient";
import ToggleMap from "../ToggleMap/ToggleMap";
import { Size, useWindowSize } from "../../hooks/hooks";

export default function FindMain() {
  const size: Size = useWindowSize();
  console.log(size);

  const windowWidth: any = size.width;
  const [showMap, setShowMap] = useState(false);

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
  ]: any = useSearchContext();
  const router = useRouter();

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

  function handleCard(index: number) {
    setLocation(searchResults[index].lat_lng);
    console.log(`handleCard: `, location);
  }

  function handleToggle() {
    console.log ("THINGS HAPPENING")
    setShowMap(!showMap)
  }

  

  return (
    <div
      id="desktop-content"
      className="   justify-items-start sm:bg-blue-500 
   bg-red-500 min-h-[80vh] max-h-[72vh] sm:flex-col pr-9">
      <ToggleMap handleToggle={handleToggle} showMap={showMap} />
      <div
        id="main-content-wrapper"
        className=" flex  xs:flex-col sm:flex-col md:flex-row lg:flex-row">
        
      
      </div>
    </div>
  );
}
