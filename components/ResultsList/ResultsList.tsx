import React from "react";
import { useSearchContext } from "../../context/search";
import { v4 as uuidv4 } from "uuid";
import { Card } from "@nextui-org/react";
import { useRouter } from "next/router";


export default function ResultsList() {
    const router = useRouter()
  const [results, setLocation, setBank, fetchComments]: any = useSearchContext();

    
//   function moreInfo(index: number) {
//     setBank(results[index]);
//     setLocation(results[index].lat_lng);
//     router.push("/moreInfoBank");
//     fetchComments(index);
//   }


//   function handleCard(index: number) {
//     setLocation(results[index].lat_lng);
//     console.log(`handleCard: `, location);
//   }
console.log("Results:", results)


  return (
    <div className=" min-w-[33%] max-w-[33%]   bg-blue-500 scrollbar-bg-blue-500 overflow-auto my-3 pr-3">
      <div id="List">
        {/* {results && results.map((element: any, index: number) => {
          return (
            <div key="cardpad" className="p-1">
              <Card
                isPressable
                key={uuidv4()}
                onPress={() => handleCard(index)}>
                <p>{element.name}</p>
                <p>{element.address}</p>
                <div></div>
              </Card>
              <button onClick={() => moreInfo(index)}>More Info</button>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}
