import { useSearchContext } from "../../context/search";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ListCards from "../ListCards/ListCards";
import { Card, Grid, Text, Button, Row } from "@nextui-org/react";
import SearchBar from "../SearchBar";
import Link from "next/link";
// import FindMain from "../../components/Find/FindMain";
import Map from "../map";
import { NavBar } from "../NavBar/NavBar";
import { useRouter } from "next/navigation";
import ToggleMap from "../ToggleMap/ToggleMap";
import supabase from "../supabaseClient";
import { Size, useWindowSize } from "../../hooks/hooks";
//import { Navbar } from "@nextui-org/react"; for later checking

export default function FindBody () {

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
    
      function handleCard(index: number) {
        setLocation(searchResults[index].lat_lng);
        console.log(`handleCard: `, location);
      }

    if (windowWidth < 450) {
      if (showMap) {
        return <Map coord={location} />;
      } return (
        
        <div className=" min-w-[33%] max-w-[33%]   bg-green-500 scrollbar-bg-blue-500 overflow-auto my-3 pr-3">
          <ToggleMap/>
          <div id="List">
            {searchResults.map((element: any, index: number) => {
              return (
                <ListCards key="card" index={ind} element={el}  />
              );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <>
          <Map coord={location}  />
          <div className=" min-w-[33%] max-w-[33%]  max-h-[80vh]  bg-red-500 scrollbar-bg-blue-500 overflow-auto my-3 pr-3">
            <div id="List">
              {searchResults.map((element: any, index: number) => {
                return (
                  <ListCards key="card" index={ind} element={el}  />
                );
              })}
            </div>
          </div>
        </>
      );
  };
}