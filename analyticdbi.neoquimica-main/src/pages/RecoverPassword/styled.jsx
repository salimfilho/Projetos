import styled from 'styled-components'

export const Login = styled.div`
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  & h1 {
    font-size: 24px;
    padding: 5px 0;
    color: var(--color-blue);
    text-align: start;
    min-width: 350px;
  }
`
export const SubTitle = styled.p`
  color: var(--color-blue);
  margin-bottom: 25px;
  min-width: 350px;
`
export const InputBox = styled.div`
  padding: 10px 0;
`
export const BtnBox = styled.div`
  padding: 20px 0;
  width: 100%;
  & button {
    width: 100%;
  }
`
export const ForgotPassword = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  & a {
    text-decoration: none;
    color: var(--color-blue);
    font-weight: bold;
  }
`
export const Form = styled.form`
  min-width: 350px;
`