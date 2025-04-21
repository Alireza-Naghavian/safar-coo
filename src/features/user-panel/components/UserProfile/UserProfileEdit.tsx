import React from 'react'
import HeaderContentPanelLayout from '../HeaderContentPanelLayout'
import UserProfileForm from './UserProfileForm'
import Providers from '@/providers/QueryClientProvider'
import BackLink from '@/components/atoms/buttons&links/BackLink'

function UserProfileEdit() {
  return (
    <div className='user-panel-container'>
       <HeaderContentPanelLayout title={"پروفایل کاربری"} desc={null}>
       <BackLink target="/user-panel" />
       </HeaderContentPanelLayout>
    <Providers>
    <UserProfileForm/>
    </Providers>
    </div>
  )
}

export default UserProfileEdit