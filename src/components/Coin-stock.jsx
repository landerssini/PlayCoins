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
import { database } from '../firebaseData'
import { UserContext } from '../context'
import { doc, getDoc } from 'firebase/firestore'
import CoinBox from './CoinBox'

// import { ref, get, child } from "firebase/database";

function CoinStock(props) {
  const [user, setUser, balance, setBalance, UID, setUID, coinsWealth, setWealth] = useContext(UserContext)
  const [coinStock, setStock] = useState([])

  const coins = ["bitcoin", "ethereum", "litecoin", "dogecoin", "xrp", "binance-coin", "solana", "tron", "polkadot", "avalanche", "uniswap", "cardano", "chainlink", "monero", "polygon"]

  const coinImages = {
    bitcoin: ORO,
    ethereum: POKEDOLAR,
    litecoin: LEGOSTUDS,
    dogecoin: RINGS,
    xrp: RUPIAVERDE,
    "binance-coin": RUPIAROJA,
    tron: BOLTSPLATA,
    solana: BOLTSORO,
    polkadot: LEGOSTUDS10,
    avalanche: LEGOSTUDS5,
    uniswap: RUPIAAZUL,
    cardano: RUPIAMORADA,
    chainlink: RUPIAORO,
    monero: GIL,
    polygon: RUPIAPLATA,
  }
  const coinIds = {
    bitcoin: 2,
    ethereum: 3,
    litecoin: 12,
    dogecoin: 4,
    xrp: 10,
    "binance-coin": 9,
    tron: 14,
    solana: 15,
    polkadot: 11,
    avalanche: 13,
    uniswap: 5,
    cardano: 8,
    chainlink: 6,
    monero: 1,
    polygon: 7
  }
  const coinNames = {
    bitcoin: "oro",
    ethereum: "pokedolares",
    litecoin: "studs_de_2",
    dogecoin: "rings",
    xrp: "rupia_verde",
    "binance-coin": "rupia_roja",
    tron: "bolts_de_plata",
    solana: "bolts_de_oro",
    polkadot: "studs_de_10",
    avalanche: "studs_de_5",
    uniswap: "rupia_azul",
    cardano: "rupia_morada",
    chainlink: "rupia_de_oro",
    monero: "gil",
    polygon: "rupia_de_plata",
  }
  const coinGames = {
    oro: "Elder Scrolls",
    pokedolares: "Pokemon Saga",
    "studs_de_2": "Lego Saga",
    rings: "Sonic Saga",
    "rupia_verde": "The Legend of Zelda",
    "rupia_roja": "The Legend of Zelda",
    "bolts_de_plata": "Ratchet and Clank Saga",
    "bolts_de_oro": "Ratchet and Clank Saga",
    "studs_de_10": "Lego Saga",
    "studs_de_5": "Lego Saga",
    "rupia_azul": "The Legend of Zelda",
    "rupia_morada": "The Legend of Zelda",
    "rupia_de_oro": "The Legend of Zelda",
    gil: "Final Fantasy Saga",
    "rupia_de_plata": "The Legend of Zelda",
  }
  const coinNameTitle = {
    oro: "Oro",
    pokedolares: "Pokedolar",
    "studs_de_2": "Studs de 2",
    rings: "Rings",
    "rupia_verde": "Rupia Verde",
    "rupia_roja": "Rupia Roja",
    "bolts_de_plata": "Bolts De Plata",
    "bolts_de_oro": "Bolts De Oro",
    "studs_de_10": "Studs De 10",
    "studs_de_5": "Studs De 5",
    "rupia_azul": "Rupia Azul",
    "rupia_morada": "Rupia Morada",
    "rupia_de_oro": "Rupia De Oro",
    gil: "Gil",
    "rupia_de_plata": "Rupia De Plata",
  }

  console.log("hola");

  useEffect(() => {


    const newBoxes = []
    async function getData2() {
    //   if (props.YourWallet) {
    //     const miObjeto = JSON.parse(localStorage.getItem('PlayCoinsUID'))
    //     // console.log(n.index);

    //     console.log("1", coinsWealth);
    //   }
    //   var coinsToDisplay = coins.slice(0, props.quantity);
    // if (props.CoinId) {
    //   const coinName = Object.keys(coinIds).find(key => coinIds[key] === props.CoinId);
    //   console.log(coinName);
    //   coinsToDisplay = coins.filter(coin => coin === coinName);
    // }
    coins.slice(0, props.quantity).map((coin, index) => {
        const fetchUrl = `https://api.coincap.io/v2/assets/${coin}`;
        fetch(fetchUrl)
          .then(response => response.json())
          .then(data => {
            const name = coinNames[coin]
            // const coinData = coinsWealth[name]
            // const coinWealth = coinData ? coinData[name] : null //unidad de cada moneda
            const price = Number(data.data.priceUsd).toFixed(2)
            const image = coinImages[coin]
            const NameTitle = coinNameTitle[name]
            const game = coinGames[name]
            // newBoxes.push(<CoinBox coinbox={props.coinbox} key={coin} coin={coin} image={image} NameTitle={NameTitle} price={price} game={game} coinWealth={coinWealth} YourWallet={props.YourWallet} />)
            setStock(prevStock => [...prevStock, <CoinBox coinbox={props.coinbox} key={index} coin={name} image={image} NameTitle={NameTitle} price={price} game={game} YourWallet={props.YourWallet} Buy={props.Buy} />])

          })
          ;
      }
      )
      setStock(newBoxes)
      console.log(coinStock);

    }
    setStock([])
    getData2()
  }, [])
  return (
    <div className={props.Grid}>
      {coinStock}
    </div>
  )
}
export default CoinStock
// async function getData() {
//   const docSnap = await getDoc(doc(database, "UserWealth", UID))
//   const { $, ...Coins } = docSnap.data()
//   setCoinBoxes(Coins)

//   const newBoxes = []
//   Promise.all(coins.slice(0, props.quantity).map((coin) => {
//     const fetchUrl = fetchUrlBase + coin
//     return axios(fetchUrl)
//       .then((response) => {
//         const price = Number(response.data.data.priceUsd).toFixed(2)
//         const image = coinImages[coin]
//         const name = coinNames[coin]
//         const NameTitle = coinNameTitle[name]
//         const game = coinGames[name]
//         console.log(coinBoxes);

//         newBoxes.push(
//           <CoinBox coin={coin} image={image} NameTitle={NameTitle} price={price} />
//           // <div className='CoinBox' key={coin}>

//           //   <img src={image} alt={image} />

//           //   <p>
//           //     {NameTitle}
//           //   </p> {/*PONER UN DESPLEGABLE HOVER PARA VER INFO DE CDA MONEDA*/}
//           //   <p>
//           //     {price}$
//           //   </p>


//           //   <Link></Link>
//           //   <Link></Link>
//           // </div>
//         )
//       })

//   }))
//     .then(() => {
//       setStock(newBoxes)
//     })
// }

// // getData()


