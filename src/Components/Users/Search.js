import React, { useState, useContext } from 'react';
import GithubContext from '../../Context/Github/GithubContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const { clearUsers, searchUsers } = githubContext;

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    searchUsers(text);
    setText('');
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      <button onClick={() => clearUsers()} className='btn btn-light btn-block'>
        {' '}
        Clear{' '}
      </button>
    </div>
  );
};

export default Search;
