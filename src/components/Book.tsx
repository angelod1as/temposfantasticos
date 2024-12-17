import React from "react"
import Image from "next/image"
import { TF } from "./TF"
import { Button } from "./Button"

const ratio = {
  w: 500,
  h: 707,
}

const size = 1

export const Book = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-center" id="book">
          A Magnífica História do <br />
          <em>Tempos Fantásticos</em>
        </h2>
        <p className="text-center leading-5">
          O Jornal Satírico De Ficção Especulativa
          <br />
          com Notícias do Passado, Presente & Futuro
          <br />e Material Nunca Antes Publicado
        </p>
      </div>

      <Image
        src={`/book/cover.jpg`}
        alt={`Capa do livro do Tempos Fantásticos`}
        width={size * ratio.w}
        height={size * ratio.h}
        className="my-0 mx-auto" // Prevent shrinking of images
      />

      <p>
        Reunindo todas as edições do icônico jornal satírico <TF />, esta
        antologia mergulha no fascinante universo da ficção especulativa. Com
        notícias de futuros improváveis, passados alternativos e presentes que
        desafiam a realidade, o livro apresenta uma coleção rica em criatividade
        e humor.
      </p>

      <p>
        Das colunas opinativas às reportagens imaginárias, passando por
        quadrinhos, ilustrações e anúncios fictícios, cada página explora os
        limites da ficção científica, fantasia, horror e ficção histórica. A
        magnífica História do Tempos Fantásticos é uma celebração da narrativa
        inventiva, que transforma o cotidiano em algo extraordinário e
        inesquecível.
      </p>

      <Button to="https://www.amazon.com.br/magn%C3%ADfica-hist%C3%B3ria-Tempos-Fant%C3%A1sticos-especulativa-ebook/dp/B0D3GCN5XL">
        Conheça essa história!
      </Button>
    </div>
  )
}
