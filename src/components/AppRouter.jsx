import React, { useContext } from 'react'
import { Route, Routes, Navigate} from 'react-router-dom'
import { AuthContext } from './context/context'
import { privateRoutes, publicRoutes } from './router'
import { Loader } from './UI/loader/Loader'

export const AppRouter = () => {
   const {auth, loading} = useContext(AuthContext)

   if(loading){
      return <Loader />
   }
   return (
      auth?
         <Routes>
            {privateRoutes.map(route=>{
               return <Route key={route.path} 
               path={route.path} 
               element={route.element}/>
            })}
            <Route
        path="*"
        element={<Navigate to="/posts" replace />} />
         </Routes>
      :
      <Routes>
            {publicRoutes.map(route=>{
               return <Route key={route.path} 
               path={route.path} 
               element={route.element}/>
            })}
            <Route
        path="*"
        element={<Navigate to="/login" replace />} />
         </Routes>
   )
}
