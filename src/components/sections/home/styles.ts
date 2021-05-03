import styled from 'styled-components'

// const purple = '#6c3f99'
// const blue = '#4495d1'
// const red = '#d2232a'
// const pink = '#de9ba8'

export const HomeWrapper = styled.div`
  background: #6c3f99;
  background: linear-gradient(
    0deg,
    rgba(210, 35, 42, 1) 50%,
    rgba(108, 63, 153, 1) 100%
  );
  min-height: 100vh;
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & * {
    display: block !important;
  }
`
