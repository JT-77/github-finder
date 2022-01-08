import './App.css';
import Navbar from './Components/Layout/Navbar';
import { useContext } from 'react';
import axios from 'axios';
import Users from './Components/Users/Users';
import Search from './Components/Users/Search';
import GithubState from './Context/Github/GithubState';
import GithubContext from './Context/Github/GithubContext';

const App = () => {
  return (
    <GithubState>
      <Navbar title='Github Finder' />
      <Search />
      <div className='container'>
        <Users />
      </div>
    </GithubState>
  );
};

export default App;
