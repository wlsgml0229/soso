import React from "react"
import { Image } from "next/image"

const Header = () => {
  const 
  return (
    <header className="bg-gray-800 flex justify-end">
      <span className="flex p-4 cursor-pointer gap-3 text-white flex sm:hidden">
        🍔
      </span>

      <ul className="flex p-4 cursor-pointer gap-3 text-white hidden sm:flex">
        <li>기록</li>
        <li>뽀모도로</li>
        <li>공유</li>
      </ul>
    </header>
  )
}

export default Header
