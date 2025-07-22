import { Link } from "react-router";
import useQuery from "../api/useQuery";

export default function ManagerView({ event }) {
  const {
    data: alerts,
    loading: alertsLoading,
    error: alertsError,
  } = useQuery(`/events/${event.id}/alerts/`, `alerts`);

  const {
    data: tasks,
    loading: tasksLoading,
    error: tasksError,
  } = useQuery(`/events/${event.id}/tasks`, `tasks`);

  if (alertsLoading || tasksLoading) return <p>Loading event data…</p>;
  if (alertsError || tasksError) return <p>Error loading event info.</p>;

  return (
    <>
      <h1>{event.name}</h1>
      <h2>{event.location}</h2>
      <p>
        {event.start_time} to {event.end_time}
      </p>
      <section>
        <h2>Alerts</h2>
        {!alerts || alerts.length === 0 ? (
          <p>No alerts</p>
        ) : (
          <div>
          
          </div>
        )}
      </section>
      <section>
        <h2>Tasks</h2>
        {!tasks || tasks.length === 0 ? (
          <p>No tasks created yet.</p>
        ) : (
          <ul>
            {tasks.map((task) => (
              <>
                <li key={task.id}>{task.name}</li>
              </>
            ))}
          </ul>
        )}
        <Link to={`./tasks`}>View All Tasks</Link>
      </section>

      <section>
        <h2>Roster</h2>
        <Link to={`./roster`}>View Your Roster</Link>
      </section>

      <div>
        <Link to={`./alerts`}>Create New Alert</Link>
      </div>
    </>
  );
}
