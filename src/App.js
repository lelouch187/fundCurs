import { AppRouter } from "./components/AppRouter";
import { Navbar } from "./components/UI/navbar/Navbar";
import { BrowserRouter } from 'react-router-dom'
import { AuthContext } from "./components/context/context";
import { useEffect, useState } from "react";

function App() {
  const [auth, setAuth] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    if(localStorage.getItem('auth')) {
      setAuth(true)
    }
    setLoading(false)
  },[])


  return (
    <AuthContext.Provider value={{auth, setAuth, loading}}>
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
