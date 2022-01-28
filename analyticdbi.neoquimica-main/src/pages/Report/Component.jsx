import { PowerBIEmbed } from 'powerbi-client-react'
import './style.css'

const Component = props => {

  return (
    <>
        <PowerBIEmbed
          embedConfig={{
            type: 'report',
            id: props.data.reportId,
            embedUrl: props.data.embedUrl,
            accessToken: props.data.token,
            tokenType: props.data.type,
            settings: {
              panes: {
                filters: {
                  visible: false
                },
                pageNavigation: {
                  visible: false
                }
              }
            }
          }}
          cssClassName={"report"}
        />
    </>
  )
}

export default Component
