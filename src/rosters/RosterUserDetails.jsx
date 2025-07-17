import { useParams } from "react-router"
import useQuery from "../api/useQuery";

export const RosterUserDetails = () => {
  const {eventId, userId} = useParams();

  const {
    data: user,
    loading,
    error
  } = useQuery(`/events/${eventId}/roster/${userId}`, `detailedUser`);

  if(loading || !user) return <p>Loading...</p>
  if(error) return <p>Sorry! {error}</p>

  console.log(user);

  return (
    <>
      <h1>{user.name}</h1>
      {user.role && <h3>{user.role}</h3>}
      <p>Phone number: {user.contact_number}</p>
    </>
  )
}