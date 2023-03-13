import React, { useEffect, useRef, useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, database } from '../firebaseData'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
function SignUp() {
  const redirect = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [emailUsed, setEmailUsed] = useState(false)
  const SignUp = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);;
        setDoc(doc(database, "UserWealth", userCredential.user.uid),
          {
              "$": "0",
            "studs_de_10": {
              "studs_de_10": "0",
              "coin": "studs_de_10",
              "id": 11
            },
            "bolts_de_oro": {
              "coin": "bolts_de_oro",
              "id": "15",
              "bolts_de_oro": "0"
            },
            "studs_de_2": {
              "studs_de_2": "0",
              "id": 12,
              "coin": "studs_de_2"
            },
            "rupia_de_plata": {
              "rupia_de_plata": "0",
              "id": 7,
              "coin": "rupia_de_plata"
            },
            "rupia_verde": {
              "id": 10,
              "coin": "rupia_verde",
              "rupia_verde": "0"
            },
            "oro": {
              "oro": "0",
              "id": 2,
              "coin": "oro"
            },
            "rings": {
              "id": 4,
              "rings": "0",
              "coin": "rings"
            },
            "gil": {
              "coin": "gil",
              "gil": "0",
              "id": 1
            },
            "rupia_morada": {
              "coin": "rupia_morada",
              "id": 8,
              "rupia_morada": "0"
            },
            "rupia_roja": {
              "coin": "rupia_roja",
              "rupia_roja": "0",
              "id": 9
            },
            "pokedolares": {
              "pokedolares": "0",
              "id": 3,
              "coin": "pokedolares"
            },
            "studs_de_5": {
              "coin": "studs_de_5",
              "studs_de_5": "0",
              "id": 13
            },
            "rupia_azul": {
              "coin": "rupia_azul",
              "rupia_azul": "0",
              "id": 5
            },
            "rupia_de_oro": {
              "coin": "rupia_de_oro",
              "id": 6,
              "rupia_de_oro": "0"
            },
            "bolts_de_plata": {
              "coin": "bolts_de_plata",
              "bolts_de_plata": "0",
              "id": "14"
            }
          }
        )
        setDoc(doc(database, "Users", userCredential.user.uid),
          {
            name: name,
            email: email,
            uid: userCredential.user.uid
          })
          setEmailUsed(null)
          redirect("/login")
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        if (errorMessage=="Firebase: Error (auth/email-already-in-use).") {
          console.log("1");
          setEmailUsed(true)
        }
      })
      
  }
  const setEmailIn = (e) => {
    setEmail(e.target.value)
  }
  const setPasswordIn = (e) => {
    setPassword(e.target.value)
  }
  const setNameIn = (e) => {
    setName(e.target.value)
  }

  return (
    <form onSubmit={SignUp} className="custom-form">
       <div className="input-container"><label htmlFor="name">Name</label><input type="name" name='name' className='custom-input' onChange={(e) => setNameIn(e)} /></div>
       <div className="input-container"><label htmlFor="email">E-mail</label><input type="email" name='email' className='custom-input' onChange={(e) => setEmailIn(e)} /></div>
       <div className="input-container"><label htmlFor="password">Password</label><input type="password" name='password' className='custom-input' onChange={(e) => setPasswordIn(e)} /></div>
      <button type="submit" className='custom-button' >Sign up!</button> 
      {emailUsed ? <p>Email already in use, try another one.</p>: null}
    </form>
  )
}

export default SignUp