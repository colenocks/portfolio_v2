"use client"
import Link from "next/link"
import Logo from "./Logo"
import { usePathname } from "next/navigation"

interface CustomLinkProps {
  href: string
  title: string
  className: string
}

const CustomLink = ({ href, title, className = "" }: CustomLinkProps) => {
  const pathname = usePathname()
  return (
    <Link href={href} className={`${className} group relative pb-0.5 hover:text-white ${pathname === href ? "text-white" : "text-white"}`}>
      {title}

      <span
        className={`ease absolute bottom-0 left-0 inline-block h-[1px] bg-white transition-[width] duration-300 group-hover:w-full group-hover:bg-white
      ${pathname === href ? "w-full" : "w-0"}`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const NavBar = () => {
  return (
    <header className="flex w-full items-center justify-between border-b border-gray-300 bg-gradient-to-b from-zinc-200 px-32 py-8 font-medium text-white backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30">
      <Logo />
      <nav className="">
        <CustomLink href="/about" title="About" className="ml-8" />
        <CustomLink href="/projects" title="Projects" className="ml-8" />
        <CustomLink href="/experience" title="Exp." className="ml-8" />
        <CustomLink href="/contact" title="Contact" className="mx-8" />
      </nav>
    </header>
  )
}

export default NavBar
