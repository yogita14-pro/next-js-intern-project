'use client'
import React from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import client from './apolloClient';
export default function Providers({children}:{ children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>{children}</ApolloProvider>
  )
}

