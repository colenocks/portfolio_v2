import React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import AnimatedText from "@/components/AnimatedText"
import BaseLayout from "@/components/BaseLayout"
import aboutMe from "/public/about-me.png"
import { BrandXIcon, BrandGithubIcon, BrandLinkedinIcon } from "@/components/Icons"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About",
}

const about = () => {
  const paragraphs = [
    { id: "1", text: "I'm Coleman Enocks, a Full Stack Developer with over 3 years of experience in the field. I specialize in frontend, primarily Vue (and React), but love building with whatever tools are required for the job." },
    /* {id: "2", text: `I work brilliantly in a team setup and there's no doubt that I bring committment and determination to ensure the excellence of the project or product. I look forward to the opportunity to working with you on your next project.
    I am your friendly neighbourhood Programmer by Day and Footballer by night.`},
    */
    { id: "2", text: "My experience & educational background has endowed me with the skills to model and develop standards-compliant websites and applications using modern technologies." },
    { id: "3", text: "When I'm not working, I play football on a semi-professional level - an exciting way to achieve the necessary balance." },
    { id: "4", text: "I'm actively looking for new positions where I can translate my love for code into beautiful applications. If you think you've got an opening suitable for me, you can reach out for a chat or virtual coffee." },
  ]

  return (
    <BaseLayout>
      <div className={"w-[80%]"}>
        <AnimatedText text="About." className={"text-center lg:text-left"} />
        <div className={"flex items-center gap-6"}>
          <div className={"mt-4 w-full text-base font-medium text-white xl:w-[70%]"}>
            <div className={"flex flex-col gap-y-6 text-center lg:text-left"}>
              {paragraphs.map((paragraph) => {
                return (
                  <p className={"font-medium"} key={paragraph.id}>
                    {paragraph.text}
                  </p>
                )
              })}
            </div>
            <div className={"my-6 flex items-center justify-center gap-x-4 font-medium lg:justify-start "}>
              <div className="flex items-center gap-x-4">
                <Link href={"https://linkedin.com/in/coleman-enocks"}>
                  <BrandLinkedinIcon className="scale:100 cursor-pointer transition-all ease-linear hover:scale-125 hover:text-pink-400" size={36} stroke={1.5} />
                </Link>
                <Link href={"https://github.com/colenocks"}>
                  <BrandGithubIcon className="scale:100 cursor-pointer transition-all ease-linear hover:scale-125 hover:text-pink-400" size={28} />
                </Link>
                <Link href={"https://x.com/@colenocks"}>
                  <BrandXIcon className="scale:100 cursor-pointer transition-all ease-linear hover:scale-125 hover:text-pink-400" size={28} />
                </Link>
              </div>
            </div>
          </div>

          <div className={"hidden items-start justify-start xl:flex"}>
            <div className={"w-64 bg-black p-8 lg:-mt-24"}>
              <Image src={aboutMe} alt="Coleman Enocks" className={"h-auto w-full rounded-full "} loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

export default about
