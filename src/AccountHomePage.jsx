//use actual event name when the endpoint is available
import useQuery from "./api/useQuery";
import Tasks from "./Tasks";
import { Link } from "react-router";

const AccountHomePage = () => {
  const { data: userData } = useQuery("/users", "user");
  const { data: eventsData } = useQuery("/events", "event");

  return (
    <>
      {
        userData &&
          userData.account_type === "org" ?
          <>
            <h1>Welcome Organizer!</h1>
            <h1>Current Event: {eventsData.name}</h1>
            <h1>Alerts</h1>
            <Link to="/"><button>Event Settings</button></Link>
            {/* Insert event settings route */}
          </>
          :
          userData.account_type === "man" ?
            <>
              <h1>Welcome Manager!</h1>
              <h1>Current Event: {eventsData.name}</h1>
              <h1>Your Roster</h1>
              <Tasks />
            </>
            :
            userData.account_type === "sub" ?
              <>
                <h1>Welcome Subordinate!</h1>
                <h1>Current Event: {eventsData.name}</h1>
                <Tasks />
              </>
              :
              <h1>You need an account type.</h1>
      }
    </>
  )
}

export default AccountHomePage;
