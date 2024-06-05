import BaseLayout from "@/components/BaseLayout"
import AnimatedText from "@/components/AnimatedText"
import ButtonLink from "@/components/ButtonLink"
import { ExternalLinkIcon } from "@/components/Icons"
import Link from "next/link"

export default function Home() {
  return (
    <BaseLayout>
      <div className="mx-auto w-1/2">
        <AnimatedText text="Hey, I'm Cole." />
        <p className="my-4 text-base font-medium text-white">
          As a <span className="text-pink-400">Full Stack developer</span>, I have just enough expertise to turn ideas into innovative applications. If you find this exciting and want to get in touch, let&#39;s connect!.
        </p>

        <div className="mt-2 flex items-center gap-4 self-start">
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
