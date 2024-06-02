"use client"
import React from "react"
import { motion } from "framer-motion"

type Props = {
  text: string
  className?: string
}

const quote = {
  initial: { opacity: 1 },
  animate: { opacity: 1, transition: { delay: 0.5, staggerChildren: 0.09 } },
}

const eachWord = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 1 } },
}

const AnimatedText = (props: Props) => {
  return (
    <div className="mx-auto flex w-full items-center justify-center overflow-hidden py-2 text-center">
      <motion.h1 className={`inline-block w-full text-left text-6xl font-medium capitalize text-white ${props.className}`} variants={quote} initial="initial" animate="animate">
        {props.text.split(" ").map((word, index) => (
          <motion.span key={word + "-" + index} className="inline-block" variants={eachWord}>
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
}

export default AnimatedText
