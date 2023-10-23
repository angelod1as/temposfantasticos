import { FCC } from "@/types/types"
import NextLink from "next/link"
import React, { AnchorHTMLAttributes } from "react"

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string
}

export const Link: FCC<LinkProps> = (props) => {
  const { to, children, ...rest } = props
  if (to.startsWith("http")) {
    return (
      <a href={to} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <NextLink href={to} {...rest}>
      {children}
    </NextLink>
  )
}
