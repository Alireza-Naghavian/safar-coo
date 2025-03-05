import Ticket from '@/features/user-panel/components/Tickets/Ticket'
import Providers from '@/providers/QueryClientProvider'
import React from 'react'
type Params_T={
  ticketId:string
}
async function page({params}:{params:Params_T}) {
  const {ticketId} = await params
  return (
    <Providers>
      <Ticket ticketId={ticketId}/>
    </Providers>
  )
}

export default page