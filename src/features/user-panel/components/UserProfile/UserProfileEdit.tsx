import React from 'react'
import HeaderContentPanelLayout from '../HeaderContentPanelLayout'
import UserProfileForm from './UserProfileForm'
import Providers from '@/providers/QueryClientProvider'

function UserProfileEdit() {
  return (
    <div className='user-panel-container'>
       <HeaderContentPanelLayout title={"پروفایل کاربری"} desc={null}/>
    <Providers>
    <UserProfileForm/>
    </Providers>
    </div>
  )
}

export default UserProfileEdit