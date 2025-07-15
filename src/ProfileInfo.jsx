import useQuery from "./api/useQuery";

const ProfileInfo = () => {
  const { data: profileData } = useQuery("/users", "profile");
  const { id, name, account_type: accountType, contact_number: contactNum, role, status, emergency_contact_id: emergencyContactID } = profileData;

  return (
    <>
      {
        profileData &&
        <>
          <h1>Welcome User {name}!</h1>
          <h2>Here is Your User Profile Info</h2>
          <p>User ID: {id}</p>
          <p>Name: {name}</p>
          <p>Account Type: {accountType === 'man' ? 'Manager' :
            accountType === 'org' ? 'Organizer' :
              accountType === 'sub' ? 'Subordinate' : null}</p>
          <p>Contact Number: {`(${contactNum.substring(0, 3)}) ${contactNum.substring(3, 6)}-${contactNum.substring(6, 10)}`}</p>
          {role && <p>`Role: ${role}`</p>}
          <p>Status: {status ? "good" : "bad"}</p>
          <p>Emergency Contact ID: {emergencyContactID}</p>
        </>
      }
    </>
  )
}

export default ProfileInfo;