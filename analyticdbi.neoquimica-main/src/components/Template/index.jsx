import { Body, Content, ContentWrapper } from './styled'
import Topbar from 'components/Topbar'
import Sidebar from 'components/Sidebar'

const Base = ChildrenComponent => {

    const ComponentBase = props => {
        return (
            <Body>
                <Sidebar />
                <ContentWrapper>
                    <Topbar />
                    <Content>
                        <ChildrenComponent {...props} />
                    </Content>
                </ContentWrapper>
            </Body>
        )
    }
    
    return ComponentBase
}

export default Base