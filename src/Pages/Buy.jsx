import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect } from 'react'
import CoinStock from '../components/Coin-stock'
import CoinBox from '../components/CoinBox'
import { database } from '../firebaseData'

function Buy(props) {
  const CoinId = props.coin
  useEffect(() => {
    async function getData() {
      const Data = await getDoc(doc(database, "Coins", "pHhRnd8Eifp8zjN98lvP"))
      console.log(Data.data());
    }
    getData()
  },[])
  getDoc(doc(database, "Coins", "pHhRnd8Eifp8zjN98lvP"))


  return (
    <div>
        <div class="containerCONS">
    <h1>En construcción</h1>
    <p>Estamos trabajando en mejorar nuestro sitio web. Por favor, vuelva pronto.</p>
  </div>
    </div>
  )
}

export default Buy