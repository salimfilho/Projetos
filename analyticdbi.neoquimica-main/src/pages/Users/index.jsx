import { useEffect, useState } from 'react'
import { handleUsers } from 'services/api/users'
import { getUser } from 'services/auth'
import Component from './Component'

const Page = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        new Promise(resolve => resolve(getUser()))
            .then(async res => setData(await handleUsers(res.data.firm_id)))
    }, [])

    return <Component data={data} />
}

export default Page