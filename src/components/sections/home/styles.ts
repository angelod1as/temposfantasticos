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

export const ButtonLink = styled.a`
  margin-top: 15px;
  margin-bottom: 30px;
  button {
    min-width: 250px;
    max-width: 250px;
    cursor: pointer;
    transition: box-shadow 0.3s;
    padding: 20px 10px;
    background-color: ${color};
    color: white;
    border: none;
    border-radius: 5px;
    box-shadow: 10px 10px 0px -1px rgba(0, 0, 0, 1);
    &:hover {
      box-shadow: 5px 5px 0px -1px rgba(0, 0, 0, 1);
    }
  }
`

export const URL = styled.a`
  word-break: break-all;
`
