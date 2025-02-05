import React from 'react'//REQUIRED FOR DEFINING REACT COMPONENT AND LIBRARIES
import 'antd/dist/reset.css'//ENSURE STYLES ARE APPLIED CONSISTELY 
 import './style.css'


import { Form, Input, Button, Checkbox } from 'antd';//IMPORT UI COMPONENTS FROM ANT DESIGN
import { UserOutlined, LockOutlined } from '@ant-design/icons';//IMPORT ICONS USED IN THE FIELD


export default function LoginTemp() {//EXPORTS THE LOGINTEMP FUNCT SO IT CAN BE USED IN OTHER FILES
  const onFinish = async (values) => {//FUNCTION EXCUTED WHEN THE FORM IS SUBMITTED ASYNC FUNCTION TO HANDLE ASYNCHRONOS OPERATION
    const { username, password } = values; //THE CONTAIN OF DB
  
    try {
      const response = await fetch('http://localhost:3001/validatePassword', {//USE FETCH TO SEND A POST REQUEST TO THE LOCAL HOST
        method: 'POST',
        headers: {// SPECIFIES CONTENT TYPE
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),//CONVERT THE USER NAME N PASSWORD TO JSON STRING (USED FOR SENDING N RECIEVING DATA FROM THE WEB)
      });
  
      if (!response.ok) {//BACKEND
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();//PARSES THE JSON RESPONSE FROM THE SERVER
  
      if (data.validation) {//VALIDATION

        alert('Your password is correct, thank you!');
      } else {
        alert('Your password is incorrect, please try again.');
      }
    
    } catch (error) {//CATCHING NETWORK ERRORS
      console.error('Error:', error);

      alert('Network error. Please try again later.');
    }
  };
    // const onFinish = values =>{
    //   const {username , password} = values 
    //   axios.post('http://localhost:3001/validatePassword',{username,password})
    //   .then(res=>{
    //     if(res.data.validation){
    //       alert('your password is correct ,thank you')

    //     }
    //     else{
    //       alert('your password is incorrect,plz try again')
    //     }
    //   })

    // }
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>

      <div style={{width:500}}>

         <h1 style={{textAlign:'center'}}>LOGIN FORM</h1> {/*LOGIN HEADING IN CENTER */}
         <Form
      name="normal_login"   
      // ASSIGNING THE NAME TO THE FORM
      className="login-form"
      initialValues={{
        remember: true,//set the value of remember me to true
      }}
      onFinish={onFinish} 

    //calls on finish when the form is submitted
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}


      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        {/* add a user icon to the user name field */}
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please enter your Password!',
          },
        ]}
      >


        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"//to be encrypted
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          {/* checkbox is a button list allow u to choose only one choice */}
          <Checkbox>Remember me</Checkbox>
         </Form.Item>

        
      </Form.Item> 

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          {/* use ant design primary button style */}
          Log in
        </Button>
        
      </Form.Item>
    </Form>
  </div>
      
    </div>
  )
}
