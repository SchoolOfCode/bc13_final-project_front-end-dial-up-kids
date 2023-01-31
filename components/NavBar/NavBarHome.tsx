import Link from "next/link";

export function NavBarHome() {
  // flex justify-end
  // flex flex-wrap items-center justify-between
  return (
    <nav className=" border-gray-200 py-2.5 rounded w-full">
      <div className="mx-auto w-full">
        <div className="flex w-full justify-end md:w-auto" id="navbar-default">
          <ul className="w-[200px] flex p-4 mt-4  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <Link href="/about" 
            className="block py-2 pl-3 pr-4 text-gray-900 rounded 
           md:border-0 md:hover:text-blue-700 hover:text-blue-700 md:p-0 
            dark:text-gray-300 md:dark:hover:text-white dark:hover:text-white"
            >About</Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}