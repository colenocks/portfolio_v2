import React from "react"
import type { Metadata } from "next"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import BaseLayout from "@/components/BaseLayout"
import { ArrowBigRightIcon } from "@/components/Icons"
import AnimatedText from "@/components/AnimatedText"
import ButtonLink from "@/components/ButtonLink"

import db from "@/data/index"

export const metadata: Metadata = {
  title: "Projects",
}

type Props = {}

type ProjectType = {
  id: string
  name: string
  image: string | StaticImport
  imageAlt: string
  link: string
  description: string
  stack: string
}

const ProjectItem = ({ name, image, link, description, stack, imageAlt }: ProjectType) => {
  const bottomBorderAnimationClass =
    "after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:scale-0 after:rounded-bl-lg after:rounded-br-lg after:bg-white after:transition-all after:duration-300 after:ease-out after:content-[''] hover:after:scale-100"
  return (
    <article className={`group relative z-10 flex flex-col items-center rounded-lg border border-transparent px-5 py-4 text-white transition-colors hover:border-neutral-700 hover:bg-neutral-800/30 ${bottomBorderAnimationClass}`}>
      <div className={"relative h-[160px] w-[280px] border border-neutral-800 lg:mr-auto"}>
        <Image className={"h-full w-full"} src={image} alt={imageAlt} fill={true} />
      </div>
      <h2 className="my-3 w-full text-center font-semibold capitalize text-white/80 lg:text-left">{name}</h2>
      <div className={"mb-6 flex w-full flex-col items-center lg:items-start"}>
        <p className="line-clamp-3 max-w-[30ch] text-ellipsis text-balance text-sm text-white">{description}</p>
        <p className={"mt-2 max-w-[30ch] text-balance font-bold"}>
          Stack: <span className={"text-sm italic text-white/65"}>{stack}</span>
        </p>
      </div>
      <div className={"mb-4 mt-auto flex justify-center lg:w-full lg:justify-start"}>
        <ButtonLink link={link} className="w-fit items-center gap-1 text-base font-semibold transition-all duration-150 ease-linear hover:px-6 lg:text-left" target="_blank" rel="noopener noreferrer">
          <div>
            Explore <ArrowBigRightIcon className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" size={20} />
          </div>
        </ButtonLink>
      </div>
    </article>
  )
}

const Projects = (props: Props) => {
  const projectList = db.projects
  const sortedProjectList = projectList.sort((a, b) => a.order - b.order)

  return (
    <BaseLayout>
      <AnimatedText text="Effort beats talent." className="text-center" />
      <p className="my-8 w-2/3 text-center text-base font-medium text-white lg:w-[80%]">You can explore some of the projects I&#39;ve worked on. There are more in the works 🏗️</p>
      <div className="grid gap-4 text-center lg:w-[80%] lg:max-w-5xl lg:grid-cols-2 lg:text-left xl:w-full xl:grid-cols-3">
        {sortedProjectList.map((project) => {
          return <ProjectItem {...project} key={project.id} />
        })}
      </div>
    </BaseLayout>
  )
}

export default Projects
