import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const userResponse = await fetch('https://jsonplaceholder.typicode.com/users');
          const userData = await userResponse.json();
          setUsers(userData);
          setLoading(false);
        } catch (error) {
          setError('Failed to fetch data');
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) {
      return <p className="App" >Loading...</p>;
    }
  
    if (error) {
      return <p>{error}</p>;
    }
  
    return (
      <div className="App">
        {console.log(users)}
        <div className='usercard'><h1>Users</h1></div>
        {users.map((user) => (
          <Link to={`/user/${user.id}`} key={user.id} >
            <div className='usercard'>
              {user.name}
            </div>
          </Link>
      ))}
      </div>
    )
}
