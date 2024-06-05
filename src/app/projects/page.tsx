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
  const borderLineStyle =
    "after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:scale-0 after:rounded-bl-lg after:rounded-br-lg after:bg-white after:transition-all after:duration-300 after:ease-out after:content-[''] hover:after:scale-100"
  return (
    <article
      className={`group relative z-10 flex flex-col items-center rounded-lg border border-transparent px-5 py-4 transition-colors  hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${borderLineStyle}`}
    >
      <div className={"h-[160px] w-[280px]"}>
        <Image className={"h-full w-full"} src={image} alt={imageAlt} />
      </div>
      <h2 className="my-3 w-full font-semibold capitalize lg:text-left">{name}</h2>
      <div className={"mb-3 max-w-[30ch]"}>
        <p className="text-balance text-sm opacity-50">{description}</p>
        <p className={"mt-2 font-bold"}>
          Stack: <span className={"text-sm italic text-white/65"}>{stack}</span>
        </p>
      </div>
      <ButtonLink link={link} className="mb-4 mt-auto w-fit items-center gap-1 text-base font-semibold transition-all duration-150 ease-linear hover:px-6 lg:text-left" target="_blank" rel="noopener noreferrer">
        <div>
          Explore <ArrowBigRightIcon className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none" size={20} />
        </div>
      </ButtonLink>
    </article>
  )
}

const Projects = (props: Props) => {
  const projectList = [
    {
      id: "delight",
      name: "Delight",
      description: "I contributed in a team of brilliant minds to build a Data Product Management SaaS application.",
      stack: "Vue, Typescript, TailwindCSS + PrimeVue, Fastify, PostgreSQL.",
      image: delight,
      imageAlt: "The details page of a data product in a SaaS application by www.mindfuel.ai called 'Delight'.",
      link: "https://mindfuel.ai/solution/delight",
    },
    {
      id: "personal-portfolio",
      name: "Portfolio",
      description: "A personal portfolio built using Next.js",
      stack: "React, Next.js, Typescript",
      image: portfolioHomePage,
      imageAlt: "portfolio home page",
      link: "https://github.com/colenocks/portfolio_2",
    },
    {
      id: "hoops",
      name: "Hoops",
      description: "This HTML5 canvas based basketball-like game was developed as a little tribute to the Basketball legend, Kobe Bryant as well as his daughter and all who lost their lives on the 26th of january 2020.",
      stack: "HTML5, CSS, JavaScript, Node, Express",
      image: hoop,
      imageAlt: "basket with net for basketball",
      link: "https://github.com/colenocks/hoops'",
    },
    {
      id: "cyob",
      name: "Cycle of benefits",
      description: "A waste management crowdsourcing platform of environmentally related projects publicly available for interested persons to work on and gain rewards.",
      stack: "HTML, CSS, JavaScript, Node, Express, Amazon RDS, Amazon EC2, SQL",
      image: cyob,
      imageAlt: "Tictactoe image",
      link: "https://github.com/colenocks/cycle_of_benefits",
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
    {
      id: "tictactoe",
      name: "Tic-Tac-Toe",
      description: "A Simple jQuery based game.",
      stack: "HTML, CSS, JQuery, Express.js",
      image: tictactoeImage,
      imageAlt: "Tictactoe image",
      link: "https://github.com/colenocks/Simple_TicTacToe_Game",
    },
  ]

  return (
    <BaseLayout>
      <AnimatedText text="Effort precedes talent." className="mb-12 text-center" />
      <p className="mb-8 w-[70%] text-base font-medium text-white">
        At the moment, I have quite a <span className={"underline"}>light</span> catalog of projects you can explore, but there are more exciting ones in the works. 🏗️
      </p>
      <div className="grid gap-4 text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
        {projectList.map((project) => {
          return <ProjectItem {...project} key={project.id} />
        })}
      </div>
    </BaseLayout>
  )
}

export default Projects