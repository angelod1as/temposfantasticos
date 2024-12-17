import type { Metadata } from "next"
import { Merriweather, Montserrat } from "next/font/google"
import clsx from "clsx"
import "./globals.css"

const merriweather = Merriweather({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-merriweather",
  display: "swap",
  adjustFontFallback: false,
})

const montserrat = Montserrat({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: "Tempos Fantásticos",
  description: "Um jornal satírico de ficção científica e especulativa",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        montserrat.className,
        merriweather.className,
        "font-serif",
        "font-serif flex flex-col justify-center items-center text-xl",
      )}
    >
      <body className="w-full flex flex-col justify-center items-center bg-black text-white max-w-full">
        <div className="max-w-full w-full">{children}</div>
      </body>
    </html>
  )
}
