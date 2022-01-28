import { LinkYellow } from './styled'

const Component = props => {
    return (
        <LinkYellow to={props.to}>
            {props.children}
        </LinkYellow>
    )
}

export default Component