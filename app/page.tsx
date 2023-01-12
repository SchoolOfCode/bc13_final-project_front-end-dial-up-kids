import { NavBarHome } from "../components/NavBarHome"
import Image from "next/image";

export default function HomePage() {
	
	return (
		<>
			<NavBarHome/>
			<Image
          src="/../images/foodbanklogo2.svg"
          alt="logo-image"
          width="300"
          height="200"
          className='flex justify-center'
        />
		</>
	)
}