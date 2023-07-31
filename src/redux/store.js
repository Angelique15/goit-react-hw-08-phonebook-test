import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './auth/authSlice';
import contactsReducer from './contacts/contactsSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    contacts: contactsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;




