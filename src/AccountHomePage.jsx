//use actual event name when the endpoint is available
import useQuery from "./api/useQuery";
import ManagerView from "./EventDetails/ManagerDetails";
import Tasks from "./Tasks";
import { Link } from "react-router";
import OrganizerHome from "./OrganizerHomePage";
const AccountHomePage = () => {
  const { data: userData } = useQuery("/users", "user");
  const { data: eventsData } = useQuery("/events", "event");
  if (!userData) return <div>Loading user...</div>;
  if (!eventsData) return <div>Loading event...</div>;
  return (
    <>
      {userData && userData.account_type === "org" ? (
        <OrganizerHome />
      ) : userData.account_type === "man" ? (
        <ManagerView />
      ) : userData.account_type === "sub" ? (
        <>
          <h1>Welcome Subordinate!</h1>
          <h1>Current Event: {eventsData.name}</h1>
          <Tasks />
        </>
      ) : (
        <h1>You need an account type.</h1>
      )}
    </>
  );
};

export default AccountHomePage;
