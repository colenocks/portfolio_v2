"use client"
import React from "react"
import { motion } from "framer-motion"
import WorkHistory from "@/components/WorkHistory"
import BaseLayout from "@/components/BaseLayout"
import AnimatedText from "@/components/AnimatedText"
import { CodeIcon } from "@/components/Icons"

type Props = {}

const Experience = (props: Props) => {
  const skills: { title: string; logo?: string }[] = [
    { title: "HTML5", logo: "https://res.cloudinary.com/colenocks/image/upload/v1717535176/dev_images/portfolio/HTML-5_va5chx.png" },
    { title: "CSS", logo: "https://res.cloudinary.com/colenocks/image/upload/v1717535172/dev_images/portfolio/CSS-3_xw6ogr.png" },
    { title: "JavaScript", logo: "https://res.cloudinary.com/colenocks/image/upload/v1717535178/dev_images/portfolio/JavaScript_tmiapl.png" },
    { title: "Typescript", logo: "https://res.cloudinary.com/colenocks/image/upload/v1717535195/dev_images/portfolio/typescript_o8twmb.png" },
    { title: "TailwindCSS", logo: "https://res.cloudinary.com/colenocks/image/upload/v1717535186/dev_images/portfolio/Tailwind_CSS_kpbgg6.png" },
    { title: "Sass", logo: "https://res.cloudinary.com/colenocks/image/upload/v1717535184/dev_images/portfolio/Sass_dymcd4.png" },
    { title: "Vue", logo: "https://res.cloudinary.com/colenocks/image/upload/v1717535190/dev_images/portfolio/vue_uma9h7.png" },
    { title: "React", logo: "https://res.cloudinary.com/colenocks/image/upload/v1717535183/dev_images/portfolio/React_kikqlk.png" },
    { title: "Node.js", logo: "https://res.cloudinary.com/colenocks/image/upload/v1717535182/dev_images/portfolio/Node-JS_uqghrz.png" },
    { title: "Git", logo: "https://res.cloudinary.com/colenocks/image/upload/v1717535174/dev_images/portfolio/Git_sxyjcp.png" },
    { title: "PostgreSQL", logo: "https://res.cloudinary.com/colenocks/image/upload/v1717535180/dev_images/portfolio/MySQL_aakjrs.png" },
    { title: "Firebase", logo: "https://res.cloudinary.com/colenocks/image/upload/v1717535189/dev_images/portfolio/firebase_jo0tbe.png" },
    { title: "GCP" },
  ]

  return (
    <BaseLayout>
      <AnimatedText className={"mb-8 text-center"} text={"Experience, Expertise."} />
      <div className={"mb-10 flex w-full flex-col-reverse items-start gap-3 lg:mb-0 lg:flex-row xl:w-[80%]"}>
        <div className={"mt-20"}>
          <h2 className={"mb-6 flex items-center justify-center gap-x-3 text-2xl font-medium"}>
            <CodeIcon className={"text-pink-400"} size={48} />
            Tech Stack
          </h2>
          <div className={"flex flex-wrap items-center justify-center gap-3 text-center"}>
            {skills.map((skill, index: number) => {
              return (
                <motion.span
                  key={skill.title + index}
                  className={"duration-800 cursor-default rounded-2xl border border-white/65 px-3.5 py-1 text-lg text-white transition-all ease-out hover:text-pink-400"}
                  initial={{ opacity: 0, scale: 0, translateX: -50, translateY: -50 }}
                  animate={{ opacity: 1, scale: 1, translateX: 0, translateY: 0 }}
                  transition={{ duration: 0.8, type: "spring", delay: index * 0.1 }}
                >
                  {skill.title}
                </motion.span>
              )
            })}
          </div>
        </div>
        <WorkHistory className={"ml-0 lg:ml-5"} />
      </div>
    </BaseLayout>
  )
}

export default Experience
