import React, { FC } from "react"
import Horizontal from "../../public/logo-h.svg"
import Vertical from "../../public/logo-tf.svg"
import Monogram from "../../public/logo-tf.svg"
import clsx from "clsx"
import { Link } from "./Link"
import { BOOK_URL } from "@/helpers/constants"

type LogoProps = {
  variant?: "horizontal" | "vertical" | "monogram"
  className?: string
}

export const Logo: FC<LogoProps> = ({ variant = "horizontal", className }) => {
  const commonProps = {
    className: clsx(className, "fill-white hover:fill-purple-500"),
    alt: "Tempos Fantásticos logo",
  }

  const Logos = {
    monogram: <Monogram {...commonProps} />,
    vertical: <Vertical {...commonProps} />,
    horizontal: <Horizontal {...commonProps} />,
  }

  return (
    <Link to={BOOK_URL} className="w-full flex justify-center">
      {Logos[variant]}
    </Link>
  )
}
