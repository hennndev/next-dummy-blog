import Link from 'next/link'
import { MenuAlt3Icon } from '@heroicons/react/outline'

const Navbar = () => {
    return (
        <header className="lg:container mx-auto p-5">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-bold">MyBlogs</h1>
                </div>
                <nav>
                    <ul className="hidden sm:flex jusitfy-between items-center">
                        <li className="px-2 text-md">
                            <Link href="/blogs">
                                <a>Blogs</a>
                            </Link>
                        </li>
                        <li className="px-2 text-md">
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                        <li className="px-2 text-md">
                            <Link href="/contact">
                                <a>Contact</a>
                            </Link>
                        </li>
                    </ul>
                    <MenuAlt3Icon className="block h-5 sm:hidden cursor-pointer"/>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
