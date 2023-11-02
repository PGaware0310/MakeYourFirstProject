import React,{useState} from "react";
import Users from "./components/Users/Users";
import UserList from "./components/Users/UserList";

function App() {
  const [userList,setUserLists]=useState([]);

    const addUserListHandler=(uName,uAge)=>{
        setUserLists((previousList)=>{
            return[...previousList,{name:uName,age:uAge,id:Math.random().toString()}];
        });
    };
  return (
    <div>
      <Users onSaveUser={addUserListHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
