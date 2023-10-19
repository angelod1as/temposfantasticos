import type { Metadata } from "next";
import { Inter, Merriweather, Montserrat } from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const merriweather = Merriweather({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-merriweather",
});

const montserrat = Montserrat({
  weight: "300",
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Tempos Fantásticos",
  description: "Um jornal satírico de ficção científica e especulativa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        montserrat.className,
        merriweather.className,
        "font-serif"
      )}
    >
      <body className="flex flex-col justify-center items-center">
        {children}
      </body>
    </html>
  );
}
