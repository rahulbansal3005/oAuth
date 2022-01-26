import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users/rahulbansal3005/repos';

// second argument

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getRepos = async () => {
    const response = await fetch(url);
    const repos = await response.json();
    setUsers(repos);
    // console.log(users);
  };

  useEffect(() => {
    getRepos();
  }, []);
  return (
    <>
      <h3>github repos</h3>
      <ul className='users'>
        {users.map((repo) => {
          const { id, name, avatar_url, html_url,created_at } = repo;
          return (
            <li key={id}>
              <img src={avatar_url} alt={name} />
              <div>
                <h4>{name}</h4>
                <a href={html_url}>Repository</a>
                <p>0{created_at}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
