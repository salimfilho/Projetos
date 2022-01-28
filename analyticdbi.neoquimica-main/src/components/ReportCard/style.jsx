import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CardLink = styled(Link)`
  & {
    border-radius: 20px;
    text-decoration: none;
    margin: 16px;
    width: 100%;
    padding: 12px;
    background-color: var(--color-yellow);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &:hover {
    opacity: 0.5;
  }
  & img {
    border-radius: 15px;
    width: 100%;
  }
  & p {
    background-color: var(--color-sidebar);
    font-size: 14px;
    margin: 10px 0;
    font-weight: 400;
    color: var(--color-white);
    padding: 10px;
    border-radius: 10px;
  }
  @media (max-width: 2562px) {
    & {
      width: 20%;
    }
  }
  @media (max-width: 1440px) {
    & {
      width: 20%;
    }
  }
  @media (max-width: 1140px) {
    & {
      width: 30%;
    }
  }
  @media (max-width: 960px) {
    & {
      width: 45%;
    }
  }
  @media (max-width: 720px) {
    & {
      width: 90%;
    }
  }
  @media (max-width: 576px) {
    & {
      width: 90%;
    }
  }
`
