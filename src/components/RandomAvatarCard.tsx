import React, { useEffect, useState } from 'react';

const RandomAvatarCard: React.FC = () => {
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    fetch('https://api.minimalavatars.com/avatar/random/png')
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        setAvatarUrl(url);
      });
  }, []);

  return (
    <div style={{ 
      width: '350px', 
      height: '400px', 
      border: '1px solid black', 
      borderRadius: '5px', 
      padding: '10px',
      backgroundColor: '#f5f5f5',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      {avatarUrl && <img src={avatarUrl} alt="Random Avatar" style={{ 
        width: '50%', 
        height: 'auto',
        borderRadius: '5px',
        marginBottom: '10px' 
      }} />}
      <hr style={{ width: '100%' }} /> {/* Línea debajo de la imagen */}
      <h2 style={{ 
        color: '#333',
        fontSize: '20px'
      }}>Descripción</h2>
      <p style={{ 
        color: '#333',
        fontSize: '16px'
      }}>Personaje random de colores</p>
    </div>
  );
};

export default RandomAvatarCard;
