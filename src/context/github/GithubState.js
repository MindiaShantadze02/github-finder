import React,{ useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    GET_USER,
    SEARCH_USERS,
    CLEAR_USERS,
    SET_LOADING,
    SET_USER
} from '../types';

const REACT_APP_GITHUB_CLIENT_ID='190828e4d200b0232ca3'
const REACT_APP_GITHUB_CLIENT_SECRET='956b279af3acee12a1bf2a6f0beb9f1f81cada91'

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //search users
    const searchUsers =  async (text) => {
        setLoading();
        const res = await axios
        .get(`https://api.github.com/search/users?q=${text}&client_id=${
            process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${
          process.env.REACT_APP_GITHUB_CLIENT_SECRET
        }`)
          dispatch({
              type: SEARCH_USERS,
              payload: res.data.items
          })
      }
    //get user
    const getUser = async (username) => {
        setLoading(true);
    
        const res = await axios.get(
          `https://api.github.com/users/${username}?client_id=${
            process.env.REACT_APP_GITHUB_CLIENT_ID
          }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        );
        setUser(res.data);
      }
    const setUser = (data) => {
        dispatch({
            type: SET_USER,
            payload: data
        })
    }
    //clear users
    const clearUsers = () => {
        dispatch({
            type: CLEAR_USERS
        })
    }
    //set loading
    const setLoading = () => {
        dispatch({
            type: SET_LOADING
        })
    }
    return (<GithubContext.Provider value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser
    }} >
        {props.children}
    </GithubContext.Provider>)
}

export default GithubState;
