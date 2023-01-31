import { Inter } from '@next/font/google'
import { NavBarHome } from '../components/NavBar/NavBarHome'
import SearchBar from '../components/SearchBar'
import Image from 'next/image'
import type { NextPage } from 'next'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

//
export default function Home() {
  return (
    <>
      <div className='flex flex-col h-screen min-h-screen bg-peachey'>
				<div className='flex flex-col margin items-center gap-5 flex-1'>
					<Link href='/'>
						<Image
							src="/logo1.png"
							alt="logo-image"
							width="300"
							height="200"
							className='flex mt-20'
						/>
					</Link>
					<p
						className='text-gray-900 dark:text-gray-300'
					>Find your nearest food bank:
					</p>
					<SearchBar/>
				</div>	
			</div>
    </>
  )
}
