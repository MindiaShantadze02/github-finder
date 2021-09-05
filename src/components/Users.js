import React, { useContext } from 'react';
import UserItem from './UserItem.js'
import Loading from "./Loading.js"
import GithubContext from '../context/github/githubContext';
const Users = () => {
        const { loading , users } = useContext(GithubContext);
        
        if (loading) {
            return <Loading />
        }
        else 
        return (
            <div className="users-section">
                {users.length === 0 && (
                    <div style={{display:"flex",justifyContent:"center",marginTop:"150px"}}>
                        <h2>Users list is empty</h2>
                    </div>
                    )}
                
                <div className='users'>{users.map(user =>(
                    <UserItem key={user.id} user={user} />
                ))}
                </div>
            </div>
        )
}

export default Users;
