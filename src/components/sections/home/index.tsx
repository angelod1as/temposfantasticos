import {
  HomeWrapper,
  ImgWrapper,
  TextWrapper,
  SvgWrapper,
  ButtonLink,
  URL,
} from './styles'
import Image from 'next/image'

export default function Home() {
  return (
    <HomeWrapper>
      <TextWrapper>
        <ImgWrapper>
          <Image src="/home.png" alt="" width={300} height={300} />
        </ImgWrapper>
        <p>
          O <b>Tempos Fantásticos</b> está passando por um processo{' '}
          <i>pesadão</i>.
        </p>
        <p>
          Parte desse processo é a <i>total e completa</i> reformulação do
          projeto e, bem, como você pode imaginar, do site.
        </p>
        <p>
          (sim, essa é uma famosa página de <i>Site em Construção</i>. Bem anos
          2000 né?)
        </p>
        <p>
          Se você quiser baixar qualquer edição do <b>TF</b>, é só clicar
          abaixo. Você vai ver uma pasta do Drive com todas as edições em PDF
          pra você ler com tranquilidade
        </p>
        <ButtonLink
          href="https://drive.google.com/drive/folders/1JQUOdHIGPVn1X1u4lEcTWTjR78AVFsLu?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button>Baixar</button>
        </ButtonLink>
        <p>
          Versões impressas? Ainda temos mas evitamos enviar por conta da
          pandemia. Envie um email para{' '}
          <URL
            href="mailto:temposfantasticos@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            temposfantasticos@gmail.com
          </URL>{' '}
          que a gente conversa sobre.
        </p>
        {/* LOGO */}
        <SvgWrapper>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="logo-horizontal"
            viewBox="0 0 215.3 69.4"
          >
            <path d="M142.5 37.9c.9-1.6 2.1-2.9 3.5-4h-32v6h9.9v27.9h7.6V40h9.9c.3-.8.7-1.4 1.1-2.1zM21.6 45.7h-14v-5.9h33v-5.9H0v34h7.6V51.6H19zM51.8 5.5h-9.6V0h39.4v5.5H58.8v34.2h-7V5.5z" />
            <path d="M104.2 26.5v5.4H60.8V7.6H82v5H68v4.2h12.6V22H68v4.5h36.2zM131.1 8.4c1.6.7 2.9 1.8 3.8 3.2.9 1.4 1.3 3 1.3 4.8 0 1.9-.4 3.5-1.3 4.8-.9 1.4-2.2 2.4-3.8 3.2-1.6.7-3.6 1.1-5.8 1.1H121v6.4h-7V7.3h11.3c2.2 0 4.2.3 5.8 1.1zm-3 10.7c.7-.6 1.1-1.5 1.1-2.7 0-1.2-.4-2-1.1-2.7-.7-.6-1.8-1-3.2-1H121V20h3.9c1.4 0 2.5-.3 3.2-.9z" />
            <path d="M139.8 26.2c-2.1-1.1-3.7-2.6-4.9-4.6-1.2-2-1.8-4.1-1.8-6.6 0-2.4.6-4.6 1.8-6.6 1.2-2 2.8-3.5 4.9-4.6 2.1-1.1 4.4-1.7 7-1.7 2.6 0 5 .6 7 1.7 2.1 1.1 3.7 2.6 4.9 4.6 1.2 2 1.8 4.1 1.8 6.6 0 2.4-.6 4.6-1.8 6.6-1.2 2-2.8 3.5-4.9 4.6-2.1 1.1-4.4 1.7-7 1.7-2.6-.1-5-.6-7-1.7zm10.4-5c1-.6 1.8-1.4 2.4-2.5.6-1.1.9-2.3.9-3.7 0-1.4-.3-2.6-.9-3.7-.6-1.1-1.4-1.9-2.4-2.5-1-.6-2.1-.9-3.4-.9-1.2 0-2.4.3-3.4.9-1 .6-1.8 1.4-2.4 2.5-.6 1.1-.9 2.3-.9 3.7 0 1.4.3 2.6.9 3.7.6 1.1 1.4 1.9 2.4 2.5 1 .6 2.1.9 3.4.9 1.2 0 2.4-.3 3.4-.9zM114 0h19.5v5.5H114zM96.7 33.9h7.3l-7.2 5.8h-5.2l5.1-5.8zM172.2 58.5c-2.3-1.2-4.1-2.9-5.3-5-1.3-2.1-1.9-4.5-1.9-7.2s.6-5.1 1.9-7.2c1.3-2.1 3.1-3.8 5.3-5 2.3-1.2 4.8-1.8 7.7-1.8 2.8 0 5.4.6 7.7 1.8 2.3 1.2 4.1 2.9 5.3 5 1.3 2.1 1.9 4.5 1.9 7.2s-.6 5.1-1.9 7.2c-1.3 2.1-3.1 3.8-5.3 5-2.3 1.2-4.8 1.8-7.7 1.8-2.8 0-5.4-.6-7.7-1.8zm11.4-5.5c1.1-.6 2-1.5 2.6-2.7.6-1.2 1-2.5 1-4s-.3-2.9-1-4c-.6-1.2-1.5-2.1-2.6-2.7-1.1-.6-2.3-1-3.7-1-1.4 0-2.6.3-3.7 1-1.1.6-2 1.5-2.6 2.7-.6 1.2-1 2.5-1 4s.3 2.9 1 4c.6 1.2 1.5 2.1 2.6 2.7 1.1.6 2.3 1 3.7 1 1.4 0 2.6-.3 3.7-1z" />
            <path d="M197 68.6c-2.1-.5-3.7-1.3-5-2.2l2.5-5.6c1.2.8 2.6 1.4 4.2 1.9s3.2.7 4.7.7c2.9 0 4.4-.7 4.4-2.2 0-.8-.4-1.3-1.3-1.7-.8-.4-2.2-.8-4-1.2-2-.4-3.7-.9-5.1-1.4-1.4-.5-2.5-1.3-3.5-2.4-1-1.1-1.5-2.6-1.5-4.5 0-1.6.4-3.1 1.3-4.4.9-1.3 2.2-2.4 4-3.1 1.8-.8 4-1.2 6.6-1.2 1.8 0 3.5.2 5.2.6 1.7.4 3.2 1 4.5 1.8l-2.3 5.7c-2.6-1.4-5.1-2.1-7.5-2.1-1.5 0-2.6.2-3.3.7-.7.4-1 1-1 1.8 0 .7.4 1.3 1.2 1.6.8.4 2.1.7 4 1.1 2.1.4 3.8.9 5.1 1.4s2.5 1.3 3.5 2.4c1 1.1 1.5 2.6 1.5 4.4 0 1.6-.4 3.1-1.3 4.4-.9 1.3-2.2 2.4-4 3.1-1.8.8-4 1.2-6.5 1.2-2.3 0-4.4-.3-6.4-.8zM162 30.7c-2.1-.5-3.7-1.3-5-2.2l2.5-5.6c1.2.8 2.6 1.4 4.2 1.9s3.2.7 4.7.7c2.9 0 4.4-.7 4.4-2.2 0-.8-.4-1.3-1.3-1.7-.8-.4-2.2-.8-4-1.2-2-.4-3.7-.9-5.1-1.4-1.4-.5-2.5-1.3-3.5-2.4-1-1.1-1.5-2.6-1.5-4.5 0-1.6.4-3.1 1.3-4.4.9-1.3 2.2-2.4 4-3.1 1.8-.8 4-1.2 6.6-1.2 1.8 0 3.5.2 5.2.6 1.7.4 3.2 1 4.5 1.8l-2.3 5.7c-2.6-1.4-5.1-2.1-7.5-2.1-1.5 0-2.6.2-3.3.7-.7.4-1 1-1 1.8 0 .7.4 1.3 1.2 1.6.8.4 2.1.7 4 1.1 2.1.4 3.8.9 5.1 1.4s2.5 1.3 3.5 2.4c1 1.1 1.5 2.6 1.5 4.4 0 1.6-.4 3.1-1.3 4.4-.9 1.3-2.2 2.4-4 3.1-1.8.8-4 1.2-6.5 1.2-2.2 0-4.3-.3-6.4-.8z" />
            <path
              d="M194 32.9h21.3v5.5H194z"
              transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 409.218 71.2894)"
            />
            <path
              d="M142.5 62.4h37.4v5.5h-37.4z"
              transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 322.3558 130.327)"
            />
            <path d="M93.5 41.7h-8L74 67.9h7.7l2.1-5.2h11.3l2.1 5.2h7.9L93.5 41.7zM86 57.1l3.4-8.6 3.4 8.6H86zM33.4 41.8h-8.1L13.8 67.9h7.7l2.1-5.2h11.3l2.1 5.2h7.9L33.4 41.8zm-7.6 15.3l3.4-8.6 3.4 8.6h-6.8zM133.5 42h6.9v25.9h-6.9z" />
            <path d="M60.8 33.9v5.9h8.4v28.1h2.6l5-.1v-28h13.5v-5.9z" />
            <path d="M60.8 41.7v13.6L48.9 41h-6.2v26.9h7.4V53.5L62 67.9h5.1V41.7zM106 11.6l.1 29.1c1.6-.5 3.5-.8 5.7-.8h.7L112.4 0h-5.7l-8.5 14.2L89.5 0h-5.7v24.7h6.5V11.9l6.3 10.3h3.1l6.3-10.6zM119.9 55.6c-.9-1-2-1.7-3.2-2.2-1.2-.5-2.8-.9-4.7-1.3-1.7-.4-2.9-.7-3.6-1-.8-.3-1.1-.8-1.1-1.5s.3-1.2 1-1.6c.6-.4 1.6-.6 3-.6 2.2 0 4.5.6 6.9 1.9l2.2-5.2c-1.2-.7-2.6-1.2-4.2-1.6-1.6-.4-3.2-.5-4.8-.5-2.4 0-4.4.4-6 1.1-1.6.7-2.9 1.7-3.7 2.9-.8 1.2-1.2 2.6-1.2 4.1 0 1.7.4 3.1 1.3 4.1.9 1 2 1.8 3.2 2.2 1.2.5 2.8.9 4.7 1.3 1.7.4 2.9.7 3.7 1.1.8.3 1.1.9 1.1 1.6 0 1.3-1.3 2-4 2-1.4 0-2.9-.2-4.3-.7-.8-.3-1.6-.6-2.3-.9l3 6.7c1.2.2 2.4.3 3.6.3 2.4 0 4.4-.4 6-1.1 1.6-.7 2.9-1.7 3.7-2.9.8-1.2 1.2-2.5 1.2-4-.1-1.8-.6-3.2-1.5-4.2zM165.2 54.4c-.6-1.1-1.1-2.2-1.5-3.3C162 53 160 54 157.6 54c-1.5 0-2.8-.3-3.9-1-1.1-.6-2-1.5-2.7-2.7-.6-1.2-.9-2.5-.9-4s.3-2.9.9-4c.6-1.2 1.5-2.1 2.7-2.7 1.1-.6 2.4-1 3.9-1 2.4 0 4.4 1 6.1 2.9.4-1.2.9-2.3 1.5-3.3.6-.9 1.2-1.7 1.9-2.5-1-.8-2-1.5-3.3-2.1-2-.9-4.2-1.3-6.7-1.3-2.8 0-5.4.6-7.6 1.8-2.2 1.2-4 2.9-5.3 5-1.3 2.1-1.9 4.5-1.9 7.2s.6 5.1 1.9 7.2c1.3 2.1 3 3.8 5.3 5 2.2 1.2 4.8 1.8 7.6 1.8 2.5 0 4.7-.4 6.7-1.3 1.2-.5 2.3-1.2 3.3-2.1-.7-.7-1.4-1.5-1.9-2.5z" />
          </svg>
        </SvgWrapper>
      </TextWrapper>
    </HomeWrapper>
  )
}
