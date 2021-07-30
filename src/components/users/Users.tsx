import React, { useState } from "react"
import { Card, CardBody, CardHeader } from "reactstrap"
import { useUserContext } from "../../context/UserContext"
import { IUserState } from "../../interfaces/user.interface"
import SearchBar from "../search/SearchBar"
import UserList from "../userList/UserList"

const Users = () =>{
    const {userState:{users,totalUsers}} = useUserContext()
    const [searchData, setSearchData] = useState<IUserState['users']>([])
    const [query, setQuery] = useState("")
    console.log(totalUsers,users)
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const query = e.target.value
        setQuery(query.toLowerCase())
        if(query === ""){
            setSearchData([])
        }
        else{
            const filterSet = users.filter(u => u.name.toLowerCase().includes(query) || u.email.toLowerCase().includes(query))
            setSearchData(filterSet)
        }
    }
    /**
     * Show error if no user found
     */
    if(totalUsers === 0){
        return (
            <div className="container">
                <h2 className="text-danger h2 mt-5">Oops, it seems you are offline, please reload this page again!</h2>
            </div>
        )
    }
    /**
     * Display users
     */
    return (
            <div className="container">
                <Card>
                    <CardHeader>
                        <h4 className="user-title">
                            { query === "" ? `We have ${totalUsers} Users`: 
                            `We have ${searchData.length} search results`
                            }
                        </h4>
                    </CardHeader>
                    <SearchBar handleSearch={handleSearch} />
                    <CardBody>
                        <UserList data={query === "" ? users: searchData} />
                    </CardBody>
                </Card>
            </div>
    )
}

export default Users