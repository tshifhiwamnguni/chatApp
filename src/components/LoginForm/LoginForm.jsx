import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./LoginForm.module.scss";
import { login } from "../../services/auth";

function LoginForm() {
  const navigate = useNavigate();

  const form = useRef();
  function go(e) {
    e.preventDefault();
    let body ={
    name: form.current.name.value,
    password: form.current.password.value
  }
    login(body).then(
      (data)=>{
        console.log(data);
        if(data.data){
          navigate('/contacts')
        }
        else{

          console.log('incorrect details');
        }
      }
    )
  }
  
  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <div className={classes.formGroup}>
          <form  ref= {form} >
            <label htmlFor="">name</label>
            <input type="text" name="name" />
            <label htmlFor="">code</label>
            <input type="text" name="password" />
            <button type="" onClick={go}>go</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
