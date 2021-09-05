import AlertContext from './alertContext';
import { useReducer } from 'react';
import AlertReducer from './alertReducer';
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types';
const initialState = null;

const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(AlertReducer, initialState);

    const showAlert = (msg,type) => {
        dispatch({type:SET_ALERT,payload:{msg,type}})
        setTimeout(()=>{dispatch({type:REMOVE_ALERT})},2000);
    }

    return (<AlertContext.Provider value={{alert: state,showAlert}}>
        {children}
    </AlertContext.Provider>)
}
export default AlertState;