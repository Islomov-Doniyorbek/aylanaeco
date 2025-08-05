import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import Logo from '../../../public/next.svg'
interface navbar {
    id: number,
    name: string,
    path: string
}
const Navbar = () => {
    const navData: navbar[] = [
        {
            id: 0,
            name: "Home",
            path: ""
        },
        {
            id: 1,
            name: "About",
            path: "about"
        },
        {
            id: 2,
            name: "Blog",
            path: "blog"
        },
        {
            id: 3,
            name: "Levels",
            path: "levels"
        },
        {
            id: 4,
            name: "Hamkor",
            path: "partners"
        },
        {
            id: 5,
            name: "Chart",
            path: "chart"
        },
        {
            id: 6,
            name: "Contact",
            path: "contact"
        },
    ]
  return (
    <div className="main___nav sticky top-0 flex justify-between px-4 py-5 items-center">
           <div className="logo flex gap-4.5 items-center text-amber-100 text-4xl">
              <Image src={Logo} alt="12" width={100} /> Aylana
            </div>
            <div className="menu">
              <nav className='flex justify-between gap-8'>
                  {navData.map(item=>{
                    return (
                      <Link key={item.id} href={`/${item.path}`}>
                        <span className='text-xl text-amber-100'>{item.name}</span>
                      </Link>
                    )
                  })}
              </nav>
            </div>
         </div>
    

  )
}

export default Navbar
