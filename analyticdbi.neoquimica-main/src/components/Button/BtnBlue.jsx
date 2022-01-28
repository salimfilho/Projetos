import { BtnBlue } from './styled'

const Component = props => {
    return (
        <BtnBlue type={props.type} onClick={props.onClick}>
            {props.children}
        </BtnBlue>
    )
}

export default Component