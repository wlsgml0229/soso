import React from "react"
import Link from "next/link"
import { Image } from "next/image"
import { FaPen } from "react-icons/fa"
import { FaClock } from "react-icons/fa6"
import { SlSpeech } from "react-icons/sl"

interface NavItemType {
  path: string
  icon: React.ReactNode
  label: string
}
const NavItem = ({ path, label, icon }: NavItemType) => {
  return (
    <li className="flex-1 flex-col flex items-center gap-2">
      <Link href={path} className="flex-1 flex-col flex items-center gap-2">
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  )
}

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full h-fit bg-white border-t border-gray-100 dark:bg-gray-700 dark:border-gray-600">
      <ul className="flex w-full p-2 cursor-pointer gap-3 text-gray sm:flex">
        <NavItem icon={<FaPen />} label="할일" path="/todo" />
        <NavItem icon={<FaClock />} label="뽀모도로" path="/" />
        <NavItem icon={<SlSpeech />} label="공유" path="/" />
      </ul>
    </nav>
  )
}

export default Navbar
