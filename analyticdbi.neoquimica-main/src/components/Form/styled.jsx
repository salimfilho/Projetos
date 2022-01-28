import styled, { css } from 'styled-components'

export const Label = styled.div`
    display: flex;
    align-items: center;
    color: var(--color-font);
    font-size: 14px;
    & div {
        color: var(--color-red);
        height: 8px;
        margin: 0  0 4px 16px;
    }
`

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    & .variant {
        border: 1px solid var(--color-font);
        outline: 0;
        color: var(--color-input);
    }
`

export const InputLabel = styled(InputGroup)`
    & input {
        border: 1px solid var(--color-grey);
        color: var(--color-font);
        font-size: 14px;
        padding: 10px 20px;
        margin-top: 8px;
        border-radius: 20px;
        background-color: var(--color-background-input);
    }
    & input:focus {
        outline: 0;
    }
`

export const SelectLabel = styled(InputGroup)`
    & select {
        border: 1px solid var(--color-grey);
        color: var(--color-font);
        font-size: 14px;
        padding: 10px 20px;
        margin-top: 8px;
        border-radius: 20px;
        background-color: var(--color-background-input);
    }
    & input:focus {
        outline: 0;
    }
`

const dragActive = css`
    border-color: green;
`
const dragReject = css`
    border-color: red;
`
export const DropContainer = styled.div.attrs({
    className: 'dropzone'
})`
    border-radius: 10px;
    border: 1px solid var(--color-grey);
    cursor: pointer;
    transition: height 0.2s ease;
    background-color: var(--color-white);
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => props.idDragActive && dragActive}
    ${props => props.isDragReject && dragReject}
`
const messageColors = {
    default: 'var(--color-font)',
    error: 'var(--color-red)',
    success: 'var(--color-green)'
}
export const UploadMessage = styled.p`
    display: flex;
    color: ${props => messageColors[props.type || 'default']};
    justify-content: center;
    align-items: center;
    font-size: 14px;
    margin: 0 !important;
`
export const DropBox = styled.div`
    background-color: var(--color-background-input);
    border: 1px solid var(--color-grey);
    max-width: 450px;
    width: 100%;
    border-radius: 20px;
    padding: 20px;
    & img {
        width: 100%;
        margin-top: 20px;
        border-radius: 10px;
    }
`
