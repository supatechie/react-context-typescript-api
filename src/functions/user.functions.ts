import axios, {AxiosResponse} from 'axios'
import { UserActions, UserDispatchAction } from '../actions/user.actions'
import { IResponse } from '../interfaces/user.interface'


export const apiUrl = "https://jsonplaceholder.typicode.com"

export const getUsers = async(dispatch: UserDispatchAction): Promise<IResponse> =>{
    try {
        const result: AxiosResponse = await axios.get(`${apiUrl}/users`)
        const data: IResponse['data'] = result.data
        dispatch({type: UserActions.GET_USERS,payload: data})
        return {data, error: false, message: "Users fetched success" }
    } catch (error) {
        return {data: [], error: true, message: "Users fetched success" }
    }
}