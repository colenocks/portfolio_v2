import React from "react"
import { HeartIcon } from "./Icons"
import Image from "next/image"
import silhouette from "/public/silhouette.png"

const Footer = ({ className = "" }) => {
  const year = new Date().getFullYear()
  return (
    <footer
      className={`absolute bottom-0 flex w-full items-center justify-center gap-2 whitespace-nowrap border-t border-neutral-800 bg-zinc-800/30 from-inherit  px-32 py-8 text-sm font-medium text-white backdrop-blur-2xl sm:text-base ${className}`}
    >
      <div>{year} &copy;</div>
      <div className={"flex items-center"}>
        Built with{" "}
        <span className={"px-1 text-pink-400"}>
          <HeartIcon size={20} />
        </span>
        by Cole{" "}
        <div className="ml-1.5 hidden w-5 pt-1 text-base sm:inline-block">
          <Image src={silhouette} alt='Image by Mohamed Hassan from Pixabay - "https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=3714836"' className={"h-auto w-full invert"} loading="lazy" />
        </div>
      </div>
    </footer>
  )
}

export default Footer
