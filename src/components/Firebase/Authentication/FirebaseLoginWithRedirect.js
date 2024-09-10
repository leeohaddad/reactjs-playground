import React from 'react'
import { signInWithGoogleRedirect } from '../firebase.utils'

const FirebaseLoginWithRedirect = () => {
  const loginWithGoogleRedirect = async () => {
    const response = await signInWithGoogleRedirect();
    console.log('signInWithGoogleRedirect response:')
    console.log(response);
  }

  return (
    <div>
      <h1>Login w/ Google Redirect</h1>
      <button onClick={loginWithGoogleRedirect}>Login w/ Google Redirect</button>    
    </div>
  )
}

export default FirebaseLoginWithRedirect
