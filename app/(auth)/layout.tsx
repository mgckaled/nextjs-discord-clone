import type { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "./globals.css"

const openSans = Open_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Discord",
  description: "Fullstack Discord Clone with Next.js 13, React, Socket.io, Prisma, Tailwind, MySQL",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
