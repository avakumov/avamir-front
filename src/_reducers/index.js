import { combineReducers } from 'redux'

import { authentication } from './authentication.reducer'
import { users } from './users.reducer'
import { tasks } from './tasks.reducer'
import { alert } from './alert.reducer'
import { books } from './books.reducer'

const rootReducer = combineReducers({
    authentication,
    users,
    alert,
    tasks,
    books
})

export default rootReducer
