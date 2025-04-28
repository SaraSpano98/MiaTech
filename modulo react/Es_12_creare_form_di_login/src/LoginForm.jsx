import { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState(''); // stato per l'username
  const [password, setPassword] = useState(''); // stato per la password

  const handleUsernameChange = (event) => {
    setUsername(event.target.value); // aggiorna username
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value); // aggiorna password
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // evita il refresh della pagina
    console.log('Username:', username);
    console.log('Password:', password);
    // Qui potresti aggiungere anche una chiamata a un server API
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input 
          type="text" 
          value={username}
          onChange={handleUsernameChange}
          placeholder="Inserisci username"
        />
      </div>
      <div>
        <label>Password:</label>
        <input 
          type="password" 
          value={password}
          onChange={handlePasswordChange}
          placeholder="Inserisci password"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
