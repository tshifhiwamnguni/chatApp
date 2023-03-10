import React,{useEffect} from 'react'
import classes from './LandingPage.module.scss'
import {SiRocketdotchat} from 'react-icons/si'
import { useNavigate } from 'react-router-dom'
function LandingPage() {
    const navigate = useNavigate()
useEffect(()=>{
    load()
      clearInterval(load)
})

function load (){
    setTimeout(()=>{
        navigate('/contacts')
        console.log(2);
      },2000)
}

  return (
    <div className={classes.main}>
        <SiRocketdotchat className={classes.icon}/>
    </div>
  )
}

export default LandingPage