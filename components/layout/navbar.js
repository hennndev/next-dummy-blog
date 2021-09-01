import Link from 'next/link'
import { MenuAlt3Icon } from '@heroicons/react/outline'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    return (
        <header className="lg:container mx-auto p-5">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-bold cursor-pointer" onClick={() => router.push('/')}>MyBlogs</h1>
                </div>
                <nav>
                    <ul className={`fixed w-full h-full left-0 ${!isOpen ? '-top-full' : 'top-0'} duration-700 z-40 bg-gray-300 pt-52 flex-col 
                    sm:static sm:p-0 sm:bg-transparent flex sm:flex-row sm:text-gray-700 jusitfy-between items-center`}>
                        <li className="px-2 text-md mb-4 text-xl sm:text-base sm:mb-0" onClick={() => setIsOpen(false)}>
                            <Link href="/blogs">
                                <a>Blogs</a>
                            </Link>
                        </li>
                        <li className="px-2 text-md mb-4 text-xl sm:text-base sm:mb-0" onClick={() => setIsOpen(false)}>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                        <li className="px-2 text-md mb-4 text-xl sm:text-base sm:mb-0" onClick={() => setIsOpen(false)}>
                            <Link href="/contact">
                                <a>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <MenuAlt3Icon className={`block h-5 z-50 ${isOpen && 'fixed'} ${isOpen && 'right-5'} sm:hidden cursor-pointer`} onClick={() => setIsOpen(!isOpen)}/>
            </div>
        </header>
    )
}

export default Navbar
