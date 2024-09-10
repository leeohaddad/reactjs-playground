import React, { useState } from 'react'
import { signInWithFirebaseEmailAndPassword } from '../firebase.utils'

const FirebaseLoginWithEmailAndPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginWithFirebaseEmailAndPassword = async () => {
    const response = await signInWithFirebaseEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert(`User ${user.email} logged in successfully`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`error #${errorCode}: "${errorMessage}"`);
      });
    console.log('signInWithFirebaseEmailAndPassword response:')
    console.log(response);
  }

  return (
    <div>
      <h1>Login w/ Google Email And Password</h1>
      <table>
        <tbody>
          <tr>
            <td>
              Email
            </td>
            <td>
              <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </td>
          </tr>
          <tr>
            <td>
              Password
            </td>
            <td>
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="button" onClick={loginWithFirebaseEmailAndPassword}>Login w/ Google Email And Password</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default FirebaseLoginWithEmailAndPassword
