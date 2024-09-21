"use client"
import React from "react"
import ButtonLink from "@/components/ButtonLink"
import Link from "next/link"

type JobsProp = {
  role: string
  company: string
  address: string
  companyLink?: string
  period: string
  summary?: string
  readMore?: string
  stack?: string
}

interface Props {
  className?: string
}

const JobDetails = ({ role, companyLink, company, period, address, summary, readMore, stack }: JobsProp) => {
  return (
    <li className="mx-auto flex w-full items-start justify-start border-white py-8 first:pt-0 last:pb-0 sm:w-[80%] lg:w-full lg:border-l-4">
      <figure className={"relative -left-10 hidden stroke-black md:block"}>
        <svg className={"-rotate-90"} width="75" height="75" viewBox="0 0 100 100">
          <circle cx="75" cy="50" r="20" className={"fill-none stroke-pink-400 stroke-1"} />
          <circle cx="75" cy="50" r="20" className={"fill-white stroke-[5px]"} />
          <circle cx="75" cy="50" r="10" className={"fill-pink-400 stroke-1"} />
        </svg>
      </figure>

      <div className={"w-full self-start text-white"}>
        <h3 className={"text-xl font-bold capitalize"}>{role}</h3>
        <Link className={"text-primary text-xl font-semibold capitalize hover:underline"} href={companyLink ?? ""} target={"_blank"}>
          {company}
        </Link>
        <p className={"font-medium capitalize text-white/65"}>
          {period} | {address}
        </p>
        <p className={"w-full font-medium"}>{summary}</p>
        {stack && (
          <p className={"mt-4 font-bold"}>
            Stack: <span className={"text-sm italic text-white/65"}>{stack}</span>
          </p>
        )}
        {readMore && (
          <ButtonLink link={readMore} target={"_blank"} className={"mx-auto mt-2 w-fit md:mx-0"}>
            Read More
          </ButtonLink>
        )}
      </div>
    </li>
  )
}

const WorkHistory = ({ className }: Props) => {
  const jobList = [
    {
      id: "job-1",
      role: "Software Engineer",
      company: "Mindfuel",
      companyLink: "https://mindfuel.ai",
      period: "November 2022 - July 2024",
      address: "Munich, Germany (Remote)",
      summary: "We created a Data Product Management SaaS solution called 'Delight'.",
      readMore: "https://mindfuel.ai/solution/delight",
      stack: "Typescript, Vue 3, tRPC, TansStack VueQuery, TailwindCSS + PrimeVue UI, Node.js + Fastify.js, Auth0, Vee Validate + zod, PostgreSQL, Prisma ORM, GCP, Jest + Playwright.",
    },
    {
      id: "job-2",
      role: "Junior Fullstack Developer",
      company: "Mindfuel",
      companyLink: "https://mindfuel.ai",
      address: "Munich, Germany (Remote)",
      period: "March 2021 - November 2022",
      summary:
        "We developed a resounding SaaS application that enables the company's framework of professional service consultancy and software solution, showcasing how clients can utilize the OKR methodology to achieve their organizational goals and ambition.",
      stack: "Javascript, Vue 2 + Nuxt 2, Vee Validate, Node.js + Nest.js, Firebase, Jest + Cypress.",
    },
    {
      id: "job-3",
      role: "Technical Support Advisor",
      company: "Concentrix(CVGs) - BT",
      companyLink: "https://concentrix.com",
      address: "UK (Remote)",
      period: "July 2020 - March 2021",
      summary: "At Concentrix, we enabled a customer facing technical support system for our client - British Telecom (BT), where customers who have technical issues with their BT devices are guided through series of possible resolutions.",
    },
  ]

  return (
    <div className={`relative flex flex-col items-center lg:items-end ${className}`}>
      <ul className={"item-between flex h-full flex-col"}>
        {jobList.map((job) => (
          <JobDetails key={job.id} {...job} />
        ))}
      </ul>
    </div>
  )
}

export default WorkHistory
