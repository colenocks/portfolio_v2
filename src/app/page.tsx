import BaseLayout from "@/components/BaseLayout"
import AnimatedText from "@/components/AnimatedText"
import ButtonLink from "@/components/ButtonLink"
import { ExternalLinkIcon } from "@/components/Icons"
import Link from "next/link"

export default function Home() {
  return (
    <BaseLayout>
      <div className="mx-auto w-1/2">
        <AnimatedText text="Bringing Ideas To life with Code" />
        <p className="my-4 text-base font-medium text-white">
          As a software engineer, I have been endowed with just enough expertise to turning ideas into innovative web applications. At the moment, I have quite a <span className={"underline"}>light</span> catalog of projects you can explore, but
          there are more exciting ones in the works. 🏗️
        </p>

        <div className="mt-2 flex items-center gap-4 self-start">
          <ButtonLink link="https://drive.google.com/file/d/146rG5DCqhHxyoR9-rXVntkcZbXU88WIN/view?usp=sharing" target={"_blank"} downloadable>
            Resume <ExternalLinkIcon className={"mb-0.5 ml-1 w-5"} />
          </ButtonLink>
          <Link href="mailto:enockscoleman@gmail.com" target={"_blank"} className={"font-medium capitalize text-white hover:underline"}>
            Contact me
          </Link>
        </div>
      </div>
    </BaseLayout>
  )
}
