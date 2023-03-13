import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProfileIcon from '../assets/Profile-defaultIcon.png'
import { UserContext } from '../context'
import { useNavigate } from "react-router-dom";

function DesplegableNav() {
    const redirect = useNavigate()
    const [user, setUser, balance, setBalance, UID, setUID] = useContext(UserContext)
    const logOut = ()=>{
        setUser(null)
        setBalance(null)
        setUID(null)
        localStorage.removeItem('PlayCoinsUID');
        redirect("/")

    }

    return (
        <div className="btn-group dropstart">
            <button type="button" className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Profile
            </button>
            <ul className="dropdown-menu no-padding" >

                <div className='center'>
                    <img src={ProfileIcon} className="profilePic"></img> {/*PONER FOTO DE PERFIL DE CADA USUARIO, SI NO HAY DEFAULT*/}
                    <h4>{user}</h4>
                    <p>{balance}$</p>
                </div>
                <li ><Link className="dropdown-item list-group-item" to="/profile">Your profile</Link></li>
                <li ><Link className="dropdown-item list-group-item" to="/payout">Deposit</Link></li> {/*SI NO ESTAS LOGEADO, MODAL DE LOGIN/SIGNUP*/}
                <li ><button className="dropdown-item list-group-item list-group-item-danger" onClick={logOut}>Log Out</button></li>
            </ul>
        </div>
    )
}

export default DesplegableNav