import { doc, increment, setDoc, updateDoc } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context'
import { database } from '../firebaseData'

function Payout() {
  const [user, setUser, balance, setBalance, UID, setUID] = useContext(UserContext)
  const [jokeCounter, setJCounter] = useState(null)
  const [charge,setCharge] = useState(null)
  const redirect = useNavigate()

  const setChargeIn = (e)=>{
    setCharge(e.target.value)
  }
  const payoutProcess = (e) => {
    e.preventDefault()
      console.log(UID);
      updateDoc(doc(database, "UserWealth", UID),
        {
            "$": increment(charge)
        })
        redirect("/thanks")
    }
    return (
      <div>
        {user}
        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Deposit now!
        </button>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            <form onSubmit={payoutProcess}>
              <label htmlFor="quantity">quantity ($)</label><input type="number" onChange={(e)=>setChargeIn(e)} required  min="0" pattern="[0-9]" title="Must be a number"/>
              <label htmlFor="name">name</label><input type="text" />
              <label htmlFor="cardnumber">cardnumber</label><input type="text" />
              <label htmlFor="month">month</label><input type="text" />
              <label htmlFor="year">year</label><input type="text" />
              <label htmlFor="cvv">cvv</label><input type="password" />
              <button type="submit">Deposit</button>
            </form>
            {jokeCounter == 1 ? <p>are you poor or something? try it again bro</p> : null}
          </div>
        </div>
      </div>
    )
  }

  export default Payout