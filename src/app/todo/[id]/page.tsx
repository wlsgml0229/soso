"use client"
import React from "react"
import { useParams } from "next/navigation"

const page = () => {
  const { id } = useParams()
  return <>{id}</>
}

export default page
