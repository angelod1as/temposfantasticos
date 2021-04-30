import { HomeWrapper } from './styles'
import Image from 'next/image'

export default function Home() {
  return (
    <HomeWrapper>
      <Image
        src="/images/Jennings-TF-Temp_01.png"
        alt=""
        width={1200}
        height={927}
      />
      <Image
        src="/images/Jennings-TF-Temp_02.png"
        alt=""
        width={1200}
        height={539}
      />
      <Image
        src="/images/Jennings-TF-Temp_03.png"
        alt=""
        width={1200}
        height={478}
      />
      <a
        href="https://drive.google.com/drive/folders/1JQUOdHIGPVn1X1u4lEcTWTjR78AVFsLu?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/images/Jennings-TF-Temp_04.png"
          alt=""
          width={1200}
          height={813}
        />
      </a>
      <Image
        src="/images/Jennings-TF-Temp_05.png"
        alt=""
        width={1200}
        height={478}
      />
      <Image
        src="/images/Jennings-TF-Temp_06.png"
        alt=""
        width={1200}
        height={739}
      />
      <Image
        src="/images/Jennings-TF-Temp_07.png"
        alt=""
        width={1200}
        height={850}
      />
    </HomeWrapper>
  )
}
