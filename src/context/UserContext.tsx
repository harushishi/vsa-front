import * as React from 'react';
import { TUserContext } from '../api/types';
import { TUser } from "../api/types"
import { getUser } from "../api/utils"

const UserContext = React.createContext<TUserContext | null>(null)

const INITIAL_STATE = getUser()

interface props {
    children: JSX.Element | JSX.Element[]
}

export const useUser = () => {
    const context = React.useContext(UserContext)
    if (!context) {
        throw new Error('user error')
    }
    return context
}

export const UserContextProvider = ({ children }: props) => {

    const [user, setUser] = React.useState<TUser>(INITIAL_STATE)

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext };