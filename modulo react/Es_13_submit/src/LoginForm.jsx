import { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState(''); // stato per username
  const [password, setPassword] = useState(''); // stato per password

  const handleUsernameChange = (event) => {
    setUsername(event.target.value); // aggiorna username
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value); // aggiorna password
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // evita il refresh della pagina
    alert(`Username: ${username}\nPassword: ${password}`);
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
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
