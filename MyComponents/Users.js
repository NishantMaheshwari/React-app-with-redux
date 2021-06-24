import React from 'react'
import User from "./User";
import { useSelector } from 'react-redux';

export default function Users() {

    const users=useSelector((state)=>state.users); 

    return (
        <div className="container">
            <h3 className="text-center">Info of Different Users</h3>
            {users.length===0?"No Users to Display":
            users.map((user)=>{
                
                return(
                    <>
                     <User user={user} key={user.sno}/> <hr/>
                     </>
                     )
            
            })}
        </div>
    )
}

