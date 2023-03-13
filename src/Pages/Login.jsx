import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useContext, useEffect, useState } from 'react'
import { auth, database } from '../firebaseData'
import { UserContext } from '../context';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, setDoc } from 'firebase/firestore';

function Login() {
  const [user, setUser, balance, setBalance, UID, setUID, coinsWealth, setWealth] = useContext(UserContext)
  const redirect = useNavigate()

  // useEffect(() => {
  //   if (user) {
  //     redirect("/")
  //   }
  // }, [])

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const setEmailInput = (e) => {
    setEmail(e.target.value)
  }
  const setPasswordInput = (e) => {
    setPassword(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user)
        console.log(userCredential.user.email)
        console.log(userCredential.user.uid)
        setUser(userCredential.user.email)
        setUID(userCredential.user.uid)
        const UID_LS = { "UID": userCredential.user.uid };
        localStorage.setItem('PlayCoinsUID', JSON.stringify(UID_LS));
        // localStorage.setItem(UID, userCredential.user.uid)
        console.log(UID);
        console.log(user);
        async function getData() {
          const docSnap = await getDoc(doc(database, "UserWealth", userCredential.user.uid))
          setBalance(docSnap.data().$)
          const userwealth = await getDoc(doc(database, "UserWealth", userCredential.user.uid))
          const { $, ...CoinsWealthData } = userwealth.data()
          setWealth(CoinsWealthData)
        }
        getData()
        redirect("/")
      }
      )
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="custom-form">
      <div className="input-container"><label htmlFor="email">E-mail</label><input type="email" name='email' className='custom-input' onChange={(e) => setEmailInput(e)} /></div>
      <div className="input-container"> <label htmlFor="password">Password</label><input type="password" name='password' className='custom-input' onChange={(e) => setPasswordInput(e)} /></div>
      <button type="submit" className='custom-button'>Log In!</button>
    </form>
  )
}

export default Login