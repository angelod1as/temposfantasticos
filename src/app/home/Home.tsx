import { Link } from "@/components/Link"
import { Logo } from "@/components/Logo"
import { Newspapers } from "@/components/Newspapers"
import { SubstackIframe } from "@/components/SubstackIframe"
import { TF } from "@/components/TF"
import React from "react"

const driveUrl =
  "https://drive.google.com/drive/u/3/folders/1JQUOdHIGPVn1X1u4lEcTWTjR78AVFsLu"

export const Home = () => {
  return (
    <div className="flex-center gap-4">
      <h1 className="hidden">Tempos Fantásticos</h1>
      <Logo className="max-w-md mb-8" />
      <p>
        O <TF /> é um jornal satírico de ficção científica e especulativa, com
        notícias do futuro, passado e presentes alternativos.
      </p>
      <p>
        Nele, você encontra textos em formato jornalístico, colunas opinativas,
        ilustrações, quadrinhos, e até anúncios, todos sob o guarda-chuva da
        ficção especulativa: <b>sci-fi, fantasia, horror e ficção histórica</b>.
      </p>

      <p>Assine nossa newsletter para receber novidades do projeto.</p>

      <SubstackIframe />

      <h2>
        O livro do <TF />
      </h2>
      <p>
        Em breve, vamos lançar uma coletânea com 100% da produção do TF — a
        totalidade dos textos, ilustrações, tiras e outros elementos publicados
        nas 28 edições. O livro será publicado em 2024.
      </p>

      <Newspapers />

      <p>
        Se você quiser ler o material em seu formato original, você pode{" "}
        <Link to={driveUrl}>clicar aqui</Link> e ter acesso à todos os PDFs{" "}
        <i>inteiramente de graça</i>
      </p>

      <h2>
        O futuro do <TF />
      </h2>
      <p>
        Além do livro, estamos ensaiando um retorno ao modelo anterior de
        assinaturas — com edições digitais e impressas produzidas com bastante
        carinho.
      </p>
      <p>Assine a newsletter acima para ficar sabendo quando voltaremos.</p>

      <h2>
        Quem faz o <TF />
      </h2>
      <p>
        O jornal foi criado e editado pelo programador, designer e escritor{" "}
        <Link to="https://angelodias.com.br">Angelo Dias</Link>.
      </p>
      <p>
        A última formação da equipe do <TF /> contou com a escritora e tradutora
        Jana Bianchi, o escritor e multitalentoso JP Lima, o ilustrador e
        quadrinista Raphael Andrade, e a jornalista Ludimila Honorato.
      </p>
      <p>
        Além dessas pessoas, tivemos a participação de artistas e escritores
        como Rafa Nunes, Aline Valek, Claudia Fusco, Eric Novello, Anna Martino,
        entre outras.
      </p>
      <p>
        Quer saber mais sobre a história do <TF /> e como essas pessoas acabaram
        nesse projeto? Assine a newsletter e fique ligado no lançamento do
        livro!
      </p>

      <SubstackIframe />
    </div>
  )
}
