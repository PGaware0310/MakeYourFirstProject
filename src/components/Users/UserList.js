import React from "react";
import classes from './UserList.module.css';
const UserList=(props)=>{
    

    return(
        <ul className={classes.ul}>     
            {props.users.map((user)=>(
                <li className={classes.li} key={user.id}>
                    {user.name} ({user.age} Years old)
                </li>
            ))}
        </ul>
    );

};

export default UserList;