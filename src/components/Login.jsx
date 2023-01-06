import React, { useContext } from 'react'
import { AuthContext } from './context/context'
import { MyButton } from './UI/button/MyButton'
import { MyInput } from './UI/MyInput/MyInput'

export const Login = () => {
   const {setAuth} = useContext(AuthContext)
   const login = (e) => {
      localStorage.setItem('auth', 'true')
      e.preventDefault()
      setAuth(true)
   }

  return (
    <form onSubmit={(e)=>login(e)}>
      <MyInput placeholder='введите логин'/>
      <MyInput placeholder='введите пароль'/>
      <MyButton>Войти</MyButton>
    </form>
  )
}
