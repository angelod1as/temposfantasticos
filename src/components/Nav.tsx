import React, { ReactNode } from "react"
import { Link } from "./Link"

const NavLink = ({ to, children }: { to: string; children: ReactNode }) => (
  <Link to={to}>{children}</Link>
)

export const Nav = () => {
  return (
    <nav className="flex justify-around w-full my-2">
      <NavLink to="#book">Livro</NavLink>
      <NavLink to="#newsletter">Newsletter</NavLink>
      <NavLink to="#who">Quem</NavLink>
    </nav>
  )
}
