import Image from "next/image"
import NavBar from "./components/Navbar"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen-minus-header-footer flex flex-col items-center justify-between p-24">Home</main>
      <Footer />
    </>
  )
}
