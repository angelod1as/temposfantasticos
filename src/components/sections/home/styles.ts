import styled from 'styled-components'

const color = '#3c1689'

export const HomeWrapper = styled.div`
  background-color: ${color};
  min-height: 100vh;
  width: 100%;
  height: 100%;
  padding: 50px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TextWrapper = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  a {
    color: ${color};
    word-break: break-all;
  }
  @media (min-width: 500px) {
    padding: 50px;
  }
`

export const ImgWrapper = styled.div`
  background-color: ${color};
  width: 200px;
  height: 200px;
  margin-bottom: 50px;
  @media (min-width: 500px) {
    width: 300px;
    height: 300px;
  }
`

export const SvgWrapper = styled.div`
  margin: 50px 0;
  width: 100%;
  height: 100%;
  svg {
    fill: ${color};
  }
  @media (min-width: 500px) {
    margin: 50px 0 0 0;
  }
`
