import React, {useState} from 'react'

const Login = () => {
const [isSignIn , setIsSignIn] = useState(false);
const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
}
  return (
    <div>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_small.jpg' alt='bckgroundImg'/>
        </div>
        <div className= 'relative top-28 mx-auto w-3/12'>
            <form className='flex align-middle flex-col justify-between p-8 bg-black text-white bg-opacity-80'>
                <h1 className='text-left text-3xl font-bold my-5'>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
                {
                   !isSignIn && <input type='text' placeholder='Full Name' className='p-3 my-4 bg-gray-800 rounded-sm'></input>
                }
                <input type='text' placeholder='Email or Mobile Number' className='p-3 my-4 bg-gray-800 rounded-sm'></input>
                <input type='password' placeholder='Enter Password' className='p-3 my-4 bg-gray-800 rounded-sm'></input>
                <button type='submit' className='p-3 my-4 bg-red-700 rounded-sm'>Sign In</button>
                <p className='text-left cursor-pointer' onClick={toggleSignIn}>{isSignIn ? 'New to Netflix? SignUp' : 'Already a Member ? Sign In'}</p>
            </form>
        </div>
    </div>
  );
}

export default Login;