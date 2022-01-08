import { useReducer } from 'react';
import GithubContext from './GithubContext';
import GithubReducer from './GithubReducer';
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS } from '../Types';
import axios from 'axios';

const GithubState = (props) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(
      `http://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  const clearUsers = async (text) => {
    setLoading();

    dispatch({
      type: CLEAR_USERS,
      payload: [],
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
