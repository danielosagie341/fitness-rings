import React, { createContext, useReducer } from 'react'
import reducer from './reducer'

export const DataContext = createContext()

const DataProvider = ({ children }) => {
    const firstState = {
        auth: {},
        users: {},
    }

    const [state, dispatch] = useReducer(reducer, firstState)
    
  return (
      <DataContext.Provider value={{ state, dispatch }}>
        {children}
      </DataContext.Provider>
    )
}

export default DataProvider