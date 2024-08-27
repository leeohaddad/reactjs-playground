import React, { useState } from 'react';

import ParentToChild from './ParentToChild';
import ChildToParent from './ChildToParent';

import './../../App.css';

function BasicDataFlow() {
  const [messageCTP, setMessageCTP] = useState("Initial Parent Message");
  const [messagePTC, setMessagePTC] = useState("Initial Child Message");

  const handleCTPMessageChange = (newMessage) => {
    setMessageCTP(newMessage);
  }

  return (
    <div>
      {/** Examples of how to pass values from child to parent and from parent to child */}
      <ParentToChild message={messagePTC} />
      <button onClick={() => setMessagePTC("Bye Bye")}>
        Change the child message to 'Bye Bye'
      </button>
      <button onClick={() => setMessagePTC("Good Bye")}>
        Change the child message to 'Good Bye'
      </button>

      <p>This is the message in the Parent: {messageCTP}</p>
      <ChildToParent onMessageChange={setMessageCTP} />
      <ChildToParent onMessageChange={handleCTPMessageChange} />
    </div>
  );
}

export default BasicDataFlow;
