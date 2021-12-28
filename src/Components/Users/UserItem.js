import React from 'react';
import propTypes from 'prop-types';

const UserItem = (props) => {
  console.log(props.user);
  return (
    <div className='card text-center'>
      <img src={props.user.avatar_url} className='round-img' alt='loading' />
      <h3>{props.user.login}</h3>

      <div>
        <a href={props.user.html_url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: propTypes.object.isRequired,
};

export default UserItem;
