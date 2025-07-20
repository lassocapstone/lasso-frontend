import { useParams } from "react-router";
import useQuery from "../api/useQuery";
import OrganizerView from "./OrganizerView";
import ManagerView from "./ManagerView";

function EventDetails() {
  const { eventId } = useParams();

  const {
    data: event,
    loading: eventLoading,
    error: eventError,
  } = useQuery(`/events/${eventId}`, `events`);

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

  switch (user.account_type) {
    case "org":
      return <OrganizerView event={event} />;
    case "man":
      return <ManagerView event={event} />;
    default:
      return <p>You do not have permission to view this event.</p>;
  }
}

export default EventDetails;
