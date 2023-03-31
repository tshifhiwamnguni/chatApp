import React from "react";
//
import classes from "./LoginPage.module.scss";
import { SiRocketdotchat } from "react-icons/si";
import LoginForm from "../../components/LoginForm/LoginForm";
function LoginPage() {
  return (
    <div className={classes.main}>
      <div className={classes.formDiv}>
        <div>
           <LoginForm/>
        </div>
       
      </div>
    </div>
  );
}

export default LoginPage;
