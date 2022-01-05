import './App.css';
import Navbar from './Components/Layout/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Users from './Components/Users/Users';
import Search from './Components/Users/Search';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const res = await axios.get(
      `http://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data);
    setLoading(false);
  }, []);

  const searchUsers = async (text) => {
    setLoading(true);
    const res = await axios.get(
      `http://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
    useEffect();
  };

  return (
    <div>
      <Navbar title='Github Finder' />
      <Search clearUsers={clearUsers} searchUsers={searchUsers} />
      <div className='container'>
        <Users loading={loading} users={users} />
      </div>
    </div>
  );
};

export default App;
