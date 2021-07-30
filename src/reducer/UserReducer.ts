import { UserActionType, UserActions } from "../actions/user.actions";
import { IUserState } from "../interfaces/user.interface";

const UserReducer = (state: IUserState,action: UserActionType) => {
    switch (action.type) {
        case UserActions.GET_USERS:
            return {...state,users: [...state.users,...action.payload],totalUsers: action.payload.length, loading: false }
        case UserActions.ERROR:
            return {...state, loading: false }
        default:
            return state;
    }
}

export default UserReducer
