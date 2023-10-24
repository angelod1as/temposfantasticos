"use client"

import { useState } from "react"
import { Button } from "./Button"

type FormElements = HTMLFormControlsCollection & {
  email: HTMLInputElement
  antirobot: HTMLInputElement
}

type SubstackFormElements = HTMLFormElement & {
  readonly elements: FormElements
}

type substackResult = {
  errors?: Array<{
    location: string
    msg: string
    param: string
    value: string
  }>
}

const fetchSubstack = async (email: string): Promise<substackResult> => {
  const substackUrl =
    "https://us-central1-substackapi.cloudfunctions.net/subscribe"
  const result = await fetch(substackUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      domain: "temposfantasticos.substack.com",
    }),
  })

  return await result.json()
}

export const Substack = () => {
  const [errors, setErrors] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (event: React.FormEvent<SubstackFormElements>) => {
    event.preventDefault()
    const email = event.currentTarget.elements.email.value
    const antirobot = event.currentTarget.elements.antirobot.value

    if (antirobot) {
      return
    }

    if (!email) {
      setErrors(["Oops, você precisa colocar um email"])
    }

    setLoading(true)

    fetchSubstack(email)
      .then((result) => {
        if (result.errors && result.errors?.length > 0) {
          const errorMessages = result.errors.map((error) => error.msg)
          setErrors(errorMessages)
        }

        setSuccess(true)
      })
      .catch((error) => {
        setErrors([
          "Um erro desconhecido ocorreu. Contate os administradores da página",
        ])
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const removeError = () => {
    setErrors([])
  }

  if (loading) return <div>Carregando...</div>

  if (success) {
    return (
      <div>
        <b>Obrigado pela inscrição!</b>
        <p className="mb-4">Por favor confirme sua inscrição no seu email 😎</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-y-2 sm:flex-row sm:items-center sm:gap-x-4">
        <label htmlFor="email" className="flex-1 block w-full">
          Email:
        </label>
        <div className="w-full">
          <input
            type="email"
            defaultValue=""
            name="email"
            className="w-full px-2 py-1 rounded border-white border bg-black"
            placeholder="mrspock@enterprise.com"
            required
            onClick={removeError}
          />
          {/* Avoid spam by adding a hidden field that can only be reached by machines */}
          <input
            type="text"
            defaultValue=""
            name="antirobot"
            tabIndex={-1}
            className="absolute left-[-5000px]"
            aria-hidden="true"
          />
        </div>
        <Button type="submit">Bora!</Button>
      </div>
      {errors.length > 0 && (
        <div className="mt-2 text-sm">
          <p className="mt-2 mb-0 text-sm font-bold text-red">
            Bzz Bzz! Erro! Erro!
          </p>
          <ul>
            {errors.map((error, index) => {
              return (
                <li key={index} className="list-disc list-inside">
                  {error}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </form>
  )
}
