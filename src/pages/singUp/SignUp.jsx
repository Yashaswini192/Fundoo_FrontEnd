import React, { useState } from 'react'
import "./SignUp.css"
import TextField from '@mui/material/TextField';
import Logo from "../../assets/SignUpLogo.jpeg";

const RegexName = new RegExp('^([A-Z]{1}[a-zA-z]{2,})$');
const RegEmail = new RegExp('/^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/');
const PasswordReg = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$');
//const EmailReg = new RegExp('[A-Za-z0-9._:$!%-]+@[A-Za-z0-9.-]+.[a-zA-Z]$');

export default function SignUp() {

const [value, setvalues] = useState({
            fname : '',
            lname :'',
            userName : '',
            passwrd : '',
            confirmpwd : ''
})

const [regvalue, setRegex] = useState({
          fnamebox : false,
          printNameMsg : '',
          lnamebox : false,
          UsernameBox : false,
          TextMsg : '',
          passwrdBox : false,
          PTextBox : '',
          ConPasswordbox : false,
          Message : ''
          
})

const changeData = {
      alterName : (a) => 

      setvalues(prestate => (
        {
            ...prestate,
            fname : a.target.value,
            lname : a.target.value
      })),
      
      alterUserName : (b) =>
      setvalues(prestate => (
        {
          ...prestate,
          userName : b.target.value
        }
      )),

      alterPassword : (c) => 
      setvalues(prestate => (
        {
          ...prestate,
          passwrd : c.target.value
        }
      )),

      alterConfirmPassword : (d) =>
      setvalues(prestate => (
        {
          ...prestate,
          confirmpwd : d.target.value
        }
      ))         
}

console.log(value)

const validationOfFields = () =>{
  let validatePwd = PasswordReg.test(value.passwrd)
  let validateConfirmPwd = PasswordReg.test(value.confirmpwd)
  if(validatePwd == validateConfirmPwd){
    setRegex(prestate => (
      {
        ...prestate,
        passwrdBox : true,
        ConPasswordbox : true,
        PTextBox : 'Not a Valid Password',
        Message : 'Password doesnt Match'
      }
    ))
  }

  let validatefName = RegexName.test(value.fname)
  let validateLName = RegexName.test(value.lname)
  if(validatefName == false && validateLName == false){
    setRegex(prestate => (
      {
        ...prestate,
        fnamebox : true,
        lnamebox : true,
        printNameMsg : 'Enter a Valid Name'
      }
    ))
  }

  let validateUserName = RegEmail.test(value.userName)
  if(validateUserName == false){
    setRegex(prestate => (
      {
        ...prestate,
        UsernameBox : true,
        TextMsg : 'Enter a Valid User Name'
      }
    ))
  }
  
}


   return (
    <div class="mainContainer">
      
        <div class="signUpContainer">
        <div class="left">
            <div class="title">
                <p class="a"><b>G</b></p>
                <p class="b"><b>O</b></p>
                <p class="c"><b>O</b></p>
                <p class="d"><b>G</b></p>
                <p class="e"><b>L</b></p>
                <p class="f"><b>E</b></p>
            </div>    
            <div class="ltext">Create your Google Account</div><br/>     
            <div class="lnames"><TextField id="loutlined-basic" label="First Name*" variant="outlined" onChange={changeData.alterName} error={regvalue.fnamebox} helperText={regvalue.printNameMsg}/>         
            <TextField id="loutlined-basic" label="Last Name*" variant="outlined" onChange={changeData.alterName} error={regvalue.lnamebox} helperText={regvalue.printNameMsg}/></div> <br/>
            <div><TextField id="loutlined-name" label="User Name*" variant="outlined" onChange={changeData.alterUserName} error={regvalue.UsernameBox} helperText={regvalue.TextMsg}/></div>
            <div class="ldata">you can use letters,numbers & periods </div><br/>
            <div class="ltext2">Use my current email instead</div><br/>
            <div class="lbox"><TextField id="loutlined-password" label="Password*" variant="outlined" onChange={changeData.alterPassword} error={regvalue.passwrdBox} helperText={regvalue.PTextBox}/>
            <TextField id="loutlined-password" label="Confirm Password*" variant="outlined" onChange={changeData.alterConfirmPassword} error={regvalue.ConPasswordbox} helperText={regvalue.Message}/></div>
            <div class="ltexts"> Use 8 or more characters with a mix of letters,numbers & symbols</div><br/>
           <div class="lcheckbox"> <label>
              <input type="checkbox"/>
                Show Password
              </label></div> <br/>
            <div class="lsmalltext">
                SignIn Instead
                <button id="lbutton" onClick={validationOfFields}>Next</button>
            </div>
          </div>
          <div class="right">
          <img src={Logo} width="300vw" height="290vh"/>
          <div class="imagetext">One Account.All of Google working for you</div>
      </div>
        </div>
     

    </div>
  )
}
