import React from 'react'
import { useState, useEffect } from 'react'
import { auth, logInWithEmailAndPassword } from '../../../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { homeImage } from '../../../utils/constant';

const Authentification = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, loading, error] = useAuthState(auth);
  const [authErr, setAuthErr] = useState('')

  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/admin");
  //eslint-disable-next-line
  }, [user, loading]);


  const handlerSubmit = () => {
    setAuthErr("")
    logInWithEmailAndPassword(email, password)
    .then((err) => {
      if (err) {
        setAuthErr(err)
      }
    })
  }

  return (
    <section id='authentification'>
      <div className="left-container">
        <div className="image" style={{ backgroundImage: 'url(' + homeImage + ')'}}></div>
      </div>
      <div className="right-container">
        <h1>Bonjour</h1>
        <input className='outline-none' type="email" placeholder='Email...' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className='outline-none' type="password" placeholder='Mot de passe...' value={password} onChange={(e) => setPassword(e.target.value)} />

        {error && <p className='error'>{error}</p>}
        {authErr && <p className='error'>{authErr}</p>}
        <button className='button-full' onClick={handlerSubmit} >Se connecter</button>
      </div>
    </section>
  )
}

export default Authentification