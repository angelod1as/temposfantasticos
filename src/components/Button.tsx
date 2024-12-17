import { FCC } from "@/types/types"
import React from "react"
import { Link } from "./Link"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  to?: string
}

export const Button: FCC<ButtonProps> = ({
  children,
  type = "button",
  to,
  ...rest
}) => {
  return (
    <button
      type={type}
      {...rest}
      className="border bg-white text-black border-white w-fit py-2 px-4 rounded text-xl my-0 mx-auto hover:bg-black hover:text-white transition-colors"
    >
      {to ? (
        <Link
          to={to}
          className="decoration-transparent text-inherit bg-inherit hover:text-inherit"
        >
          {children}
        </Link>
      ) : (
        children
      )}
    </button>
  )
}
