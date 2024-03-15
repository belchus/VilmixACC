import React, { useState } from 'react';
import './footer.css'; // Importa tu archivo CSS para estilos

const Footer = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');

  const handleUndo = () => {
    // Implementa aquí la lógica para deshacer la acción
    // Por ejemplo, revertir cambios o mostrar un mensaje de confirmación
    setMessage('Acción deshecha');
    setShowMessage(true);

    // Lógica para revertir la acción realizada
  };

  return (
    <footer className="footer">
      {showMessage && <div className="message">{message}</div>}
      <button onClick={handleUndo} className="undo-button">Arrepentir</button>
    </footer>
  );
};

export default Footer;