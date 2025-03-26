import TransitionRoute from '@/components/organisms/motions/TransitionRoute/TransitionRoute'
import { ChildrenProps } from '@/types/global.t'
import React from 'react'

function template({children}:ChildrenProps) {
  return (
    <TransitionRoute>{children}</TransitionRoute>
  )
}

export default template