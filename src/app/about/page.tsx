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
    { id: "1", text: "I'm Coleman Enocks, a Full Stack developer with 3+ years of experience in the field. I specialize in frontend, primarily Vue (and React), but love building with whatever tools are right for the job." },
    // {id: "2", text: `I work brilliantly in a team setup and there's no doubt that I bring committment and determination to ensure the excellence of the project or product. I look forward to the opportunity to working with you on your next project.`},
    { id: "2", text: "My experience & educational background has endowed me with strong problem solving, analytical and attention to details skills to model and develop standards-compliant websites and applications using modern technologies." },
    { id: "3", text: `When I'm not working, I play football on a semi-professional level - an exciting way to achieve the necessary balance. I am your friendly neighbourhood Programmer by Day and Footballer by night.` },
    { id: "4", text: "I'm actively looking for new positions where I can translate my love for code into beautiful applications. If you think you've got an opening suitable for me, you can reach out for a chat or coffee 🤗" },
  ]

  return (
    <BaseLayout className={"space-y-20"}>
      <div>
        <AnimatedText text="About." />
        <div className={"flex items-center gap-12"}>
          <div className={"mt-4 w-1/2"}>
            <div className={"flex flex-col gap-y-6"}>
              {paragraphs.map((paragraph) => {
                return (
                  <p className={"font-medium"} key={paragraph.id}>
                    {paragraph.text}
                  </p>
                )
              })}
            </div>
            <div className={"my-6 flex items-center gap-x-4 font-medium "}>
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

          <div className={"flex w-1/2 items-start"}>
            <div className={"w-64 bg-black p-8 lg:-mt-20"}>
              <Image src={aboutMe} alt="Coleman Enocks" className={"h-auto w-full rounded-full "} />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}

export default about
