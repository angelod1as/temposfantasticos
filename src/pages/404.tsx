import styled from 'styled-components'

export default function Custom404() {
  // TODO: 404
  return (
    <Wrapper>
      <div>Page not found</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h1 {
    max-width: 620px;
    text-align: center;
    span {
      font-style: italic;
    }
  }
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
