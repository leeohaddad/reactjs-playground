import React from 'react';

import FirebaseLoginInWithEmailAndPassword from './FirebaseLoginWithEmailAndPassword';
import FirebaseLoginWithPopup from './FirebaseLoginWithPopup';
import FirebaseLoginWithRedirect from './FirebaseLoginWithRedirect';

import './../../../App.css';

function AuthenticationPage() {
  return (
    <div>
      <h1>Authentication</h1>
      <FirebaseLoginInWithEmailAndPassword />
      <FirebaseLoginWithPopup />
      <FirebaseLoginWithRedirect />
    </div>
  );
}

export default AuthenticationPage;
