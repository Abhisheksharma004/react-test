import React,{useContext} from 'react';
import UserContext from '../context/UserContext';

function Profile() {
  
    const {user} = useContext(UserContext);

    if (!user) return <div>Please Login</div>;
    console.log(user);
    
    return <div>Welcome : Your User {user.username} and Password {user.password}</div>;
}

export default Profile;
