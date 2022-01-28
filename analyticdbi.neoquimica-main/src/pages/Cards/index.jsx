import { useEffect, useState } from 'react'
import TitleBar from 'components/TitleBar'
import Content from 'components/Content'
import Card from 'components/Card'
import CardTitle from 'components/CardTitle'
import LinkYellow from 'components/Button/LinkYellow'
import Container from 'components/Container'
import ReportCard from 'components/ReportCard'
import { handleReportCardsByFirm } from 'services/api/reportCards'
import { getUser } from 'services/auth'

const Page = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    new Promise(resolve => resolve(getUser()))
      .then(async res => setData(await handleReportCardsByFirm(res.data.firm_id)))
  }, [])

  return (
    <>
      <TitleBar label="Cards" currentPage="" />
      <Content>
        <Card>
          <CardTitle title="Listagem">
            <LinkYellow to="/cards/cadastrar">Cadastrar</LinkYellow>
          </CardTitle>
          <Container>
            {data.map(item => <ReportCard key={item.id} name={item.name} fileUrl={item.file_url} linkTo={`/cards/${item.id}/editar`} />)}
          </Container>
        </Card>
      </Content>
    </>
  )
}

export default Page
