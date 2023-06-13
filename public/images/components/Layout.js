import React from 'react'
import DataProvider from '../Store/GlobalState'
import SecondaryHeader from './SecondaryHeader'
import Footer from './templates/Footer'
import Header from './templates/Header'

function Layout({ children }) {
  return (
    <DataProvider>
      <Header />
      {children}
    </DataProvider>
  )
}

export default Layout
