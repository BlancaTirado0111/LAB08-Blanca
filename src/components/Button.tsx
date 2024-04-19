import React, { useState } from 'react';

const Button = () => {
  const [value, setValue] = useState(5);

  const handleClick = () => {
    setValue(value + 50);
  };

  return (
    <button onClick={handleClick}>
      {value}
    </button>
  );
};

export default Button;
