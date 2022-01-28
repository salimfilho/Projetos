import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { handlePowerBiGroups } from 'services/api/powerbi'
import Component from './Component'

const Page = () => {

    const params = useParams()
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => setData(await handlePowerBiGroups()))()
    }, [])

    return <Component data={data} params={params} />
}

export default Page