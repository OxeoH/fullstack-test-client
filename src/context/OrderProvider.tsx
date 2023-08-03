import { ReactNode, createContext, useState } from 'react'

interface IOrder {
  frequency: string
  allergy: string
  cleaning: string
  address: string
  schedule: string
}
const order = {
  frequency: '',
  allergy: '',
  cleaning: '',
  address: '',
  schedule: '',
}
export const OrderContext = createContext({})

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  return <OrderContext.Provider value={useState(order)}>{children}</OrderContext.Provider>
}
