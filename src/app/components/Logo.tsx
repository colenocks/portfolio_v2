import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
const MotionLink = motion(Link)

const Logo = () => {
  return (
    <div>
      <Link href="/" className="text-light ease duration-900 flex items-center justify-center rounded-full  border border-white p-3 text-2xl font-bold transition-[colors_transform] hover:scale-110 hover:bg-pink-400">
        CE
      </Link>
    </div>
  )
}

export default Logo
