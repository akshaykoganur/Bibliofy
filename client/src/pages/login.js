import { Form , Input, Button } from 'antd'
import { Link, NavigationType, useNavigate } from 'react-router-dom'
import React from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';

function login() {
    //const navigate = useNavigate();
    const onFinish = async (values) => {
        
        try {
            const response = await axios.post('/api/user/login', values);
            if (response.data.success) {
                toast.success(response.data.message);
                toast("Redirecting to home page");
                localStorage.setItem("token", response.data.token);
                //navigate("/");
            }
            else {
                toast.error(response.data.message);
            }
        } catch (error) {
          console.log(error);
            toast.error('Something went wrong');
        }
    };
    return (
      <div className="authentication">
            <div className="authentication-form card p-2">
                <h1 className='card-title'>LOGIN</h1>
                <Form layout='vertical' onFinish={onFinish}>
                    <Form.Item label='Email' name='email'>
                        <Input placeholder='Email' />
                    </Form.Item>
                    <Form.Item label='Password' name='password'>
                        <Input placeholder='Password' type='password'/>
                    </Form.Item>
                    <Button className='primary-button mt-2 mb-2' htmlType='submit'>Login</Button>
                    <Link to='/register' className='anchor'>Click Here to Register</Link>
                </Form>

            </div>
      </div>
    )
}

export default login