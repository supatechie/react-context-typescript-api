import React, { createContext, useContext, useReducer } from 'react'
import { userInitialState } from '../states/user.state'
import UserReducer from '../reducer/UserReducer'
import { IUserState } from '../interfaces/user.interface'
import { UserDispatchAction } from '../actions/user.actions'

export const UserContext = createContext<{userState: IUserState, userDispatch: UserDispatchAction }>({userState: userInitialState,userDispatch: () => undefined})

const UserProvider = ({children}: any) => {
    const [userState, userDispatch] = useReducer(UserReducer, userInitialState)
    return (
        <UserContext.Provider value={{userState,userDispatch}}>
            {children}
        </UserContext.Provider> 
    )
}
/**
 * returns todoDispatch & the current state
 */
export const useUserContext = () => useContext(UserContext)

export default UserProvider

