import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { handlePowerBiReports } from 'services/api/powerbi'
import { handleReportsByUserWithCard } from 'services/api/reports'
import { getUser } from 'services/auth'
import TitleBar from 'components/TitleBar'
import Content from 'components/Content'
import Card from 'components/Card'
import CardTitle from 'components/CardTitle'
import Table from 'components/Table'
import SmLinkYellow from 'components/Button/SmLinkYellow'
import Container from 'components/Container'
import ReportCard from 'components/ReportCard'
import { FaChartArea } from "react-icons/fa"

const Page = () => {

  const params = useParams()
  const [data, setData] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    new Promise(resolve => resolve(getUser()))
      .then(res => {
        setUser(res.data)
        return res
      })
      .then(async res => {
        if (res.data.roles === 'admin') {
          setData(await handlePowerBiReports(params.group_id))
        }
        if (res.data.roles === 'user') {
          const reportsUser = await handleReportsByUserWithCard(res.data.id)
          setData(reportsUser)
        }
      })
  }, [params.group_id])

  const breadcrumb = [
    { path: '/grupos', label: 'Index' }
  ]

  return (
    <>
      <TitleBar label="Relatórios" currentPage="" />
      <Content>
        <Card>
          <CardTitle title="Meus Relatórios" />
          {user.roles === 'admin' ?
            <Table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th width="50">Ações</th>
                </tr>
              </thead>
              <tbody>
                {data.map(item =>
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>
                      <SmLinkYellow to={`/grupos/${params.group_id}/relatorios/${item.id}/datasets/${item.datasetId}`}>
                        <FaChartArea />
                      </SmLinkYellow>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table> :
            <Container>
              {data.map(item => <ReportCard key={item.id} name={item.card_name} fileUrl={item.file_url} linkTo={`/grupos/${item.group_id}/relatorios/${item.report_id}/datasets/${item.dataset_id}`} />)}
            </Container>
          }
        </Card>
      </Content>
    </>
  )
}

export default Page