import { useState } from 'react'
import useUserData from './hooks/useUserData'
import UserCard from './components/UserCard';
import './App.css'
function App() {
const { userDetails, isLoading, error } = useUserData();
  if (isLoading) return <div className="spinner"></div>;
if (error) return <div className="error">Something went wrong 😢 <button className='refresh-button' onClick={() => window.location.reload()}>Retry</button></div>;
  return (
    <>
      <h1 className='profile'>User Profiles</h1>
      <ul>
        {
          userDetails.map((user) => (
            <li key={user.id}>
              <UserCard name={user.name} email={user.email} phone={user.phone} company={user.company["name"]}
                website={user.website} adress1={user.address["street"]} adress2={user.address["suite"]} adress3={user.address["city"]} pincode={user.address["zipcode"]}
                src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
              //https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}(for different icons we can use this)
              />
            </li>
          ))
        }
      </ul>

    </>
  )
}

export default App
