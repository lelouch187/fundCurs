export const MySelect = ({options, value, onChange}) => {
  return (
    <select onChange={e=>onChange(e.target.value)}
    value={value}>
        <option disabled value=''>Сортировка по</option>
        {options.map(opt=>{
        return    <option value={opt.value}
            key={opt.name} >{opt.name}</option>
        })}
    </select>
  )
}