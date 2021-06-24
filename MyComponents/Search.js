import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {searchuser} from "../redux/userSlice";

export default function Search() {
    const [s_term, sets_term] = useState("");

    const dispatch=useDispatch();

    const submit = (e)=>{
        e.preventDefault();
        if(!s_term){
            alert("Name required");
        }
        dispatch(searchuser(
          {s_term : s_term}
          ));
        sets_term("");
        }
     

  return (
    <div>
      <form onSubmit={submit}>
        <div className="mb-3">
          <div className="text-center">
            <input type="text" className="prompt" placeholder="Search Name" value={s_term} onChange={(e)=>{sets_term(e.target.value)}}/>
          </div>
        </div>
        <div className="mb-3">
          <div className="text-center">
            <button type="submit" className="btn btn-sm btn-primary" >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
