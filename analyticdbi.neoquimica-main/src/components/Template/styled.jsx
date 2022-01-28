import styled from 'styled-components'

export const Body = styled.div`
    display: flex;
    background-color: var(--color-background);
`
export const Content = styled.div`
    min-height: calc(100vh - 60px);
    width: 100%;
    @media (max-width: 1140px) {
        margin-top: 60px;
    }
`
export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`