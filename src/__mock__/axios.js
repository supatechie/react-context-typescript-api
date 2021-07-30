// import {IUserState} from "../interfaces/user.interface"

// interface mockResType{
//     data: IUserState['users']
// } 

const mockResponse  = {
    data: [
        {
            id: 1,
            name: "John doe",
            email: "john@gmail.com",
            username: "John",
            address: {
                street: "hello world",
                suite: "81 hello world",
                zipcode: "73978",
                geo:{
                    lat: "-8.930",
                    lng: "7.938"
                }
            }
        },
        {
            id: 2,
            name: "janet doe",
            email: "janet@gmail.com",
            username: "janet",
            address: {
                street: "hello world",
                suite: "81 hello world",
                zipcode: "73978",
                geo:{
                    lat: "-8.930",
                    lng: "7.938"
                }
            }
        },
        {
            id: 3,
            name: "Hammer doe",
            email: "Hammer@gmail.com",
            username: "Hammer",
            address: {
                street: "hello world",
                suite: "81 hello world",
                zipcode: "73978",
                geo:{
                    lat: "-8.930",
                    lng: "7.938"
                }
            }
        }
    ]
}

const data = {
    get: jest.fn().mockReturnValue(mockResponse)
}

export default data