import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Topbar, TopbarMenuDesktop, TopbarMenuMobile, Logout, TopbarLinks, TopbarActions } from './styled'
import { FaBars } from "react-icons/fa"
import { Context } from 'contexts/context'
import { logout } from 'services/auth'

const Component = () => {

  const history = useHistory()
  const { toggle, setToggle } = useContext(Context)

  return (
    <Topbar>
      <TopbarMenuDesktop onClick={() => setToggle(!toggle)}>
        <span><FaBars /></span>
      </TopbarMenuDesktop>
      <TopbarMenuMobile
        onClick={() => setToggle(!toggle)}
        className={toggle ? 'menu-open' : 'menu-closed'}
      >
        <span><FaBars /></span>
      </TopbarMenuMobile>
      <TopbarActions>
        <TopbarLinks href='https://www.hyperapharma.com.br/' target='__blank'>
          <img src="/internet.png" alt="" />
          <div>Site</div>
        </TopbarLinks>
        <TopbarLinks href='https://www.portalneopharma.com.br/' target='__blank'>
          <img src="/neoquimica.png" alt="" />
          <div>Neo Pharma</div>
        </TopbarLinks>
        <TopbarLinks href='https://www.instagram.com/hyperaoficial' target='__blank'>
          <img src="/instagram.png" alt="" />
          <div>Hypera Pharma</div>
        </TopbarLinks>
        <TopbarLinks href='https://www.instagram.com/neoquimica' target='__blank'>
          <img src="/instagram.png" alt="" />
          <div>Neo Química</div>
        </TopbarLinks>
        <div>
          <Logout onClick={() => logout(history)}>Sair</Logout>
        </div>
      </TopbarActions>
    </Topbar>
  )
}

export default Component
