import { async } from '@firebase/util'
import axios from 'axios';
import React, { Component, memo, useEffect, useState } from 'react'
import RUPIAVERDE from "../assets/Coins/Rupia verde.png"
import RUPIAROJA from "../assets/Coins/Rupia roja.png"
import RINGS from "../assets/Coins/Rings SONIC.webp"
import ORO from "../assets/Coins/Oro.png"
import POKEDOLAR from "../assets/Coins/Pokedolares.webp"
import LEGOSTUDS from "../assets/Coins/Lego Studs.png"


function Coin_prices() {
  const fetchUrlBase = "https://api.coincap.io/v2/assets/"
  const coins = ["bitcoin", "ethereum", "litecoin", "dogecoin", "xrp", "binance-coin"]
  const [coinBoxes, setCoinBoxes] = useState([])
  
  const coinImages = {
    bitcoin: ORO,
    ethereum: POKEDOLAR,
    litecoin: LEGOSTUDS,
    dogecoin: RINGS,
    xrp: RUPIAVERDE,
    "binance-coin": RUPIAROJA,
  }
  const coinNames = {
    bitcoin: "Oro",
    ethereum: "Pokedolar",
    litecoin: "Studs",
    dogecoin: "Rings",
    xrp: "Rupia Verde",
    "binance-coin": "Rupia Roja",
  }
  
  useEffect(() => {
    const newBoxes = []
    
    Promise.all(coins.map((coin) => {
      const fetchUrl = fetchUrlBase + coin
      
      return axios(fetchUrl)
        .then((response) => {
          const price = Number(response.data.data.priceUsd).toFixed(2)
          const image = coinImages[coin]
          const name = coinNames[coin]
          
          newBoxes.push(
            <div className='CoinBox' key={coin}>
              <img src={image} alt={image} />
              <p>
                {name}
              </p> {/*PONER UN DESPLEGABLE HOVER PARA VER INFO DE CDA MONEDA*/}
              <p>
                {price}$
              </p>
            </div>
          )
        })
    })).then(() => {
      setCoinBoxes(newBoxes)
    })
  }, [])
  
  return (
    <div>
    <div className="coinsPrices2">
      {coinBoxes}
    </div>
    <p className='textManyMore'>And many more!!</p>
    </div>
  )
}

export default Coin_prices
