"use client"
import React from "react"
import ButtonLink from "@/components/ButtonLink"

type JobsProp = {
  role: string
  company: string
  address: string
  companyLink?: string
  period: string
  summary?: string
  readMore?: string
}

interface Props {
  className?: string
}

const JobDetails = ({ role, companyLink, company, period, address, summary, readMore }: JobsProp) => {
  return (
    <li className="mx-auto flex w-[80%] items-start justify-start border-l-4 border-white py-8 first:pt-0 last:pb-0">
      <figure className={"relative -left-10 stroke-black"}>
        <svg className={"-rotate-90"} width="75" height="75" viewBox="0 0 100 100">
          <circle cx="75" cy="50" r="20" className={"fill-none stroke-pink-400 stroke-1"} />
          <circle cx="75" cy="50" r="20" className={"fill-white stroke-[5px]"} />
          <circle cx="75" cy="50" r="10" className={"fill-pink-400 stroke-1"} />
        </svg>
      </figure>

      <div className={"w-full self-start"}>
        <h3 className={"text-2xl font-bold capitalize"}>
          {role}&nbsp;
          <a className={"text-primary capitalize"} href={companyLink} target={"_blank"}>
            -&nbsp;{company}
          </a>
        </h3>
        <span className={"font-medium capitalize text-white/65"}>
          {period} | {address}
        </span>
        <p className={"w-full font-medium"}>{summary}</p>
        {readMore && (
          <ButtonLink link={readMore} target={"_blank"} className={"mt-2 w-fit"}>
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
      companyLink: "www.mindfuel.ai",
      period: "November 2022 - Present",
      address: "Munich, Germany (Remote)",
      summary: "Worked in a team responsible for creating a Data Product Management SaaS application called 'Delight'.",
      readMore: "https://www.mindfuel.ai/solution/delight",
    },
    {
      id: "job-2",
      role: "Junior Fulllstack Developer",
      company: "Mindfuel",
      companyLink: "www.mindfuel.ai",
      address: "Munich, Germany (Remote)",
      period: "March 2021 - November 2022",
      summary:
        "I worked in a team where we developed a resounding SaaS application that enables the company's framework of professional service consultancy and software solution, showcasing how clients can utilize the OKR methodology to achieve their organizational goals and ambition.",
    },
    {
      id: "job-3",
      role: "Technical Support Advisor",
      company: "Concentrix(CVGs) - BT",
      companyLink: "www.mindfuel.ai",
      address: "UK (Remote)",
      period: "July 2020 - March 2021",
      summary: "At Concentrix, we enabled a customer technical support for our client - British Telecom (BT), where I talked customers through series of steps to resolve the technical issues with their BT devices.",
    },
  ]

  return (
    <div className={`relative flex flex-col items-end ${className}`}>
      <div className="relative h-full w-[60%]">
        <h2 className={"mb-6 w-full text-xl font-bold uppercase"}>Experience</h2>
        <ul className={"item-between flex w-full flex-col"}>
          {jobList.map((job) => (
            <JobDetails key={job.id} {...job} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default WorkHistory