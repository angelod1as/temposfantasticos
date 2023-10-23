import React, { FC } from "react"
import Horizontal from "../../public/logo-h.svg"
import Vertical from "../../public/logo-tf.svg"
import Monogram from "../../public/logo-tf.svg"

type LogoProps = {
  variant?: "horizontal" | "vertical" | "monogram"
  className?: string
}

export const Logo: FC<LogoProps> = ({ variant = "horizontal", className }) => {
  const commonProps = {
    className,
    alt: "Tempos Fantásticos logo",
  }

  switch (variant) {
    case "monogram":
      return <Monogram {...commonProps} />
    case "vertical":
      return <Vertical {...commonProps} />
    case "horizontal":
    default:
      return <Horizontal {...commonProps} />
  }
}
