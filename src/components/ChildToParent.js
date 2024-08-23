import React from 'react';

const ChildToParent = ({ onMessageChange }) => {
    const handleClick = () => {
        let max = 100;
        let min = 1;
        onMessageChange(`Hello there, Droid ${Math.floor(Math.random() * (max - min + 1)) + min}!`);
    };

    return (
        <div>
            <button onClick={handleClick}>Change the parent's message</button>
        </div>
    );
}

export default ChildToParent
