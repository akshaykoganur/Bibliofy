/*import { Form , Input, Button } from 'antd'
import { Link, NavigationType, useNavigate } from 'react-router-dom'
import {React, useState} from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';

function Signin() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email:"", password:""
    })
    const onFinish = async (values) => {
        
        /*try {
            const response = await axios.post('/api/user/login', values);
            if (response.data.success) {
                toast.success(response.data.message);
                toast("Redirecting to home page");
                localStorage.setItem("token", response.data.token);
                navigate("/");
                console.log(localStorage.getItem("token"));
            }
            else {
                toast.error(response.data.message);
            }
        } catch (error) {
          console.log(error);
            toast.error('Something went wrong');
        }
    };
        
        const {email, password} = user;
        const res = await fetch("http://localhost:5000/api/user/login", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });

        const data = await res.json();

        if(data.status===500 || !data){
            console.log("Unsuccessful");
            toast("Login Unsuccessful!!");
        }
        else{
            console.log("Successful");
            localStorage.setItem("token", data);
            localStorage.setItem("userEmail", email);
            toast("Login Successful!");
            navigate("/");
        }
    };
    let nam, value;
    const changed = async(e) => {
        nam = e.target.name;
        value = e.target.value;
        setUser({...user, [nam]:value});
    };
    return (
      <div className="authentication">
            <div className="authentication-form card p-2">
                <h1 className='card-title'>LOGIN</h1>
                <Form layout='vertical' onFinish={onFinish}>
                    <Form.Item label='Email' >
                        <Input placeholder='Email'/>
                    </Form.Item>
                    <Form.Item label='Password'>
                        <Input placeholder='Password' type='password'/>
                    </Form.Item>
                    <Button className='primary-button mt-2 mb-2' htmlType='submit'>Login</Button>
                    <Link to='/register' className='anchor'>Click Here to Register</Link>
                </Form>

            </div>
      </div>
    )
    }*/

import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signin() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      const response = await axios.post("http://localhost:5000/api/user/login", values);
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.data);
        localStorage.setItem("userEmail", credentials.email);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h1 className="card-title">Welcome Back</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" name='email' value={credentials.email} onChange={onChange}/>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="Password" type="password" name='password' value={credentials.password} onChange={onChange}/>
          </Form.Item>

          
          <Button className="primary-button my-2 full-width-button" htmlType="submit">
            LOGIN
          </Button>

          <Link to="/register" className="anchor mt-2">
            CLICK HERE TO REGISTER
          </Link>
         
        </Form>
      </div>
    </div>
  );
}

export default Signin