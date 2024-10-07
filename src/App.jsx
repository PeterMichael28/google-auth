import { useState } from 'react';
import './App.css';

import { useGoogleLogin } from '@react-oauth/google';

function App() {
 const [token, setToken] = useState('');

 // googleLogin
 const googleLogin = useGoogleLogin({
  onSuccess: (codeResponse) => {
   setToken(codeResponse.access_token);
  },
  onError: (error) => console.log('Login Failed:', error),
 });

 return (
  <div className="container">
   <div className='token'>
    <h2>Token</h2>
    <p>{token}</p>
   </div>
   <button onClick={googleLogin}>Google SignIn</button>
  </div>
 );
}

export default App;
