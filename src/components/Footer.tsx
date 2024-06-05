import React from "react"
import { HeartIcon } from "./Icons"
import Image from "next/image"
import silhouette from "/public/silhouette.png"

const Footer = ({ className = "" }) => {
  const year = new Date().getFullYear()
  return (
    <footer className={`absolute bottom-0 flex w-full items-center justify-center gap-2 border-t border-neutral-800  bg-zinc-800/30 from-inherit px-32 py-8 font-medium text-white backdrop-blur-2xl ${className}`}>
      <div>{year} &copy;</div>
      <div className={"flex"}>
        Built with{" "}
        <span className={"px-1 text-pink-400 "}>
          <HeartIcon />
        </span>
        by Cole{" "}
        <div className="ml-1.5 inline-block w-5 pt-1">
          <Image src={silhouette} alt='Image by Mohamed Hassan from Pixabay - "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3714836"' className={"h-auto w-full invert"} loading="lazy" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
