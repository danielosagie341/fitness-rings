import React from 'react'
import DataProvider from '../Store/GlobalState'

function Layout({ children }) {
  return (
    <DataProvider>
      {children}
    </DataProvider>
  )
}

export default Layout
