import NewTicketForm from '@/features/user-panel/components/Tickets/NewTicketForm'
import Providers from '@/providers/QueryClientProvider'
import React from 'react'

function page() {
  return (
    <Providers>

    <NewTicketForm/>
    </Providers>
  )
}

export default page