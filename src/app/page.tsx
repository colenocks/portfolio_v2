import BaseLayout from "@/components/BaseLayout"
import AnimatedText from "@/components/AnimatedText"
import ButtonLink from "@/components/ButtonLink"
import { ExternalLinkIcon } from "@/components/Icons"
import Link from "next/link"

export default function Home() {
  return (
    <BaseLayout>
      <div className="mx-auto w-full text-center md:w-[70%] lg:text-left xl:w-[60%]">
        <div className="flex flex-col items-center ">
          <AnimatedText text="Hey, I'm Cole." className={"text-center lg:text-left"} />
          <p className="my-4 mr-auto w-full text-base font-medium text-white lg:w-[90%] xl:w-[70%]">
            As a <span className="text-pink-400">Full Stack developer</span>, I have just enough expertise to turn ideas into innovative applications. If you find this exciting and want to get in touch, let&#39;s connect!
          </p>
        </div>

        <div className="mt-2 flex flex-col items-center justify-center gap-4 self-start lg:flex-row lg:justify-start">
          <ButtonLink link="https://drive.google.com/file/d/146rG5DCqhHxyoR9-rXVntkcZbXU88WIN/view?usp=sharing" target={"_blank"} downloadable>
            My Resume <ExternalLinkIcon className={"mb-0.5 ml-1 w-5"} />
          </ButtonLink>
          <Link href="/contact" className={"font-medium capitalize text-white hover:underline"}>
            Contact Me
          </Link>
        </div>
      </div>
    </BaseLayout>
  )
}
