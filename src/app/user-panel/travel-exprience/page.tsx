import Expriences from '@/features/user-panel/components/travelExpriences/Expriences'
import Providers from '@/providers/QueryClientProvider'
import React from 'react'

function app() {
  return (
    <Providers>
          <Expriences/>
    </Providers>
  )
}

export default app