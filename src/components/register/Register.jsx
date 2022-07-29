import './register.css'

export default function Register() {
  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>Social</h3>
          <span className='loginDesc'>Connect with your friends and the world around you on Social.</span>
        </div>
        <div className='loginRight'>
          <div className='loginBox'>
            <input type='text' className='loginInput' placeholder='Username' />
            <input type='text' className='loginInput' placeholder='Email' />
            <input type='text' className='loginInput' placeholder='Password' />
            <input type='text' className='loginInput' placeholder='Password Again' />
            <button className='loginButton'>Sign Up</button>
            <button className='loginRegisterButton'>Log Into Your Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
