import { legacy_createStore as createStore } from "redux";
import UsersReducer from '../Reducers/usersReducer'


const Store = createStore(UsersReducer)

export default Store