import React, { useState } from 'react';

import './../../App.css';

function Counter() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState("today");

  return (
    <div>
      <p>You clicked {count} times {date}</p>
      <button onClick={() => setCount(count + 1)}>
        Count Up
      </button>
      <button onClick={() => setCount(count - 1)}>
        Count Down
      </button>
      <button onClick={() => setDate("today")}>
        Today
      </button>
      <button onClick={() => setDate("tomorrow")}>
        Tomorrow
      </button>
    </div>
  );
}

export default Counter;
