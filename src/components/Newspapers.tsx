import Image from "next/image"
import React from "react"

const numbers = Array.from(Array(28).keys())

export const Newspapers = () => {
  return (
    <div className="overflow-hidden w-[100vw] relative">
      <div className="flex space-x-2 animate-slide">
        {numbers.map((index) => {
          const number = index + 1
          return (
            <Image
              src={`/newspapers/edicao-TF-${number}-1.jpg`}
              key={number}
              alt={`Capa da edição ${number} do TF`}
              width={200}
              height={200}
              className="flex-shrink-0" // Prevent shrinking of images
            />
          )
        })}
      </div>
    </div>
  )
}
