import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const mont = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
})

export const metadata: Metadata = {
  title: {
    template: "%s | Coleman Enocks",
    default: "Coleman Enocks",
  },
  description: "My portfolio, created using next by vercel",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${mont.variable} font-mont min-h-screen w-full bg-black `}>{children}</body>
    </html>
  )
}
