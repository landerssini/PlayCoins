import { doc, getDoc } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import CoinStock from '../components/Coin-stock';
import { UserContext } from '../context';
import { database } from '../firebaseData';

function Your_wallet() {
  const [user, setUser, balance, setBalance, UID, setUID] = useContext(UserContext)
 
  

  return (
    <div><CoinStock YourWallet={true} Grid="coinsPrices1" coinbox="CoinBox5"/></div>
  )
}

export default Your_wallet