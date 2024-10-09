import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Menu, X} from 'lucide-react'

const Navbar = () => {
    const [mobileDrawer, setMobileDrawer] = useState(false)

    const toggleNavbar = () => {
        setMobileDrawer(!mobileDrawer)
    }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className='h-10 w-10 mr-2' src={logo} alt="logo" />
                    <span className="text-xl tracking-tight">VRworld</span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                    <li>Features</li>
                    <li>Workflow</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="#" className='py-2 px-3 border rounded-md'>
                        Sign In
                    </a>
                    <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>
                        Create an account
                    </a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {mobileDrawer ? <X/> : <Menu/>}
                    </button>
                </div>
            </div>
            {mobileDrawer && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 mt-2 flex flex-col justify-center items-center lg:hidden">
                    <ul>
                        <li className='py-4'>
                            <a href="#">Features</a>
                        </li>
                        <li className='py-4'>
                            <a href="#">Workflow</a>
                        </li>
                        <li className='py-4'>
                            <a href="#">Pricing</a>
                        </li>
                        <li className='py-4'>
                            <a href="#">Testmonials</a>
                        </li>
                    </ul>
                    <div className="flex space-x-6">
                        <div className="py-2 px-3 border rounded-md">
                            Sign in
                        </div>
                        <div className="py-2 px-3 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800">
                            Create an account
                        </div>
                    </div>
                </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar