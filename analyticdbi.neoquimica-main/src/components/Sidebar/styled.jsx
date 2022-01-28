import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Sidebar = styled.section`
    background-color: var(--color-sidebar);
    transition: all ease 0.2s;
    z-index: 1;
    max-width: 180px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20px;
    &.open { min-width: 180px; }
    &.closed {
        max-width: 80px;
        padding: 0 5px;
    }
    & a {
        text-decoration: none;
    }
    @media (max-width: 1140px) {
        height: 100%;
        position: fixed;
        &.menu-closed {
            transform: translateX(-100%);
        }
        &.menu-open {
            transform: translateX(0);
        }
    }
`
export const Menu = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`
export const SidebarBrand = styled.div`
    transition: all ease 0.2s;
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    & .icone { width: 50px; }
    &.open img.logo {
        width: 180px;
    }
    &.open img.logo-mini {
        display: none;
    }
    &.closed img.logo {
        display: none;
    }
    &.closed img.logo-mini {
        height: 50px;
    }
    &.open p {
        color: var(--color-yellow);
        font-size: 24px;
        padding-left: 12px;
        font-weight: 600;
    }
    &.closed p {
        display: none;
    }
`
export const User = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    margin: 0 auto 30px auto;
    transition: all ease 0.2s;
    border-radius: 15px;
    &:hover {
        background-color: var(--color-sidebar-hover);
        cursor: pointer;
    }
    & img {
        width: 100%;
        border-radius: 15px;
        margin-bottom: 24px;
    }
    & img.closed {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-bottom: 0;
    }
    & div.closed {
        display: none;
    }
`
export const Name = styled.p`
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: var(--color-yellow);
`
export const Email = styled.p`
    font-size: 12px;
    color: var(--color-yellow);
    text-align: center;
`