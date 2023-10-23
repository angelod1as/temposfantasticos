import { Button } from "@/components/Button"
import { Link } from "@/components/Link"
import { Logo } from "@/components/Logo"
import { Separator } from "@/components/Separator"
import { Substack } from "@/components/Substack"
import React from "react"

const driveUrl =
  "https://drive.google.com/drive/u/3/folders/1JQUOdHIGPVn1X1u4lEcTWTjR78AVFsLu"

export const Home = () => {
  return (
    <div className="flex-center gap-4">
      <h1 className="hidden">Tempos Fantásticos</h1>
      <Logo className="max-w-md" />
      <p>
        O <i>Tempos Fantásticos</i> é um jornal satírico de ficção científica e
        especulativa, com notícias do futuro, passado e presentes alternativos.
      </p>
      <p>
        Nele, você encontra textos em formato jornalístico, colunas opinativas,
        ilustrações, quadrinhos, e até anúncios, todos sob o guarda-chuva da
        ficção especulativa: <b>sci-fi, fantasia, horror e ficção histórica</b>.
      </p>
      <Separator />
      <h2>Como ler o Tempos Fantásticos?</h2>

      <p>Coloque seu email abaixo para receber as novidades do projeto</p>
      <Substack />
      <p>
        Em breve, vamos lançar uma coletânea com 100% da produção do TF — a
        totalidade dos textos, ilustrações, tiras e outros elementos publicados
        nas 28 edições.
      </p>
      <p>
        Se você quiser ver as edições anteriores, pode clicar abaixo e ler todos
        os números <i>inteiramente de graça</i>.
      </p>

      <Link to={driveUrl}>
        <Button>Clique para ler</Button>
      </Link>

      <Separator />
      <h2>O futuro do Tempos Fantásticos</h2>
      <p>
        Além do Livro, estamos ensaiando um retorno ao modelo anterior de
        assinaturas — com edições digitais e impressas produzidas com bastante
        carinho.
      </p>
      <p>Assine a newsletter acima para ficar sabendo quando voltaremos.</p>
    </div>
  )
}
