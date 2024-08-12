import React from 'react'

export default function UserActivities({user}) {
  return (
    <div className="user-activities">
      <h1>{user && user.title}</h1>
      <div className="body">
        {user.body}
      </div>
    </div>
  )
}
