import { Message } from './styled'

const Component = ({ formMessages, alert }) => {
    return (
        formMessages.length > 0 &&
        <Message className={alert}>
            {formMessages}
        </Message>
    )
}

export default Component