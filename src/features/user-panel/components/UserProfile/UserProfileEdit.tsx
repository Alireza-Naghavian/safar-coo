import React from 'react'
import HeaderContentPanelLayout from '../HeaderContentPanelLayout'
import UserProfileForm from './UserProfileForm'

function UserProfileEdit() {
  return (
    <div className='user-panel-container'>
       <HeaderContentPanelLayout title={"پروفایل کاربری"} desc={null}/>
       <UserProfileForm/>
    </div>
  )
}

export default UserProfileEdit