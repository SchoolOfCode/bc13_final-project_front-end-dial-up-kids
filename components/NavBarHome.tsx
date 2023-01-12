import Link from "next/link";

export function NavBarHome() {
    return (
      <nav className="">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    );
  }