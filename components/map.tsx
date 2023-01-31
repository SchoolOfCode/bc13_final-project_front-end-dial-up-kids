const key = process.env.NEXT_PUBLIC_GOOGLE_KEY
import { useSearchContext } from "../context/search";
import { useState, use } from "react";

export default function Map({ coord, visibility}: any): JSX.Element {

    const {
      search, setSearch, text, setText, searchResults, setSearchResults, location, setLocation, bank, setBank, comments, setComments, toggle, setToggle, mapCode, setMapCode, showMap, setShowMap, tailwindMobileMap, setTailwindMobileMap, tailwindMobileList, setTailwindMobileList
    }: any = useSearchContext();

  
 let locationMap = `https://www.google.com/maps/embed/v1/place?key=${key}&q=${location}`




  return (
    <div className={`lg:min-w-[67vw] lg:min-h-[80vh] rounded-md ${visibility}`}>
      <iframe className="md:min-w-[67vw] min-h-[80vh] sm:min-w-[100vw] rounded-md p-3"
        
        loading="lazy"
        data-testid="MapMain"
        src={`${mapCode}`}>

        </iframe>
        {/* <iframe
  width="450"
  height="250"

 
  src={`${mapCode}`}
  >
</iframe> */}
    </div>
  );
}
