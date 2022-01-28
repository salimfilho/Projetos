import { BtnYellow } from './styled'

const Component = props => {
    return (
        <BtnYellow type={props.type} onClick={props.onClick}>
            {props.children}
        </BtnYellow>
    )
}

export default Component