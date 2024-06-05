import React from "react"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"

const BaseLayout = ({
  children,
  className,
}: Readonly<{
  children: React.ReactNode
  className?: string
}>) => {
  return (
    <main className={"relative min-h-screen pb-16"}>
      <NavBar />
      <div className={`min-h-screen-minus-header-footer flex flex-col items-center justify-between p-10 lg:px-32 lg:py-24 ${className}`}>{children}</div>
      <Footer className={"absolute bottom-0"} />
    </main>
  )
}

export default BaseLayout
