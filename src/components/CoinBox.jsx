import React, { useContext, useEffect, useState } from 'react'
import RUPIAVERDE from "../assets/Coins/Rupia verde.png"
import RUPIAROJA from "../assets/Coins/Rupia roja.png"
import RINGS from "../assets/Coins/Rings SONIC.webp"
import ORO from "../assets/Coins/Oro.png"
import POKEDOLAR from "../assets/Coins/Pokedolares.webp"
import LEGOSTUDS from "../assets/Coins/Lego Studs.png"
import RUPIAAZUL from "../assets/Coins/Rupia azul.png"
import RUPIAMORADA from "../assets/Coins/Rupia morada.png"
import RUPIAORO from "../assets/Coins/Rupia oro.png"
import RUPIAPLATA from "../assets/Coins/Rupia plata.png"
import GIL from "../assets/Coins/GIL FINAL FANTASY.png"
import LEGOSTUDS5 from "../assets/Coins/Lego Studs 5.png"
import LEGOSTUDS10 from "../assets/Coins/Lego Studs 10.png"
import BOLTSORO from "../assets/Coins/Bolts oro.png"
import BOLTSPLATA from "../assets/Coins/Bolts plata.png"
import { UserContext } from '../context'
import { doc, getDoc } from 'firebase/firestore'
import { database } from '../firebaseData'

function CoinBox(props) {
  const [user, setUser, balance, setBalance, UID, setUID, coinsWealth, setWealth] = useContext(UserContext)
  const classname = "CoinBox " +props.coinbox
  const [coinQuant, setcoinQuant] = useState(0)
  useEffect(()=>{
    if (props.YourWallet) {
      async function getData() {
        const data = await getDoc(doc(database,"UserWealth", UID))
        const coinQuantAll = data.data()
        setcoinQuant(coinQuantAll[props.coin][props.coin]);
      }
      getData()
    }
      

   
  },[])
 

  return (
    <div className={classname} >

      <img src={props.image} alt={props.image} />

      <p>
        {props.NameTitle}
      </p>
      {props.YourWallet ?
        <div>
          <p>Your Balance</p>
          <p>
            {coinQuant}
          </p>
        </div> : null}

      <div>
        <p>
          Price
        </p>
        <p>
          {props.price}$
        </p>
      </div>
      {props.YourWallet ?
        <div>
          <p>Total ($) in {props.NameTitle}</p>
          <p>
            {(coinQuant * props.price).toFixed(2)}
          </p>
        </div> : null}
      {props.Buy ?
        <div>
          <p>Total ($) in {props.NameTitle}</p>
          <p>
            {(coinQuant * props.price).toFixed(2)}
          </p>
        </div> : null}




    </div>
  )
}

export default CoinBox