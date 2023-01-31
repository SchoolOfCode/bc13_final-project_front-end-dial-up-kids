const key = process.env.NEXT_PUBLIC_GOOGLE_KEY
import { useEffect, useState } from "react";
import { Card, Button } from "flowbite-react";
import { useSearchContext } from "../context/search";
import { useRouter } from "next/navigation";
import supabase from "./supabaseClient";

export default function FindList() {
	const { searchResults, cardIndex, setCardIndex, setBank, setLocation, setComments, setMapCode }: any = useSearchContext();
	const router = useRouter();

	async function fetchComments(index: number) {
    let slugData = searchResults[index].lat_lng;
    const { data, error } = await supabase
      .from("comments")
      .select()
      .like("slug", slugData)
	  .order('id', { ascending: false })
    console.log("supabase url", supabase);
    setComments(data);
  }

  async function updateMap(key:any, location:any ) {
    setMapCode(`https://www.google.com/maps/embed/v1/place?key=${key}&q=${location}` ) 
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
  }

  const [cssToggle, setCssToggle] = useState(``)  

  const cssLightMode =`
  hover:bg-blue-400 
  active:bg-blue-500
`;

const cssDarkMode = `
  dark:hover:bg-blue-800
  dark:active:bg-blue-900
  `;
  const cardSelectColour = `
  bg-lime-400 dark:bg-green-900
  `;

  useEffect(()=>{
	setCssToggle(``)
    setCssToggle (cardSelectColour)
  },[cardIndex])
  
    function selectedCardCheck(index:number) {
      if (cardIndex === index)
        return cssToggle
    }
  
  


	return <div
		className="space-y-1">
		{searchResults.map((element: any, index: number) => { 

			return (

				<Card 
					key={index}
					data-testid={`card-${index}`}
					onClick={() => {
						handleCard(index);
						setCardIndex(index);
						selectedCardCheck(index)
					}}
					className={ `hover:cursor-pointer ${selectedCardCheck(index)}
					
					${cssDarkMode} ${cssLightMode}
					${selectedCardCheck(index)}
					`}
	
				>
					<h5 className="text-l font-bold tracking-tight text-gray-900  dark:text-white">
						{element.name}
					</h5>
					<p className="font-light text-gray-900 dark:text-gray-300">
						{element.address}
					</p>
					<Button
						onClick={() => {
							moreInfo(index);
						}}
						data-testid={`cardbutton-${index}`}
					>
						More Info
						<svg
							className="ml-2 -mr-1 h-4 w-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</Button>
				</Card>
			);
		})}
	</div>
}