import React from "react"
import { Image } from "next/image"
import { FaPen } from "react-icons/fa"
import { FaClock } from "react-icons/fa6"
import { SlSpeech } from "react-icons/sl"

const Header = () => {
  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full h-fit bg-white border-t border-gray-100 dark:bg-gray-700 dark:border-gray-600">
      <ul className="flex w-full p-4 cursor-pointer gap-3 text-gray sm:flex">
        <li className="flex-1 flex-col flex items-center gap-2">
          <FaPen />
          <span>일정</span>
        </li>
        <li className="flex-1 flex-col flex items-center gap-2">
          <FaClock />
          <span>뽀모도로</span>
        </li>
        <li className="flex-1 flex-col flex items-center gap-2">
          <SlSpeech />
          <span>공유</span>
        </li>
      </ul>
    </nav>
  )
}

export default Header
