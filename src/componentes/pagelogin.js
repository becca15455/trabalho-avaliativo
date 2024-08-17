import React, { useState } from 'react';
import './PageLo.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <form id='container' onSubmit={handleSubmit}>
      <h2 id='log'>Login</h2>
      <div id='contaier'>
      <input 
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input id='pedding'
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Entrar</button>
      </div>

    
    </form>
  );
}

export default Login;