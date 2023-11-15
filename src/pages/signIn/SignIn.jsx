import React, { useState } from 'react'
import "./SignIn.css"
import TextField from '@mui/material/TextField';
import { signin } from '../../service/UserService';
import {useNavigate} from "react-router-dom";
import { responsiveFontSizes } from '@mui/material';

const EmailRegex = new RegExp('[A-Za-z0-9._:$!%-]+@[A-Za-z0-9.-]+.[a-zA-Z]$');
const PasswordRegex = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$');


function SignIn() {
  const navigate = useNavigate();

  const [data , setdata] = useState({
            email : '',
            password :''

  });

  const [regexvalue,setRegexValue] = useState({
            emailbox : false,
            printmsg : '',
            passwordbox : false,
            printmessage : ''
  })

  const changeValue = {
      changeEmail : (event) =>{
    //console.log(event)
      setdata(prestate => (
        {
          ...prestate,
          email:event.target.value
        }

      ))
      },

      changePassword : (event) =>
      setdata(prestate => (
        {
          ...prestate,
          password:event.target.value
        }
      ))
  }

  console.log(data)

  const validate = () => {
    let validateEmail = EmailRegex.test(data.email)
    if(validateEmail === false){
      setRegexValue(prestate => (
        {
        ...prestate,
          emailbox : true,
          printmsg : 'Email is InValid'
      }))  
    }

    let validatePassword = PasswordRegex.test(data.password)
    if(validatePassword === false){
      setRegexValue(prestate => (
        {
          ...prestate,
          passwordbox : true,
          printmessage : 'Password is not Valid'
        }
      ))
    }

    if(validateEmail === true && validatePassword === true){
      signin(data).then((result) => {
        console.log(result)
        localStorage.setItem("Token", result.data.data);
        // result.status(200).json({
        //   token : data
        // });
        navigate("/DashBoard")
        
      })
       // let response = await signin(data)
      console.log(regexvalue)
    }

  }

  return (
    <div className="form">
    <div className="main-container">
    <div className="login-container">
        <div className="name">
        <p className="a"><b>G</b></p>
        <p className="b"><b>o</b></p>
        <p className="c"><b>o</b></p>
        <p className="d"><b>g</b></p>
        <p className="e"><b>l</b></p>
        <p className="f"><b>e</b></p>
        </div>
        <b>Login</b>
        <p>Use your Google Account</p>
        <div><TextField id="outlined-basic" label="Email or phone*" variant="outlined" onChange={changeValue.changeEmail} error={regexvalue.emailbox} helperText={regexvalue.printmsg}/></div><br/>
        <div><TextField id="outlined" label="Password*" variant="outlined" onChange={changeValue.changePassword} error={regexvalue.passwordbox} helperText={regexvalue.printmessage}/></div>
        <div id="password">forgot Password?</div>    
            <div className="text">Create Account 
                <button className="loginButton" onClick={validate}>Login</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SignIn

// import React, { Component } from 'react'

// export class SignIn extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
         
//       }
//     }
    
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

// export default SignIn

