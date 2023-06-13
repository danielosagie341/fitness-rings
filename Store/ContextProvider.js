import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

const initialState = {
    
}

export const ContextProvider = ({ children }) => {

    const [setPage, setSetPage] = useState('Home');

  
    return (
        // if value and assigned value are the same you can omit one
      <DataContext.Provider
        value={{
         setPage
        }}
      >
        {children}
      </DataContext.Provider>
    )
}

// to use active menu in component
export const useDataContext = () => useContext(DataContext);