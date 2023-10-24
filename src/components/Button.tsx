import { FCC } from "@/types/types"
import React from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FCC<ButtonProps> = ({
  children,
  type = "button",
  ...rest
}) => {
  return (
    <button
      type={type}
      {...rest}
      className="bg-white text-black px-8 py-1 rounded min-w-12 hover:bg-gray-400 transition-colors"
    >
      {children}
    </button>
  )
}
