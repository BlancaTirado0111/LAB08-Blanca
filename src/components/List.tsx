import React from 'react';


type BuyList = string[];

const List: React.FC = () => {
  
  const buyList: BuyList = [
    'Controller',
    'Bread',
    'Water',
    'Notebook',
    'Math Book',
    'Choco Bar',
    'Milk'
  ];

  return (
    <div>
      <h2>Compras de la semana</h2>
      <ul>
        {buyList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
