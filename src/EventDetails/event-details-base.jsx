import { useParams } from "react-router";
import useQuery from "../api/useQuery";
import OrganizerView from "./OrganzierDetails";
//import ManagerView;

export default function EventDetails() {
  const { id } = useParams();
  const { data: event } = useQuery(`/events/${id}`, `event`);
  const { data: user } = useQuery(`/auth/me`, "user");

  switch (user.account_type) {
    case "org":
      return <OrganizerView />;
    case "man":
      //return <ManagerView />;
      return "in progress";
    default:
      return <p>You do not have permission to view this event.</p>;
  }
}
