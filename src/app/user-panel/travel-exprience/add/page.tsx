import AddExprienceForm from '@/features/user-panel/components/travelExpriences/AddExprienceForm'
import Providers from '@/providers/QueryClientProvider'
import React from 'react'

function AddExprience() {
  return (
  <Providers>
      <AddExprienceForm/>
  </Providers>
  )
}

export default AddExprience