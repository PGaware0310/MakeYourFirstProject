import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import classes from "./Users.module.css";
import ErrorHandle from "./ErrorHandle";

const Users = (props) => {
  const [users, setUsers] = useState("");
  const [age, setAge] = useState("");
  const[handleError,setHandleError]=useState(true);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(users.trim().length===0 || age.trim().length===0){
      setHandleError({
        title:'Invalid Input',
        msg:'Please enter valid name and age(non-empty values)'
      })
      return;
    }
    if(+age<1){
      setHandleError({
        title:'Invalid age',
        msg:'Please enter valid age(>0)'
      })
     return;
    }
props.onSaveUser(users,age);
setUsers("");
setAge("");
    console.log(users, age);
  };

  const onUserNameChange = (e) => {
    setUsers(e.target.value);
  };

  const onUserAgeHandler = (e) => {
    setAge(e.target.value);
  };

 const errorHandler=()=>{
  setHandleError(null);
 };

  return (
    <div>
    {handleError && <ErrorHandle title={handleError.title} message={handleError.msg} onErrorHandler={errorHandler}/>}
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div>
        <label className={classes.label}>UserName</label>
        <br />
        <input
          className={classes.input}
          type="text"
          onChange={onUserNameChange}
          value={users}
        />
        <br />
      </div>
      <div>
        <label className={classes.label}>Age(Years)</label>
        <br />
        <input
          className={classes.input}
          type="number"
          value={age}
          onChange={onUserAgeHandler}
        />
        <br />
      </div>
      <br />
      <div>
        <Button>Add User</Button>
      </div>
    </form>
    </div>
  );
};

export default Users;
