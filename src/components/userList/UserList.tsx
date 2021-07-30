import { Fragment } from "react"
import { Table } from "reactstrap"
import {IUser, IUserState} from '../../interfaces/user.interface'

interface IDataProps{
    data: IUserState['users']
}

const UserList: React.FC<IDataProps> = ({data}) =>{
    return (
        <Fragment>
            <Table bordered responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user: IUser) =>(
                        <tr key={user.id} data-testid={`user-item-${user.id}`}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>@{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </Table>
        </Fragment>
    )
}

export default UserList