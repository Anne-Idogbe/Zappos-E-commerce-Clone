import React, { useState, useEffect } from 'react';

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [localUser, setLocalUser] = useState(null);

  // Fetch users from local storage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setLocalUser(JSON.parse(storedUser)); // Parse and set users from local storage
    }
  }, []);

  // Fetch users from API if not available in local storage
  useEffect(() => {
    if(!localUser){
      const fetchUsers = async () => {
        try {
          const response = await fetch('http://ecommerce.reworkstaging.name.ng/v2/users', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
  
          const data = await response.json();
          if (data.users) {
            setUsers(data.users); // Set users from API
            // localStorage.setItem('user', JSON.stringify(data.users)); // Store users in local storage
          } else {
            setUsers([]); // No users found
          }
        } catch (error) {
          console.error('Error fetching users:', error);
          setUsers([]); // Set users to empty array on error
        }
      }; 
      fetchUsers();


    }
    
  }, [localUser]);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Customers Information</h2>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {/* render user from local storage if it exists */}
        {localUser ?(
          <div className='bg-white p-4 shadow rounded-lg'> 
          <h2 className='text-lg font-semibold'>
            {localUser.first_name} {localUser.last_name}
          </h2>
        <p className='text-gray-600'>Email:{localUser.email}</p>
        <p className='text-gray-600'>Phone:{localUser.phone}</p>
          </div>
        ): users.length > 0 ? (
          // render users fetched from Api
          users.map((user) =>(
            <div key={user.id} className='bg-white p-4 shadow rounded-lg'>
              <h2 className='text-lg font-semibold'>
                {user.first_name} {user.last_name}
              </h2>
             <p className='text-gray-600'>Email: {user.email}</p>
             <p className='text-gray-600'>Phone: {user.phone}</p>
            </div>
          ))
           
        ) :(
          <p>No Users found</p>
      
        )}

      </div>
    </div>
  );
};

export default UsersList;
