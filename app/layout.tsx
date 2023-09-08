import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import { Open_Sans } from "next/font/google"

import { cn } from "@/lib/utils"

import { Metadata } from "next"

const font = Open_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Discord",
  description: "Fullstack Discord Clone with Next.js 13, React, Socket.io, Prisma, Tailwind, MySQL",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang='en'>
        <body className={cn(font.className, "bg-white dark:bg-[#313338]")}>
          <div className='h-full flex items-center justify-center'>{children}</div>
        </body>
      </html>
    </ClerkProvider>
  )
}

