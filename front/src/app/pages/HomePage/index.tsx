import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Customers } from '../../components/Customers'

export const HomePage = ({ className }) => {
  return (
    <div className={className}>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>

      <Customers />
    </div>
  )
}
