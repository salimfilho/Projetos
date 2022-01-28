import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { handleReportsByUserWithCard } from 'services/api/reports'
import { handleUserShow } from 'services/api/users'
import Component from './Component'

const Page = () => {

    const params = useParams()
    const [data, setData] = useState([])
    const [user, setUser] = useState({})

    useEffect(() => {
        (async () => {
            setData(await handleReportsByUserWithCard(params.id))
            setUser(await handleUserShow(params.id))
        })()
    }, [params.id])

    return <Component data={data} params={params} user={user} />
}

export default Page