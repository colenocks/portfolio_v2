import React from "react"

const Footer = ({ className = "" }) => {
  const year = new Date().getFullYear()
  return (
    <footer
      className={`absolute bottom-0 flex w-full items-center justify-center gap-2 border-t border-gray-300 bg-gradient-to-b from-zinc-200 px-32 py-8 font-medium text-white backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:bg-gray-200 lg:dark:bg-zinc-800/30 ${className}`}
    >
      <span>{year} &copy;</span>
      <span>
        Built with <span className={"px-1 text-pink-400 "}>&#9825;</span>by Cole
      </span>
    </footer>
  )
}

export default Footer
