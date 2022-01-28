import { createContext, useState } from 'react'

export const Context = createContext()

const ContextProvider = ({ children }) => {

    const [toggle, setToggle] = useState(true)
    const [user, setUser] = useState({})

    return (
        <Context.Provider value={{ toggle, setToggle, user, setUser }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider