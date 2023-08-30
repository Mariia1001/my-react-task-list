
import React, { useState } from 'react';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!isValidEmail(email)) {
      console.log('Correo electrónico no válido');
      return;
    }
  
    const isAuthenticated = authenticateUser(name, email);
    if (isAuthenticated) {
      console.log('Usuario autenticado:', name);
    } else {
      console.log('Usuario no autenticado');
    }

  };
    console.log('Nombre:', name);
    console.log('Correo electrónico:', email);
  

  return (
    <div>
      <h2>Bienvenidos a mi lista de tareas</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Correo electrónico:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
  };


export default LoginForm;
