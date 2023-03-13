import React, { useContext } from 'react'
import ZBG from "../assets/Background-images/ZELDA BG.jpeg"
import SBG from "../assets/Background-images/SONIC BG.jpeg"
import RCBG from "../assets/Background-images/RATCHET AND CLANK BG.jpeg"
import PBG from "../assets/Background-images/POKEMON BG.jpeg"
import LBG from "../assets/Background-images/LEGO BG.jpeg"
import FFBG from "../assets/Background-images/FINAL FANTASY BG.jpeg"
import ESBG from "../assets/Background-images/ELDER SCROLLS BG.jpeg"
import BANKIMG from "../assets/WebPhotos/Bank image.png"
import GAMBYIMG from "../assets/WebPhotos/GAMEBOY image.png"
import LOCK from "../assets/WebPhotos/LOCK.png"
import "./Home.css"
import Coin_prices from '../components/Coin-prices'
import CoinStock from '../components/Coin-stock'

function Home() {
  return (
    <div className='HomePage'>
      <div className='images-BGtext'>
        <p>Welcome to your preferred exchange platform.</p>
        <div className='images-bg'>
          <div className='images-bgBOX'><img className='images-bgIMG' src={ZBG} alt="ZELDA" /></div>
          <div className='images-bgBOX'><img className='images-bgIMG' src={SBG} alt="SONIC" /></div>
          <div className='images-bgBOX'><img className='images-bgIMG' src={RCBG} alt="RATCHET" /></div>
          <div className='images-bgBOX'><img className='images-bgIMG' src={PBG} alt="POKEMON" /></div>
          <div className='images-bgBOX'><img className='images-bgIMG' src={LBG} alt="LEGO" /></div>
          <div className='images-bgBOX'><img className='images-bgIMG' src={FFBG} alt="FINAL" /></div>
          <div className='images-bgBOX'><img className='images-bgIMG' src={ESBG} alt="ELDER" /></div>
        </div>
      </div>
      <div className='SECTION'>
        <div><img src={BANKIMG} className="SectionPIC" alt="BANK" /></div>
        <div className='SECT_description'><h2>The first company in the world that gets your wealth reflected in your favorite  NO PAY-TO-WIN game.</h2><img src={GAMBYIMG} alt="GAMEBOY" /><p>Our digital particle integration system (dgP) allows us to alter the NO PAY-TO-WIN games through a molecular process to introduce a certain number of bots into the games and thus be able to change the values of these. <br /><br /> Flaunt your money buying infinite potions in Pokemon, why are you going to kill Ganon yourself in The Legend Of Zelda if Can you buy the whole army to fight it? Why run if you can buy a rocket from our beloved Elon Musk and get to where Tails is earlier, Sonic, you are a loser.</p>
          <ul>
            <li>Secure</li>
            <li>Fast delivery (30-day warranty)</li>
            <li>Without bugs</li>
          </ul>
        </div>
      </div>
      <div className='SECTION2'>
        <div className='SECT_description'>
          <h2>On our hands</h2>
          <p>Our online store obtains game coins through partnerships with expert players around the world who collect these coins in different games. In addition, we also work with trusted suppliers who ensure that the coins we offer are legitimate and will not affect the integrity of your games.</p>
          <img src={LOCK} alt="LOCK" />
        </div>
        <div>
          <CoinStock quantity={6} Grid="coinsPrices2" coinbox="CoinBox3"/>
          <p className='textManyMore'>And many more!!</p>
        </div>


      </div>
    </div>
  )
}
export default Home