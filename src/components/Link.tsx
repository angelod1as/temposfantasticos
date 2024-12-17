import { FCC } from "@/types/types"
import NextLink from "next/link"
import React, { AnchorHTMLAttributes } from "react"
import clsx from "clsx"

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string
}

export const Link: FCC<LinkProps> = (props) => {
  const { to, children, className, ...rest } = props
  const styles = clsx(className, "underline text-inherit hover:text-purple-500")

  if (to.startsWith("http")) {
    return (
      <a href={to} target="_blank" className={styles} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <NextLink className={styles} href={to} {...rest}>
      {children}
    </NextLink>
  )
}
