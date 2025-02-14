import React, {  createContext, useState } from 'react'
export const AppContext = createContext()
function MyContext({children}) {
const[user,setUser]=useState(localStorage.getItem("token"))
  return (
    <AppContext.Provider value={{user,setUser}}>
      {children}
      
    </AppContext.Provider>
  )
}

export default MyContext
