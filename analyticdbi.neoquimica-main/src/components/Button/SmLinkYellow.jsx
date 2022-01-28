import { SmLinkYellow } from './styled'

const Component = props => {
    return (
        <SmLinkYellow to={props.to}>
            {props.children}
        </SmLinkYellow>
    )
}

export default Component