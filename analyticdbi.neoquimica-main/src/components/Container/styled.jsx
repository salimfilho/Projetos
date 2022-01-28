import styled from 'styled-components'

export const ContainerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media (max-width: 2562px) {
    .container {
      width: 1440px;
    }
  }
  @media (max-width: 1440px) {
    .container {
      width: 1140px;
    }
  }
  @media (max-width: 1140px) {
    .container {
      width: 960px;
    }
  }
  @media (max-width: 960px) {
    .container {
      width: 720px;
    }
  }
  @media (max-width: 720px) {
    .container {
      width: 576px;
    }
  }
  @media (max-width: 576px) {
    .container {
      width: 100%;
    }
    .content {
      width: 90%;
      margin: 0 auto;
      padding: 16px;
    }
  }
`