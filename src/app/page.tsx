import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import AnimatedText from "@/components/AnimatedText"
import { ExternalLinkIcon } from "@/components/Icons"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen-minus-header-footer flex flex-col items-center justify-between p-24">
        <div className="mx-auto w-1/2">
          <AnimatedText text="Bringing Ideas To life with Code" />
          <p className="my-4 text-base font-medium text-white">
            As a software engineer, I have been endowed with just enough expertise to turning ideas into innovative web applications. At the moment, I have quite a <span className={"underline"}>light</span> catalog of projects you can explore, but
            there are more exciting ones in the works. 🏗️
          </p>

          <div className="mt-2 flex items-center gap-4 self-start">
            <Link
              href="https://drive.google.com/file/d/146rG5DCqhHxyoR9-rXVntkcZbXU88WIN/view?usp=sharing"
              target={"_blank"}
              className="flex items-center justify-center rounded-lg border border-white bg-black p-2 px-5 text-base font-medium text-white transition-colors duration-300 hover:bg-pink-400 hover:text-white"
              download={true}
            >
              Resume <ExternalLinkIcon className={"mb-0.5 ml-1 w-5"} />
            </Link>
            <Link href="mailto:enockscoleman@gmail.com" target={"_blank"} className={"font-medium capitalize text-white hover:underline"}>
              Contact me
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
