import s from './myModal.module.css'

export const MyModal = ({children, value, setValue}) => {
  const classModal = [s.modal]  
  if (value) {
    classModal.push(s.active)
  }
  return (
    <div onClick={()=>setValue(false)}
    className={classModal.join(' ')}>
        <div onClick={e=>e.stopPropagation()}
         className={s.modalContent}>
            {children}
        </div>
    </div>
  )
}