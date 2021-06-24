import './App.css';
import Header from "./MyComponents/Header";
import Users from "./MyComponents/Users";
import Footer from "./MyComponents/Footer";
import Adduser from "./MyComponents/Adduser";
import Search from "./MyComponents/Search"
import React, { useState } from 'react';

function App() {

  // const onDelete = (user)=> {
  //   setind_user(ind_user.filter((e)=>{
  //     return e!==user;
  //   }))
  // }

  // const onEdit=(sno,editname,seteditsno,seteditname)=>{
  //     const updatedusers=[ ... ind_user].map((curr)=>{
  //       if(curr.sno===sno){
  //         curr.Name=editname;
  //       //  <h3>Hey there</h3>
  //       }
  //       return curr;
  //     })
  //     setind_user(updatedusers);
  //     seteditsno(null);
  //     seteditname("");
  // }

//    const [searchresults, setsearchresults] = useState([]);

//   const [ind_user, setind_user] = useState([
//    {
//      sno:1,
//      Name:"Nishant Maheshwari",
//      Age:19
//    },
//    {
//     sno:2,
//     Name:"Aman Jain",
//     Age:13
//   },
//   {
//     sno:3,
//     Name:"Ritik Gupta",
//     Age:21
//   }
//  ]);

//  const adduser=(Name,Age)=>{
//    let sno;
//    if(ind_user.length==0) {sno=1;}
//    else {
//     sno=ind_user[ind_user.length-1].sno + 1;
//    }
//    const new_user={
//       sno:sno,
//       Name:Name,
//       Age:Age,
//    }
//    setind_user([...ind_user,new_user]);
//  }

//  const searchuser=(s_term)=>{
//     if(s_term!==""){
//       const new_userlist=ind_user.filter((s)=>{
//         return s.Name.toLowerCase().includes(s_term.toLowerCase());
//       })
//       setind_user(new_userlist);
//     }
//  }

  return (
    <>
    <Header title="My Users List" searchBar={false}/>
    <Adduser/>
    <Search/>
    <Users/>
    <Footer/>
    </>
  );
}

export default App;
