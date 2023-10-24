import Image from "next/image"
import React from "react"

const numbers = Array.from(Array(28).keys())

export const Newspapers = () => {
  return (
    <div className="grid grid-cols-6 w-[95vw] gap-1 md:grid-cols-10 md:gap-2 md:w-[85vw] relative left-[-50vw + 50%]">
      {numbers.map((index) => {
        const number = index + 1
        return (
          <Image
            src={`/newspapers/edicao-TF-${number}-1.jpg`}
            key={number}
            alt={`Capa da edição ${number} do TF`}
            width={200}
            height={200}
          />
        )
      })}
    </div>
  )
}
