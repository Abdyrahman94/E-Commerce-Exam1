import React, { useState } from 'react'
import Arrow from '../../assets/ArrowRight.svg'
import Input from './Input';

type Login = {
    onSwitch: () => void
}

function Login({ onSwitch }: Login) {

    const [data, setData] = useState({
        email: '',
        password: '',
    })
    const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setData({ ...data, [name]: value })
    }

    const sendData = () => {
        console.table(data)
    }

    return (
        <div className='relative'>
            <div className='text-center mb-3 font-semibold text-xl text-gray-800'>
                Sign in to your account
            </div>
            <Input name="email" value={data.email} onChange={handleData} label="Email adres" type="email" />
            <Input name="password" value={data.password} onChange={handleData} label="Açar söz" type="password" />
            <button onClick={sendData} className='bg-orange-500 text-white w-full mt-2 py-3 relative font-semibold'>
                LOGIN
                <img className='absolute top-3.5 right-26' src={Arrow} alt="" />
            </button>
            <div className='relative flex justify-center mt-5'>
                <div className='absolute top-3.5 border-b border-gray-300 w-full'></div>
                <div className='z-10 bg-white px-2 text-gray-400'>Don't have a account</div>
            </div>
            <button onClick={onSwitch} className='text-orange-500 border hover:bg-orange-500 hover:text-white transition-all border-orange-200 w-full py-3 mt-3'>
                CREATE ACCOUNT
            </button>
        </div>
    )
}

export default Login