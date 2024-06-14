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
    <header className="flex w-full flex-col items-center justify-center gap-6 border-b border-neutral-800 bg-zinc-800/30 from-inherit p-6 font-medium text-white backdrop-blur-2xl sm:p-10 lg:flex-row lg:justify-between lg:gap-5 lg:px-32 lg:py-8">
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
