import React from "react"
import type { Metadata } from "next"
import Image from "next/image"
import AnimatedText from "@/components/AnimatedText"
import BaseLayout from "@/components/BaseLayout"
import aboutMe from "/public/about-me.jpg"
import WorkHistory from "@/components/WorkHistory"

export const metadata: Metadata = {
  title: "About",
}

const about = () => {
  const paragraph1 = `I'm Coleman Enocks, a software developer with 3+ years of experience in the field which along with my educational background has endowed me with strong problem solving, analytical and attention to details skills to model and develop standards-compliant websites and applications using modern technologies.`

  const paragraph2 = `I work brilliantly in a team setup and there's no doubt that I bring committment and determination to ensure the excellence of the project or product. I look forward to the opportunity to working with you on your next project.`

  const paragraph3 = `When I'm not working, I play football on a semi-professional level - an exciting way to achieve the necessary balance. I am your friendly neighbourhood Programmer by Day and Footballer by night.`

  return (
    <BaseLayout className={"space-y-20"}>
      <div>
        <AnimatedText text="Drive, Dedication, Grace" />
        <div className={"flex items-center"}>
          <div className={"mt-4 w-1/2"}>
            <h2 className={"mb-6 text-xl font-bold uppercase"}>BIO</h2>
            <div className={"flex flex-col gap-y-6"}>
              <p className={"font-medium"}>{paragraph1}</p>
              <p className={"font-medium"}>{paragraph2}</p>
              <p className={"font-medium"}>{paragraph3}</p>
            </div>
          </div>

          <div className={"flex w-1/2 items-center justify-center"}>
            <div className={"w-80 border-white bg-black p-8"}>
              <Image src={aboutMe} alt="Coleman Enocks" className={"h-auto w-full rounded-full "} />
            </div>
          </div>
        </div>
      </div>

      <div>
        <WorkHistory />
      </div>
    </BaseLayout>
  )
}

export default about
