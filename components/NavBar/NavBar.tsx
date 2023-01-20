import Link from "next/link";
import Image from "next/image";

export function NavBar() {
  return (
    <nav className="p-3 border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href="#" className="flex items-center">
            <Image
              src="/logo2.png"
              className="h-6 mr-3 sm:h-10"
              alt="logo-image"
              width="150"
              height="150"
            />
        </Link>
        <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <Link href="/" 
            className="block py-2 pl-3 pr-4 text-gray-900 rounded 
            hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 
            dark:text-gray-200 md:dark:hover:text-white dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent"
            >Home</Link>
            <Link href="/find" 
            className="block py-2 pl-3 pr-4 text-gray-900 rounded 
            hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 
            dark:text-gray-200 md:dark:hover:text-white dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent"
            >Find a Food Bank</Link>
            <Link href="/about" 
            className="block py-2 pl-3 pr-4 text-gray-900 rounded 
            hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 
            dark:text-gray-200 md:dark:hover:text-white dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent"
            >About</Link>
            <Link href="/contact" 
            className="block py-2 pl-3 pr-4 text-gray-900 rounded 
            hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 
            dark:text-gray-200 md:dark:hover:text-white dark:hover:bg-gray-100 dark:hover:text-white md:dark:hover:bg-transparent"
            >Contact</Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}