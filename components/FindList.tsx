const key = process.env.NEXT_PUBLIC_GOOGLE_KEY;
import { useEffect, useState } from "react";

// import { Card, Button } from "flowbite-react";
import { useSearchContext } from "../context/search";
import { useRouter } from "next/navigation";
import supabase from "./supabaseClient";
import FoodBankCard from "./FoodBankCard/FoodBankCard";

export default function FindList() {
  const {
    searchResults,
    cardIndex,
    setCardIndex,
    setBank,
    setLocation,
    setComments,
    setMapCode,
  }: any = useSearchContext();
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

  async function updateMap(key: any, location: any) {
    setMapCode(
      `https://www.google.com/maps/embed/v1/place?key=${key}&q=${location}`
    );
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
    updateMap(key, searchResults[index].lat_lng);
    setCardIndex(index);
  }

  return (
    <div className="space-y-1">
      {searchResults.map((element: any, index: number) => {
        return (
          <FoodBankCard
            element={element}
			cardIndex={cardIndex}
            key={index}
            index={index}
            handleCard={() => handleCard(index)}
            moreInfo={() => moreInfo(index)}
          />
          
        );
      })}
    </div>
  );
}
