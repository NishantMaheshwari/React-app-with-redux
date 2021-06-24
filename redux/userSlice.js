import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'users',
    initialState:[
        {
            sno:0,
            name:"Nishant Maheshwari",
            age:19
          },
          {
           sno:1,
           name:"Aman Jain",
           age:13
         },
         {
           sno:2,
           name:"Ritik Gupta",
           age:21
         }
    ],
    reducers:{
        adduser:(state,action)=>{
            const newuser={
                sno : state.length,
                name : action.payload.name,
                age : action.payload.age,
            };
            state.push(newuser);
        },
        deleteuser:(state,action)=>{
            return state.filter((user)=> user.sno!==action.payload.sno);
        },
        edituser:(state,action)=>{
           const update = state.map((curr)=>{
                if(curr.sno===action.payload.sno){
                  curr.name=action.payload.editname;
                }
              })
            state = update;
        },
        searchuser:(state,action)=>{
          if(action.payload.s_term!==""){
          //  console.log(action.payload.s_term);
            return state.filter((user)=> user.name.toLowerCase().includes(action.payload.s_term.toLowerCase()));
            
          }
        }
    }
})

export const {adduser,deleteuser,edituser,searchuser} =userSlice.actions;
export default userSlice.reducer;