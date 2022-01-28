import { Link } from 'react-router-dom'
import { Breadcrumb, TitleBar, Background } from './styled'

const Component = props => {
    return (
        <Background>
            <TitleBar>
                <div>
                    <h1>{props.label}</h1>
                    <Breadcrumb>
                        {
                            props.breadcrumb && props.breadcrumb.map(
                                (item, index) => <li key={index}><Link to={item.path}>{item.label}</Link>/</li>
                            )
                        }
                        <li>{props.currentPage}</li>
                    </Breadcrumb>
                </div>
            </TitleBar>
        </Background>
    )
}

export default Component