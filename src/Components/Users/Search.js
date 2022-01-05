import React, { useState } from 'react';

const Search = (props) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    props.searchUsers(text);
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
      <button
        onClick={() => props.clearUsers()}
        className='btn btn-light btn-block'>
        {' '}
        Clear{' '}
      </button>
    </div>
  );
};

export default Search;
