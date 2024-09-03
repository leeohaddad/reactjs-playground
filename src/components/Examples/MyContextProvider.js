import React, { createContext, useState } from 'react'

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [ text, setText ] = useState('Hello World');    
  
    return (
    <MyContext.Provider value={{text, setText}}>
      {children}
    </MyContext.Provider>
  )
}

export {MyContextProvider, MyContext};
