import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Sidebar, Menu, SidebarBrand, User, Name, Email } from './styled'
import { FaUsers, FaIndustry, FaChartArea, FaImages } from 'react-icons/fa'
import MenuItem from 'components/MenuItem'
import { Context } from 'contexts/context'
import { getUser } from 'services/auth'

const Component = () => {

  const { toggle, user, setUser } = useContext(Context)

  useEffect(() => {
    (async () => {
      setUser(getUser().data)
    })()
  }, [])

  const { file_url, name, roles } = user

  return (
    <Sidebar
      className={`
        ${toggle ? 'open' : 'closed'}
        ${toggle ? 'menu-open' : 'menu-closed'}
      `}
    >
      <div>
        <Link to="/dashboard">
          <SidebarBrand className={toggle ? 'open' : 'closed'} >
            <img className="logo" src="/logo-neo-vista-branco.png" alt="elleve" />
            <img className="logo-mini" src="/logo-neo-vista-branco.png" alt="elleve" />
          </SidebarBrand>
        </Link>
        <User to="/profile">
          <img className={`${toggle ? 'open' : 'closed'}`} src={file_url ? file_url : '/user.svg'} alt="analyticdbi" />
          <div className={`${toggle ? 'open' : 'closed'}`}>
            <Email>Bem vindo</Email>
            <Name>{name}</Name>
          </div>
        </User>
        <Menu>
          {roles === 'admin' ? <MenuItem path="/grupos" icon={<FaIndustry />} label="Relatórios" /> : <MenuItem path="/relatorios" icon={<FaChartArea />} label="Relatórios" />}
          {roles === 'admin' && <MenuItem path="/usuarios" icon={<FaUsers />} label="Usuários" />}
          {roles === 'admin' && <MenuItem path="/cards" icon={<FaImages />} label="Cards" />}
        </Menu>
      </div>
    </Sidebar>
  )
}

export default Component