import React from 'react'
import { signInWithGooglePopup } from '../firebase.utils'

const FirebaseLoginWithPopup = () => {
  const loginWithGooglePopup = async () => {
    const response = await signInWithGooglePopup();
    console.log('signInWithGooglePopup response:')
    console.log(response);
  }

  return (
    <div>
      <h1>Login w/ Google Popup</h1>
      <button onClick={loginWithGooglePopup}>Login w/ Google Popup</button>    
    </div>
  )
}

export default FirebaseLoginWithPopup
