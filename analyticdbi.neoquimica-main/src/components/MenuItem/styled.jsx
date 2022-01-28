import styled from 'styled-components'

export const MenuItem = styled.li`
    margin: 2px 0;
    border-radius: 15px;
    transition: all ease 0.2s;
    &:hover {
        background-color: var(--color-sidebar-hover);
        color: var(--color-white) !important;
        cursor: pointer;
    }
    & a {
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 20px 4px;
        border-radius: 15px;
        margin-bottom: 4px;
        font-size: 14px;
        font-weight: 500;
    }
    & a span {
        padding: 0 10px;
        font-size: 18px;
        color: var(--color-icons);
    }
    &.open a p {
        margin: 0;
        color: var(--color-white);

    }
    &.closed a p {
        display: none;
    }
    & .active-menu {
        background-color: var(--color-sidebar-hover);
        & span {
            color: var(--color-white);
        }
        & p {
            color: var(--color-white) !important;
        }
    }
`