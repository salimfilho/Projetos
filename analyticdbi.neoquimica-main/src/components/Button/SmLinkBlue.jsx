import { SmLinkBlue } from './styled'

const Component = props => {
    return (
        <SmLinkBlue to={props.to}>
            {props.children}
        </SmLinkBlue>
    )
}

export default Component