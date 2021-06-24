
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adduser } from '../redux/userSlice';

export default function Adduser() {
 const [Name, setName] = useState("");
 const [Age, setAge] = useState("");

   const dispatch = useDispatch();

 const submit = (e)=>{
    e.preventDefault();
    if(!Name || !Age){
        alert("Name and Age required");
    }
    dispatch(
      adduser({
        name : Name,
        age : Age
      })
    );
    // else{props.adduser(Name,Age);
     setName("");
     setAge("");
    // }
 }

  return (
    <div className="container">
      <h3 className="text-center">Add User</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            value={Name}
            onChange={(e)=>setName(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            value={Age}
            onChange={(e)=>setAge(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}
