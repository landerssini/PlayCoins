import React, { useEffect, useState } from 'react'
import CoinStock from '../components/Coin-stock'
import COINS from "../assets/WebPhotos/CoinsWealth.png"
import "./Our_digital_wealth.css"
// import { ref, get, child } from "firebase/database";

function Our_digital_wealth() {

  return (

    <div className="OurDigWeaSEC">
      <div className='OurDigHeader'>
        {/* <p>This our wealth in <h3 className='RealTimeText'>-RealTime-</h3></p> */}
        <img src={COINS} alt="Coins" />
      </div>
      <CoinStock quantity={15} Grid="coinsPrices2" coinbox="CoinBox3"/>
    </div>
  )
}
export default Our_digital_wealth


