import useQuery from "../api/useQuery";

const ProfileInfo = () => {
  const { 
    data: profileData,
    loading,
    error } = useQuery("/users", "profile");

    if(loading) return <p>Loading...</p>
    if(error) return <p>Sorry! {error}</p>
    if(!profileData) return <p>That user does not exist.</p>

  return (
    <>
      {
        profileData &&
        <>
          <h1>Welcome {profileData.name}!</h1>
          <h2>Here is Your User Profile Info</h2>
          <p>User ID: {profileData.id}</p>
          <p>Name: {profileData.name}</p>
          <p>Account Type: {profileData.account_type === 'man' ? 'Manager' :
            profileData.account_type === 'org' ? 'Organizer' :
              profileData.account_type === 'sub' ? 'Subordinate' : null}</p>
          <p>Contact Number: {`(${profileData.contact_number.substring(0, 3)}) ${profileData.contact_number.substring(3, 6)}-${profileData.contact_number.substring(6, 10)}`}</p>
          {profileData.role && <p>`Role: ${profileData.role}`</p>}
          <p>Status: {profileData.status ? "good" : "bad"}</p>
          <p>Emergency Contact ID: {profileData.emergency_contact_id}</p>
        </>
      }
    </>
  )
}

export default ProfileInfo;