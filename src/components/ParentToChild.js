import React from 'react';

const ParentToChild = ({ message }) => {
    return (
        <div>
            <p>This is the message in the Child: {message}</p>
        </div>
    );
}

export default ParentToChild
