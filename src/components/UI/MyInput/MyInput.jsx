import s from './myInput.module.css'

export const MyInput = ({...props}) => {
  return (
    <input className={s.input}
     {...props} />
  )
}