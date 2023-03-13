import { useContext, useEffect, useState } from 'react'
import { Route, Routes, Link, Navigate } from 'react-router-dom'
import './App.css'
import Logo from './assets/Logo.png'
import Navbar from './components/Navbar'
import Our_digital_wealth from './Pages/Our_digital_wealth'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Your_wallet from './Pages/Your_wallet'
import Footer from './components/Footer'
import Login from './Pages/Login'
import SignUp from './Pages/Signup'
import Buy from './Pages/Buy'
import Send from './Pages/Send'
import Thanks from './Pages/Thanks'
import Payout from './Pages/Payout'
import { UserContext } from './context'
import { doc, getDoc } from 'firebase/firestore'
import { database } from './firebaseData'
import BuyWrapper from './Pages/BuyWrapper'

function App() {
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(null);
  const [UID, setUID] = useState(null);
  const [coinsWealth, setWealth] = useState([])

  useEffect(() => {
    if (localStorage.getItem('PlayCoinsUID') !== "{}") {
      const miObjeto = JSON.parse(localStorage.getItem('PlayCoinsUID'));
      setUID(miObjeto["UID"]);
      async function getData() {
        const docSnap = await getDoc(doc(database, "UserWealth", miObjeto["UID"]));
        setBalance(docSnap.data().$);
        const docSnap2 = await getDoc(doc(database, "Users", miObjeto["UID"]));
        setUser(docSnap2.data().email);
      }
      getData();
    }
  }, []);
  return (
    <UserContext.Provider value={[user, setUser, balance, setBalance, UID, setUID, coinsWealth, setWealth]}>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/our_digital_wealth' element={<Our_digital_wealth />} />
          <Route path='/your_wallet' element={<Your_wallet />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />

          <Route path='/buy'  element={<Buy />}>
            <Route path=':id' element={<BuyWrapper />} />
          </Route>
          <Route path='/send' element={<Send />} />
          <Route path='/thanks' element={<Thanks />} />
          <Route path='/payout' element={<Payout />} />
        </Routes>
        <Footer />
      </div>
    </UserContext.Provider>
  )
}

export default App
