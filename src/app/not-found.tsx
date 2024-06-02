import Link from "next/link"

export default function NotFound() {
  return (
    <div className={"flex h-screen flex-col items-center justify-center"}>
      <div className={"mb-6 flex items-center"}>
        <h1 className={"mr-5 border-r border-white pr-5 align-top text-xl font-medium"}>404</h1>
        <h2 className={"font-normal"}>This page does not exist or could not be found.</h2>
      </div>
      <Link
        href="/"
        className="flex items-center justify-center rounded-lg border border-white bg-black p-2 px-5 text-base font-medium text-white transition-colors duration-300 hover:border-solid hover:border-black hover:bg-pink-400 hover:text-black"
      >
        Back home
      </Link>
    </div>
  )
}
