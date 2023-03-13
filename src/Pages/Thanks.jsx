import { doc, getDoc } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context'
import { database } from '../firebaseData'

function Thanks() {
  const [user, setUser, balance, setBalance, UID, setUID] = useContext(UserContext)
  const [successDeposit, setDepositsuccess] = useState(false)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      async function getData() {
        const docSnap = await getDoc(doc(database, "UserWealth", UID))
        setBalance(docSnap.data().$)
        setDepositsuccess(true)
        const timeout = setTimeout(() => {setDepositsuccess(false)},8000)
      }
      getData()

    }, 1500)
  }, [])


  return (
    <div>
      {successDeposit ? <div class="alert alert-success" role="alert">
        Your deposit is now available! your balance is now of <b>{balance}$</b>
      </div>:null }

    </div>
  )
}

export default Thanks