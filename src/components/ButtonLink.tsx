import React from "react"
import Link from "next/link"

type Props = {
  link: string
  type?: "primary" | "secondary"
  children?: Readonly<React.ReactNode>
  downloadable?: boolean
  text?: string
  target?: "_self" | "_top" | "_parent" | "_blank"
  className?: string
}

const Button = ({ type = "primary", target = "_self", ...props }: Props) => {
  const primaryStyle = "border border-white bg-black text-white hover:bg-pink-400 hover:text-white"
  const secondaryStyle = ""

  return (
    <Link
      href={props.link}
      target={target}
      className={`flex items-center justify-center rounded-lg p-2 px-5 text-base font-medium transition-colors duration-300 ${type === "primary" ? primaryStyle : secondaryStyle} ${props.className}`}
      download={props.downloadable}
    >
      {props.children || props.text}
    </Link>
  )
}

export default Button
