import { doc, getDoc } from 'firebase/firestore'
import React, { useContext, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/Logo.png'
import { UserContext } from '../context'
import { database } from '../firebaseData'
import DesplegableNav from './DesplegableNav'

function Navbar() {
    const [user, setUser, balance, setBalance, UID, setUID] = useContext(UserContext)
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
      }, [])
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img className="navbar-logo" src={Logo} /> PlayCoins</Link>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : undefined}`} to="/">Home
                            </NavLink>
                            <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : undefined}`} to="/Our_digital_wealth">Our digital wealth
                            </NavLink>
                            {user ? <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : undefined}`} to="/your_wallet">Your Wallet
                            </NavLink> :null}
                              {user ?<NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : undefined}`} to="/buy">Buy
                            </NavLink>:null}
                              {user ?<NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : undefined}`} to="/send">Send
                            </NavLink>:null}
                            {/* <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : undefined}`} to="/payout">payout
                            </NavLink>
                            <NavLink className={({ isActive }) => `nav-link ${isActive ? "active" : undefined}`} to="/thanks">thanks
                            </NavLink> */}

                        </ul>
                    </div>
                    <div className='LogSign'>
                    {user ? <DesplegableNav /> : <NavLink className={({ isActive }) => `btn btnLogSign btn-secondary ${isActive ? "active" : undefined}`} to="/login">Login</NavLink> }
                    {user ? null : <NavLink className={({ isActive }) => `btn btnLogSign btn-primary ${isActive ? "active" : undefined}`} to="/signup">Sign Up</NavLink> }
                    </div>
                </div>

            </nav>
        </header>
    )
}
export default Navbar