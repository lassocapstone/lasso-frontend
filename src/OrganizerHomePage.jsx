import { Link } from "react-router";
import useQuery from "./api/useQuery";

export default function OrganizerHome() {
  const {
    data: user,
    loading: userLoading,
    error: userError,
  } = useQuery("/users", "user");

  const {
    data: events,
    loading: eventsLoading,
    error: eventsError,
  } = useQuery("/events", "events");

  if (userLoading || eventsLoading) return <p>Loading…</p>;
  if (userError || eventsError) return <p>Error loading organizer data.</p>;
  if (!Array.isArray(events)) return <p>Invalid event data.</p>;

  return (
    <div>
      <h1>Welcome {user.name}</h1>
      <Link to="">User Profile</Link>

      <section>
        <h2>Your Events</h2>
        {events.length === 0 ? (
          <p>No events available.</p>
        ) : (
          <ul>
            {events.map((event) => (
              <li key={event.id}>
                <Link to={``}>{event.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <Link to="">Create New Event</Link>
    </div>
  );
}
