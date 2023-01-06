import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/context'
import { MyButton } from '../button/MyButton'

import s from './navbar.module.css'

export const Navbar = () => {
   const {setAuth} = useContext(AuthContext)
   const logout = () => {
      setAuth(false)
      localStorage.removeItem('auth')
   }

   return (
      <nav className={s.nav}>
         <MyButton onClick={logout}>Выйти</MyButton>
         <ul className={s.ul}>
            <li>
               <Link className={s.link} to='/posts'>Посты</Link>
            </li>
            <li>
               <Link className={s.link} to='/about'>Обо мне</Link>
            </li>
         </ul>
      </nav>
   )
}
