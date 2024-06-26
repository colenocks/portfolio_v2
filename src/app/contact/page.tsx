import React from "react"
import BaseLayout from "@/components/BaseLayout"
import type { Metadata } from "next"
import AnimatedText from "@/components/AnimatedText"
import Link from "next/link"
import { MailIcon, BrandGithubIcon, BrandLinkedinIcon, BrandXIcon } from "@/components/Icons"

export const metadata: Metadata = {
  title: "Contact",
}

type Props = {}

const Contact = (props: Props) => {
  return (
    <BaseLayout>
      <AnimatedText text="Get in touch." className="mb-6 text-center" />
      <p className="mb-2 text-center text-base font-medium text-white">If you want to work with me, shoot me an email . You can also reach out on any of the links.</p>
      <Link href="mailto:enockscoleman@gmail.com" target={"_blank"} className={"hidden cursor-pointer items-center gap-x-2 py-1 text-base font-bold text-white hover:text-pink-400 sm:flex md:text-lg"}>
        <MailIcon />
        enockscoleman@gmail.com
      </Link>
      <div className="mt-4 flex items-center gap-x-4 text-white">
        <Link href="mailto:enockscoleman@gmail.com" target={"_blank"} className={"flex cursor-pointer items-center gap-x-2 py-1 text-base font-bold text-white hover:text-pink-400 sm:hidden md:text-lg"}>
          <MailIcon className="scale:100 cursor-pointer transition-all ease-linear hover:scale-125 hover:text-pink-400" size={28} />
        </Link>
        <Link href={"https://linkedin.com/in/coleman-enocks"}>
          <BrandLinkedinIcon className="scale:100 cursor-pointer transition-all ease-linear hover:scale-125 hover:text-pink-400" size={32} stroke={1.5} />
        </Link>
        <Link href={"https://github.com/colenocks"}>
          <BrandGithubIcon className="scale:100 cursor-pointer transition-all ease-linear hover:scale-125 hover:text-pink-400" size={28} />
        </Link>
        <Link href={"https://x.com/@colenocks"}>
          <BrandXIcon className="scale:100 cursor-pointer transition-all ease-linear hover:scale-125 hover:text-pink-400" size={28} />
        </Link>
      </div>
    </BaseLayout>
  )
}

export default Contact
