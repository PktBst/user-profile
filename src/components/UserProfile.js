import { useState,useEffect } from "react";
import UserActivities from "./UserActivities";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const {id} = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const userProfile= await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const userData = await userResponse.json()
        const userProfileData= await userProfile.json()
        setProfile(userProfileData)
        setUser(userData)
        setLoading(false)
        console.log(user)
        console.log(profile)
      } catch (error) {
        setError('Failed to fetch data')
        setLoading(false)
      }
    };

    fetchData();
  }, [])

  if(!user || !profile) return (
    <div className="user-profile">
      Loading...
    </div>
  )
  return (
    <div>
      <div className="user-profile">
        <h1>{profile.username} {profile.id}</h1>
        <h3>{profile.name}</h3>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone:</strong> {profile.phone}</p>
        <p><strong>Website:</strong> <a href={`http://${profile.website}`} target="_blank" rel="noopener noreferrer">{profile.website}</a></p>
        <h3>Address</h3>
        <p>
            <strong>Street:</strong> {profile.address.street}, {profile.address.suite}<br/>
            <strong>City:</strong> {profile.address.city}<br/>
            <strong>Zipcode:</strong> {profile.address.zipcode}<br/>
            <strong>Geo:</strong> Lat: {profile.address.geo.lat}, Lng: {profile.address.geo.lng}
        </p>
        <h3>Company</h3>
        <p>
            <strong>Name:</strong> {profile.company.name}<br/>
            <strong>CatchPhrase:</strong> {profile.company.catchPhrase}<br/>
            <strong>Business:</strong> {profile.company.bs}
        </p>
      </div>

      <UserActivities user={user}/>
      {console.log(user)}
    </div>
  );
};

export default UserProfile;
