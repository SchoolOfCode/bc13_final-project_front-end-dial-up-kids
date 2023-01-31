import Link from "next/link";
import Image from "next/image";
import { Navbar } from "flowbite-react";
import { useSearchContext } from "../../context/search";

export function NavBar() {
  const { setUsernameGlobal, usernameGlobal }: any = useSearchContext();
  let log = "Login"
  if (usernameGlobal != ""){
    log = "Account"
  }
  else if(usernameGlobal == ""){
    log = "Login"
  }

  return (
    <Navbar fluid={true} rounded={true} className="p-3 border-gray-200 rounded bg-gray-100  dark:bg-gray-800 dark:border-gray-700">
      <Link href="/" className="flex items-center ">
        {/*Swapped from Image because it prevents using Tailwind media queries for sizing*/}
         <Image
            src="/logo2.png"
            width="100"
            height="100"
            className="h-6 sm:h-10 sm:w-36 lg:w-36"
            alt="logo-image"
          ></Image>
     </Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link
          href="/"
          className="block py-2 pl-3 pr-4 text-gray-900 rounded 
      hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 
      dark:text-gray-200 md:dark:hover:text-white dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Home
        </Link>
        <Link
          href="/find"
          className="block py-2 pl-3 pr-4 text-gray-900 rounded 
      hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 
      dark:text-gray-200 md:dark:hover:text-white dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          Find a Food Bank
        </Link>
        <Link
          href="/about"
          className="block py-2 pl-3 pr-4 text-gray-900 rounded 
      hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 
      dark:text-gray-200 md:dark:hover:text-white dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          About
        </Link>
        <Link
          href="/login"
          className="block py-2 pl-3 pr-4 text-gray-900 rounded 
      hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 
      dark:text-gray-200 md:dark:hover:text-white dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          {`${log}`}
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
