import React, { useContext } from 'react';
import UserItem from './UserItem';
import { Spinner } from '../Layout/Spinner';
import propTypes from 'prop-types';
import GithubContext from '../../Context/Github/GithubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { users, loading } = githubContext;

  if (loading) return <Spinner />;
  else
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
};

// Users.propTypes = {
//   users: propTypes.array.isRequired,
//   loading: propTypes.bool.isRequired,
// };

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '1rem',
};

export default Users;
