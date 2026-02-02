import { useState } from 'react';
import Arrow from '../../assets/ArrowRight.svg'
import Input from './Input';

type Register = {
  onSwitch: () => void;
}

function Register({ onSwitch }: Register) {
  const [data, setData] = useState({
    email: '',
    password: '',
    passwordConfirmed: '',
  })

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setData({ ...data, [name]: value })
  }

  const sendData = () => {
    console.table(data)
  }

  return (
    <div>
      <div className='text-center mb-3 font-semibold text-xl text-gray-800'>
        Sign up to your account
      </div>
      <Input value={data.email} onChange={handleData} label="Email adresiniz" type="email" name='email' />
      <Input value={data.password} onChange={handleData} label="Açar söz" type="password" name='password' />
      <Input value={data.passwordConfirmed} onChange={handleData} label="Açar sözi tassykla" type="password" name='passwordConfirmed' />
      <button onClick={sendData} className='bg-orange-500 text-white w-full mt-2 py-3 relative font-semibold'>
        REGISTER
        <img className='absolute top-3.5 right-23' src={Arrow} alt="" />
      </button>
      <div className='relative flex justify-center mt-3'>
        <div className='absolute top-3.5 border-b border-gray-300 w-full'></div>
        <div className='z-10 bg-white px-2 text-gray-400'>Do have a account</div>
      </div>
      <button onClick={onSwitch} className='text-orange-500 border hover:bg-orange-500 hover:text-white transition-all border-orange-200 w-full py-3 mt-3'>
        LOGIN
      </button>
    </div>
  )
}

export default Register