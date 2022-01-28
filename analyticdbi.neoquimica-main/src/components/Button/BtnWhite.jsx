import { BtnWhite } from './styled'

const Component = props => {
    return (
        <BtnWhite type={props.type} onClick={props.onClick}>
            {props.children}
        </BtnWhite>
    )
}

export default Component