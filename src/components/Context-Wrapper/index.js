import React, { useState, useEffect, useMemo } from 'react'
import userService from '../../services/user-service'

export const UserContext = React.createContext({})

const ContextWrapper = (props) => {
    const [user, setUser] = useState(null)
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                const user = await userService.auth()
                setUser(user)
            } catch (err) {
                setUser(null)
            }
        })()
    }, [])

    useEffect(() => {
        setIsLogged(!!user)
        setIsAdmin(user && user.role === 'admin' ? true : false)
    }, [user])

    const userStore = useMemo(() => ({
        user,
        setUser,
        isLogged,
        isAdmin
    }), [isAdmin, isLogged, user])

    return (
        <UserContext.Provider value={userStore}>
            {props.children}
        </UserContext.Provider>
    )
}

export default ContextWrapper