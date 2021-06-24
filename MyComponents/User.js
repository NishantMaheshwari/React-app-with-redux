import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteuser,edituser } from '../redux/userSlice';

export default function User({user}) {
    const [editsno, seteditsno] = useState(null);
    const [editname, seteditname] = useState("");

    const dispatch=useDispatch();

    const handledelete=(sno)=>{
         dispatch(deleteuser({sno:sno}));
    }

    const handleedit=()=>{
        dispatch(edituser({
            sno:editsno,
            editname:editname
        }));
        seteditname("");
        seteditsno(null);
    }

    return (
        <div>
            {user.sno===editsno?
            <input type="text" onChange={(e)=>seteditname(e.target.value)} value={editname} />:
            <>
            <h4>{user.name}</h4>
            <p>{user.age}</p>
            </>
            }   
            <button className="btn btn-sm btn-danger" onClick={()=>{handledelete(user.sno)}}>Delete</button>
            {user.sno!==editsno?
            <button className="btn btn-sm btn-primary" onClick={()=>seteditsno(user.sno)}>Edit Name</button>:
            <>
            <button className="btn btn-sm btn-primary" onClick={()=>{handleedit()} }>Submit edit</button>
            </>
            } 
        </div>
    )
}
