import { getPagesArray } from "../utils/pagination"


export const Pagination = ({page, totalPages, setPage}) => {
    let pagesArray = getPagesArray(totalPages)
  return (
    <div className="page-wrapper">
        {pagesArray.map(p => {
          return <span onClick={()=>setPage(p)}
          key={p}
          className={page===p?"page active":"page"}>{p}</span>
        })}
    </div>
  )
}