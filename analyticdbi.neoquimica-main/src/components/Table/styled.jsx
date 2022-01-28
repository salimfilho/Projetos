import styled from 'styled-components'

export const Table = styled.table`
    width: 100%;
    padding: 0 15px 15px;
    font-size: 14px;
    & th {
        padding: 12px;
        text-align: left;
        border-bottom: 1px solid var(--color-grey);
    }
    & tr:nth-child(even) {
        background-color: var(--color-background-input);
    }
    & td {
        padding: 8px;
    }
`