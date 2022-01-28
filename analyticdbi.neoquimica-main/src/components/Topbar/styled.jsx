import styled from 'styled-components'

export const TopbarMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-white);
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`
export const Topbar = styled.header`
    height: 60px;
    width: 100%;
    background-color: var(--color-white);
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid var(--color-grey);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    @media (max-width: 1140px) {
        position: fixed;
    }
`
export const TopbarMenuDesktop = styled(TopbarMenu)`
    transition: all ease 0.2s;
    height: inherit;
    & span {
        margin-left: 20px;
        font-size: 20px;
        color: var(--color-sidebar);
        display: flex;
    }
    @media (max-width: 1140px) {
        & {
            display: none;
        }
    }
`
export const TopbarMenuMobile = styled(TopbarMenu)`
    transition: all ease 0.2s;
    & span {
        color: var(--color-yellow);
    }
    &.menu-open {
        margin-left: 240px;
    }
    @media (max-width: 2562px) {
        & {
            display: none;
        }
    }
    @media (max-width: 1140px) {
        & {
            display: flex;
        }
    }
`
export const Logout = styled.button`
    margin: 0 30px;
    padding: 3px 25px;
    border-radius: 30px;
    border: none;
    color: var(--color-blue);
    font-size: 12px;
    background-color: var(--color-yellow);
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`
export const TopbarActions = styled.div`
    display: flex;
    align-items: center;
`
export const TopbarLinks = styled.a`
    height: 60px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--color-sidebar);
    font-size: 14px;
    padding: 0 15px;
    & img {
        height: 30px;
        margin-right: 10px;
    }
`