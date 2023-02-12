import {React, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function Register() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        name:"", email:"", password:""
    })
    const onFinish = async (e) => {
        /*
        try {
            const response = await axios.post('/api/user/register', values);
            if (response.data.success) {
                toast.success(response.data.message);
            }
            else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error('Something went wrong');
        }*/
        const {name, email, password} = user;
        const res = await fetch("http://localhost:5000/api/user/register", {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password
            })
        });

        const data = await res.json();

        if(data.status===500 || !data){
            console.log("Unsuccessful");
            toast("Register Unsuccessful!!");
        }
        else{
            console.log("Successful");
            toast("Register Successful!!");
            navigate("/login");
        }
    };
    let nam, value;
    const changed = async(e) => {
        nam = e.target.name;
        value = e.target.value;
        setUser({...user, [nam]:value});
    }
    return (
        <div className="authentication">
            <div className="authentication-form card p-2">
                <h1 className='card-title'>Register</h1>
                <Form method="POST" layout='vertical' onFinish={onFinish}>
                    <Form.Item label='Name' >
                        <Input name='name' placeholder='Name' value={user.name} onChange={changed}/>
                    </Form.Item>
                    <Form.Item label='Email'>
                        <Input name='email' placeholder='Email' value={user.email} onChange={changed}/>
                    </Form.Item>
                    <Form.Item label='Password'>
                        <Input name='password' placeholder='Password' type='password' value={user.password} onChange={changed}/>
                    </Form.Item>
                    <Button className='primary-button mt-2 mb-2' htmlType='submit'>REGISTER</Button>
                    <Link to='/login' className='anchor'>Click Here to Login</Link>
                </Form>
                
            </div>
        </div>
    )
}

export default Register;