import React, { ChangeEventHandler, FC } from 'react'

import styless from './myInput.module.css'

interface MyInputProps{
   value:string; 
   onChange:ChangeEventHandler<HTMLInputElement>
}

const MyInput:FC<MyInputProps> = (props) => {
  return (
    <input {...props} className={styless.input}/>
  )
}

export default MyInput