'use client'
import Link from 'next/link'
import Logo from './Logo'
import { usePathname } from 'next/navigation'

interface CustomLinkProps {
  href: string
  title: string
  className: string
}

const CustomLink = ({ href, title, className = '' }: CustomLinkProps) => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <Link href={href} className={`${className} group relative hover:text-pink-400 ${pathname === href ? 'text-pink-400' : 'text-white'}`}>
      {title}

      <span
        className={`ease absolute -bottom-0.5 left-0 inline-block h-[1px] bg-pink-400 transition-[width] duration-300 group-hover:w-full group-hover:bg-pink-400
      ${pathname === href ? 'w-full' : 'w-0'}`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const NavBar = () => {
  return (
    <header className="flex w-full items-center justify-between px-32 py-4 font-medium">
      <Logo />
      <nav className="">
        <CustomLink href="/" title="Home" className="ml-4" />
        <CustomLink href="/about" title="About" className="ml-4" />
        <CustomLink href="/tech-stack" title="Tech Stack" className="ml-4" />
        <CustomLink href="/project" title="Project" className="mx-4" />
      </nav>
    </header>
  )
}

export default NavBar
