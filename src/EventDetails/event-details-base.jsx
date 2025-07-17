import { useParams } from "react-router";
import useQuery from "../api/useQuery";
import OrganizerView from "./OrganizerDetails";
//import ManagerView;

function EventDetails() {
  const { id } = useParams();

  const {
    data: event,
    loading: eventLoading,
    error: eventError,
  } = useQuery(`/events/${id}`, `events`);

  const {
    data: user,
    loading: userLoading,
    error: userError,
  } = useQuery(`/users`, "user");

  if (eventLoading || userLoading) return <p>Loading…</p>;
  if (eventError || userError) {
    console.error("Error:", eventError || userError);
    return <p>Error loading event or user info.</p>;
  }
  if (!event) return <p>You do not have permission to view this event.</p>;

  console.log(user);
  console.log(event);
  console.log(id);
  return <OrganizerView event={event} />;
  // switch (user.account_type) {
  //   case "org":
  //     return <OrganizerView />;
  //   case "man":
  //     //return <ManagerView />;
  //     return "in progress";
  //   default:
  //     return <p>You do not have permission to view this event.</p>;
  // }
}

export default EventDetails;
