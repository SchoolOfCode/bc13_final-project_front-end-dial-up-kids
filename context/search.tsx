import { createContext, useContext, useState } from 'react';
//import { Root, Foodbank, Urls, Needs, Politics, Urls2, Urls3 } from '../types/index'
const key = process.env.NEXT_PUBLIC_GOOGLE_KEY
//const searchResultsInitial: Root[] | [] = [];
const searchResultsInitial: any = [];
const showMapInitial: boolean = false;

export const SearchContext = createContext([] as any);

// Context provider
export function SearchContextProvider({children}: any) {
	
	const [search, setSearch] = useState('')
	const [text, setText] = useState('')
	const [searchResults, setSearchResults] = useState([])
	const [location, setLocation] = useState('region=GB&zoom=5&center=53.4862, 0.00');
	const [bank, setBank] = useState(searchResultsInitial)
	const [comments, setComments] = useState([])
	const [toggle, setToggle] = useState("hidden")
	const [mapCode, setMapCode] = useState (`https://www.google.com/maps/embed/v1/place?key=${key}&q=United Kingdom=GB&zoom=6&center=54.4862, -3.43`)
	const [showMap, setShowMap] = useState(showMapInitial);
	const [tailwindMobileMap, setTailwindMobileMap] = useState("sm:hidden");
	const [tailwindMobileList, setTailwindMobileList] = useState("sm:flex-col");
	const [commentInput, setCommentInput] = useState("")
	const [usernameGlobal, setUsernameGlobal] = useState("")
	const [cardIndex, setCardIndex] = useState(0)
	const [userNum, setUserNum] = useState(0)

	// Note: because using array destructuring need to array destructure out EVERY value on pages it's imported on, otherwise the values will get mixed up due to index order
	return <SearchContext.Provider value={{search, setSearch, text, setText, searchResults, setSearchResults, location, setLocation, bank, setBank, comments, setComments, toggle, setToggle, mapCode, setMapCode, showMap, setShowMap, tailwindMobileMap, setTailwindMobileMap, tailwindMobileList, setTailwindMobileList, commentInput, setCommentInput, usernameGlobal, setUsernameGlobal, cardIndex, setCardIndex, userNum, setUserNum}} >
		{children}
	</SearchContext.Provider>
}

// Custom hook
export function useSearchContext() {
	return useContext(SearchContext)
}

export const searchResultsExample = [
	{
		"type": "organisation",
		"name": "AY Group",
		"lat_lng": "51.4858132,-0.2010718",
		"distance_m": 3590,
		"distance_mi": 2.23,
		"phone": "02073818502",
		"email": "office@ay-group.org",
		"foodbank": {
			"name": "AY Group",
			"slug": "ay-group",
			"network": "IFAN",
			"urls": {
				"self": "https://www.givefood.org.uk/api/2/foodbank/ay-group/",
				"html": "https://www.givefood.org.uk/needs/at/ay-group/"
			}
		},
		"needs": {
			"id": "8d41439d",
			"needs": "Unknown",
			"excess": null,
			"number": 0,
			"found": "2020-08-29T09:24:39.159"
		},
		"address": "Estate Office Block A\r\nPeabody Hall\r\nFulham Estate\r\nLillie Road\r\nSW6 1UH",
		"postcode": "SW6 1UH",
		"politics": {
			"parliamentary_constituency": "Chelsea and Fulham",
			"mp": "Greg Hands",
			"mp_party": "Conservative",
			"mp_parl_id": 1526,
			"ward": "Lillie",
			"district": "Hammersmith and Fulham",
			"urls": {
				"self": "https://www.givefood.org.uk/api/2/constituency/chelsea-and-fulham/",
				"html": "https://www.givefood.org.uk/needs/in/constituency/chelsea-and-fulham/"
			}
		},
		"urls": {
			"html": "https://www.givefood.org.uk/needs/at/ay-group/"
		}
	}
]