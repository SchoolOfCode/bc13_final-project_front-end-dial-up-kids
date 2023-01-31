import { useSearchContext } from "../context/search";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";

export default function MobileMapListSwitch() {
  const {
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
}: any = useSearchContext();
  const router = useRouter();

  function handleMobileMapSwitch() {
    setShowMap(true);
    console.log(`showMap=`, showMap);
    setTailwindMobileMap("sm:flex");
    setTailwindMobileList("sm:hidden");
  }

  function handleMobileListSwitch() {
    setShowMap(false);
    console.log(`showMap=`, showMap);
    setTailwindMobileMap("sm:hidden");
    setTailwindMobileList("sm:flex-col");
  }

  return (
    <div id="MobileMapListSwitch" className="flex space-x-3 p-1 justify-evenly">
      <Button
        onClick={() => {
          handleMobileListSwitch();
        }}
        size="lg"
        disabled={!showMap}
      >
        List
      </Button>
      <Button
        onClick={() => {
          handleMobileMapSwitch();
        }}
        size="lg"
        disabled={showMap}
      >
        Map
      </Button>
      
    </div>
  );
}
