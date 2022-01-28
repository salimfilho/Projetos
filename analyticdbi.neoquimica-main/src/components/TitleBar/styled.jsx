import styled from 'styled-components'

export const Background = styled.div`
    background-color: var(--color-sidebar);
`
export const TitleBar = styled.div`
    background-color: var(--color-background-title-bar);
    color: var(--color-blue);
    height: 80px;
    padding-left: 60px;
    display: flex;
    align-items: center;
    & h1 {
        font-size: 20px;
        color: var(--color-sidebar);
    }
`
export const Breadcrumb = styled.ul`
    padding: 2px 0;
    list-style: none;
    margin: 0 auto;
    & li {
        display: inline;
        font-size: 12px;
    }
    & li + li:before {
        color: var(--color-font);
    }
    & li a {
        color: var(--color-blue);
        text-decoration: none;
        padding: 8px 8px 8px 0;
        border-radius: 5px;
    }
    & li {
        color: var(--color-font);
    }
    & li a:hover {
        text-decoration: none;
    }
`