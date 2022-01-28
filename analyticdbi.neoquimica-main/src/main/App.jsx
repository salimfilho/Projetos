import { BrowserRouter, Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'
import GlobalStyle from 'main/GlobalStyle'
import Public from 'components/Routes/Public'
import Private from 'components/Routes/Private'
import Template from 'components/Template'
import TemplateLogin from 'components/TemplateLogin'

import ContextProvider from 'contexts/context'

const NoMatch = loadable(() => import('pages/NoMatch'))
const Login = loadable(() => import('pages/Login'))
const ForgotPassword = loadable(() => import('pages/ForgotPassword'))
const RecoverPassword = loadable(() => import('pages/RecoverPassword'))
const Profile = loadable(() => import('pages/Profile'))

const Index = loadable(() => import('pages/Index'))

const Groups = loadable(() => import('pages/Groups'))
const Reports = loadable(() => import('pages/Reports'))
const Report = loadable(() => import('pages/Report'))

const Cards = loadable(() => import('pages/Cards'))
const CardsStore = loadable(() => import('pages/CardsStore'))
const CardsUpdate = loadable(() => import('pages/CardsUpdate'))
const CardsUpdateImage = loadable(() => import('pages/CardsUpdateImage'))

const Users = loadable(() => import('pages/Users'))
const UsersStore = loadable(() => import('pages/UsersStore'))
const UsersUpdate = loadable(() => import('pages/UsersUpdate'))
const ReportsUser = loadable(() => import('pages/ReportsUser'))
const ReportsUserStore = loadable(() => import('pages/ReportsUserStore'))
const ReportsUserUpdate = loadable(() => import('pages/ReportsUserUpdate'))

const App = () => {
	return (
		<>
			<GlobalStyle />
			<ContextProvider>
				<BrowserRouter>
					<Switch>
						<Public path="/login" component={TemplateLogin(Login)} redirect="/dashboard" />
						<Public path="/esqueci-senha" component={TemplateLogin(ForgotPassword)} redirect="/dashboard" />
						<Public path="/recuperar-senha/:token" component={TemplateLogin(RecoverPassword)} redirect="/dashboard" />
						<Private path="/profile" component={Template(Profile)} redirect="/login" />

						<Private
							path="/grupos/:group_id/relatorios/:report_id/datasets/:dataset_id"
							component={Template(Report)}
							redirect="/login"
						/>
						<Private path="/grupos/:group_id/relatorios" component={Template(Reports)} redirect="/login" />
						<Private path="/grupos" component={Template(Groups)} redirect="/login" />

						<Private path="/cards/:id/upload" component={Template(CardsUpdateImage)} redirect="/login" />
						<Private path="/cards/:id/editar" component={Template(CardsUpdate)} redirect="/login" />
						<Private path="/cards/cadastrar" component={Template(CardsStore)} redirect="/login" />
						<Private path="/cards" component={Template(Cards)} redirect="/login" />

						<Private path="/relatorios" component={Template(Reports)} redirect="/login" />

						<Private path="/usuarios/:id/relatorios/:report_id/editar" component={Template(ReportsUserUpdate)} redirect="/login" />
						<Private path="/usuarios/:id/relatorios/cadastrar" component={Template(ReportsUserStore)} redirect="/login" />
						<Private path="/usuarios/:id/relatorios" component={Template(ReportsUser)} redirect="/login" />
						<Private path="/usuarios/:id/editar" component={Template(UsersUpdate)} redirect="/login" />
						<Private path="/usuarios/cadastrar" component={Template(UsersStore)} redirect="/login" />
						<Private path="/usuarios" component={Template(Users)} redirect="/login" />

						<Private path="/" component={Index} redirect="/login" />
						<Route path="*"><NoMatch /></Route>
					</Switch>
				</BrowserRouter>
			</ContextProvider>
		</>
	)
}

export default App