import React from 'react'
import { signInWithGooglePopup } from '../Firebase/firebase.utils'

const LoginWithPopup = () => {
  const loginGoogle = async () => {
    const response = await signInWithGooglePopup();
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={loginGoogle}>Login w/ Google Popup</button>    
    </div>
  )
}

export default LoginWithPopup
