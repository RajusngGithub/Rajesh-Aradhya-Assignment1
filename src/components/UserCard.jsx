import React from 'react'
import './User.css'
function UserCard({
    name,
    email,
    phone,
    company,
    website,
    adress1,
    adress2,
    adress3,
    pincode,
    src
}) {
  return (
    <div className='wrapper'>
        <div className='image-container'>
            <img src={src} alt={`${name}'s avatar`} onError={(e) => { e.target.src = '/default-avatar.png'; }} />
        </div>
        <div className='user-container'>
            <h1>{name}</h1>
            <p className='black'><strong>Email:</strong> {email}</p>
            <p className='black'><strong>Phone:</strong> {phone}</p>
            <p className='black'> <strong>Company:</strong> {company}</p>
            <p className='black'> <strong>Website:</strong> {website}</p>
            <p><strong>Address:</strong> {adress1}, {adress2}, {adress3}, {pincode}</p>
        </div>
    </div>
  )
}

export default UserCard
