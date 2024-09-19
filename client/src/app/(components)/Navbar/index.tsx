import React from 'react'
import {Search} from "lucide-react"


const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-4 py-3 dark:bg-black'>
        <div className="flex items-center gap-8">
            <div className="realtive flex h-min w-[200px]">
                <Search />
            </div>
        </div>
    </div>
  )
}

export default Navbar