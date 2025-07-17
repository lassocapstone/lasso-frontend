import { useParams } from "react-router";
import useQuery from "../api/useQuery"
import { RosterMemberDisplay } from "./RosterMemberDisplay";

export const Roster = () => {
  const {eventId} = useParams();

  const {
    data: roster,
    loading,
    error
  } = useQuery(`/events/${eventId}/roster`, `roster`);

  if (loading || !roster) return <p>Loading...</p>
  if (error) return <p>Sorry! {error}</p> 

  let managerDetails;
  if(roster.managers) {
      managerDetails =
        <> 
          <h1>Managers</h1>
          {roster.managers.map((manager) => {
            return <RosterMemberDisplay member={manager} />
          })}
        </>
        }

  return (
    <>
      {managerDetails}
      <h1>Subordinates</h1>
        {roster.subordinates.map((subordinate) => {
        return <RosterMemberDisplay member={subordinate} />
      })}
    </>
  )
}