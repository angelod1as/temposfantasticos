import { Book } from "@/components/Book"
import { Link } from "@/components/Link"
import { Logo } from "@/components/Logo"
import { Nav } from "@/components/Nav"
import { Newspapers } from "@/components/Newspapers"
import { SubstackIframe } from "@/components/SubstackIframe"
import { TF } from "@/components/TF"
import React from "react"

export const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Nav />
      <div className="max-w-screen-md pt-10 pb-16 px-4 sm:px-6 md:px-8">
        <div className="flex-center gap-8">
          <h1 className="hidden">Tempos Fantásticos</h1>
          <Logo className="max-w-md mb-8" />
          <Newspapers />

          <p>
            O <TF /> é um jornal satírico de ficção científica e especulativa,
            com notícias do futuro, passado e presentes alternativos.
          </p>
          <p>
            Nele, você encontra textos em formato jornalístico, colunas
            opinativas, ilustrações, quadrinhos, e até anúncios, todos sob o
            guarda-chuva da ficção especulativa:{" "}
            <b>sci-fi, fantasia, horror e ficção histórica</b>.
          </p>

          <Book />

          <h2 id="newsletter">Quer saber mais?</h2>

          <p>Assine nossa newsletter para receber novidades do projeto.</p>

          <SubstackIframe />

          <h2 id="who">
            Quem faz o <TF />
          </h2>
          <p>
            O jornal foi criado e editado pelo programador, designer e escritor{" "}
            <Link to="https://angelodias.com.br">Angelo Dias</Link>.
          </p>
          <p>
            A última formação da equipe do <TF /> contou com a escritora e
            tradutora Jana Bianchi, o escritor e multitalentoso JP Lima, o
            ilustrador e quadrinista Raphael Andrade, e a jornalista Ludimila
            Honorato.
          </p>
          <p>
            Além dessas pessoas, tivemos a participação de artistas e escritores
            como Rafa Nunes, Aline Valek, Claudia Fusco, Eric Novello, Anna
            Martino, entre outras.
          </p>
          <p>
            Quer saber mais sobre a história do <TF /> e como essas pessoas
            acabaram nesse projeto? Leia o <Link to="#book">livro</Link>!
          </p>
        </div>
      </div>
    </div>
  )
}
