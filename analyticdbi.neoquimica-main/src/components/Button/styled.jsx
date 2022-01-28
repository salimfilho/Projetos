import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Standart = styled.button`
    align-items: center;
    border: none;
    border-radius: 30px;
    color: var(--color-white);
    display: flex;
    font-size: 14px;
    font-weight: bold;
    justify-content: center;
    transition: all 0.3s;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
    &:focus {
        outline: 0;
    }
`

export const Button = styled(Standart)`
    padding: 10px 25px;
`

export const BtnBlue = styled(Button)`
    background-color: var(--color-blue);
`
export const BtnGreen = styled(Button)`
    background-color: var(--color-green);
    color: var(--color-font);
`
export const BtnRed = styled(Button)`
    background-color: var(--color-red);
`
export const BtnYellow = styled(Button)`
    background-color: var(--color-yellow);
    color: var(--color-blue);
`
export const BtnWhite = styled(Button)`
    background-color: var(--color-white);
    color: var(--color-font);
`

export const StandartLink = styled(Link)`
    align-items: center;
    border: none;
    border-radius: 30px;
    color: var(--color-white);
    display:flex;
    font-size: 14px;
    font-weight: bold;
    justify-content: center;
    transition: all 0.3s;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
    &:focus {
        outline: 0;
    }
`
export const LinkButton = styled(StandartLink)`
    padding: 10px 25px;
    text-decoration: none;
`
export const SmallLink = styled(StandartLink)`
    padding: 5px 25px;
`
export const LinkBlue = styled(LinkButton)`
    background-color: var(--color-blue);
`
export const LinkYellow = styled(LinkButton)`
    background-color: var(--color-yellow);
    color: var(--color-blue);
`
export const SmLinkGreen = styled(SmallLink)`
    background-color: var(--color-green);
    color: var(--color-font);
`
export const SmLinkBlue = styled(SmallLink)`
    background-color: var(--color-blue);
`
export const SmLinkYellow = styled(SmallLink)`
    background-color: var(--color-yellow);
    color: var(--color-blue);
`

export const BtnBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
`