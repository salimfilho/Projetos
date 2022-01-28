import { BtnGreen } from './styled'

const Component = props => {
    return (
        <BtnGreen type={props.type} onClick={props.onClick}>
            {props.children}
        </BtnGreen>
    )
}

export default Component