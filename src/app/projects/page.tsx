import React from "react"
import type { Metadata } from "next"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import BaseLayout from "@/components/BaseLayout"
import { ArrowBigRightIcon } from "@/components/Icons"
import AnimatedText from "@/components/AnimatedText"

import hoop from "/public/basketball-hoop.jpg"
import cyob from "/public/cyob.jpg"
import portfolioHomePage from "/public/portfolio.png"
import tictactoeImage from "/public/tictactoe.jpg"
import snakerace from "/public/snakerace.jpg"
import delight from "/public/mindfuel-delight.png"
import ButtonLink from "@/components/ButtonLink"

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
      <div className={"h-[160px] w-[280px] border border-neutral-800 lg:mr-auto"}>
        <Image className={"h-full w-full"} src={image} alt={imageAlt} />
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
  const projectList = [
    {
      id: "delight",
      name: "Delight",
      description: "Together with a team of brilliant minds at Mindfuel, we built a Data Product Management SaaS application.",
      stack: "Vue, Typescript, TailwindCSS, PrimeVue, Fastify, PostgreSQL.",
      image: delight,
      imageAlt: "The details page of a data product in a SaaS application by www.mindfuel.ai called 'Delight'.",
      link: "https://mindfuel.ai/solution/delight",
    },
    {
      id: "personal-portfolio",
      name: "Portfolio",
      description: "A personal portfolio built using Next.js",
      stack: "Next.js, React, Typescript.",
      image: portfolioHomePage,
      imageAlt: "portfolio home page",
      link: "https://github.com/colenocks/portfolio_v2",
    },
    {
      id: "snakerace",
      name: "Snakerace",
      description: "A real time multiplayer version of the classic snake game using socket.io.",
      stack: "HTML, CSS, JavaScript, Node JS, Express",
      image: snakerace,
      imageAlt: "Snakerace image",
      link: "https://github.com/colenocks/Multiplayer_Snake_Game_EIS",
    },
    // {
    //   id: "hoops",
    //   name: "Hoops",
    //   description: "This HTML5 canvas based basketball-like game was developed as a little tribute to the Basketball legend, Kobe Bryant as well as his daughter and all who lost their lives on the 26th of january 2020.",
    //   stack: "HTML5, CSS, JavaScript, Node, Express",
    //   image: hoop,
    //   imageAlt: "basket with net for basketball",
    //   link: "https://github.com/colenocks/hoops",
    // },
    {
      id: "cyob",
      name: "Cycle of benefits",
      description: "A waste management crowdsourcing platform of environment based projects publicly available for interested persons to work on and gain rewards.",
      stack: "HTML, CSS, JavaScript, Node, Express, Amazon RDS, Amazon EC2, SQL",
      image: cyob,
      imageAlt: "recycle image",
      link: "https://github.com/colenocks/cycle_of_benefits",
    },
    // {
    //   id: "tictactoe",
    //   name: "Tic-Tac-Toe",
    //   description: "A Simple jQuery based game.",
    //   stack: "HTML, CSS, JQuery, Express.js",
    //   image: tictactoeImage,
    //   imageAlt: "Tictactoe image",
    //   link: "https://github.com/colenocks/Simple_TicTacToe_Game",
    // },
  ]

  return (
    <BaseLayout>
      <AnimatedText text="Effort beats talent." className="text-center" />
      <p className="my-8 w-2/3 text-center text-base font-medium text-white lg:w-[80%]">You can explore some of the projects I&#39;ve worked on. There are more in the works 🏗️</p>
      <div className="grid gap-4 text-center lg:w-[80%] lg:max-w-5xl lg:grid-cols-2 lg:text-left xl:w-full xl:grid-cols-3">
        {projectList.map((project) => {
          return <ProjectItem {...project} key={project.id} />
        })}
      </div>
    </BaseLayout>
  )
}

export default Projects
