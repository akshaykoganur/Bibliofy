import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

function Register() {
    const onFinish = async (values) => {
        
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
        }
    };
    return (
        <div className="authentication">
            <div className="authentication-form card p-2">
                <h1 className='card-title'>Register</h1>
                <Form layout='vertical' onFinish={onFinish}>
                    <Form.Item label='Name' name='name'>
                        <Input placeholder='Name' />
                    </Form.Item>
                    <Form.Item label='Email' name='email'>
                        <Input placeholder='Email' />
                    </Form.Item>
                    <Form.Item label='Password' name='password'>
                        <Input placeholder='Password' type='password' />
                    </Form.Item>
                    <Button className='primary-button mt-2 mb-2' htmlType='submit'>REGISTER</Button>
                    <Link to='/login' className='anchor'>Click Here to Login</Link>
                </Form>
                
            </div>
        </div>
    )
}

export default Register;