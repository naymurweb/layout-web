import React from 'react';

const Button = ({increment,decrement}) => {
    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            
        </div>
    );
};

export default Button;