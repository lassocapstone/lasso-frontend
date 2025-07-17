import { Link } from "react";
import useQuery from "../api/useQuery";

export default function OrganizerView({ event }) {
  const {
    data: alerts,
    loading: alertsLoading,
    error: alertsError,
  } = useQuery(`/events/${event.id}/alerts`, `alerts`);

  const {
    data: tasks,
    loading: tasksLoading,
    error: tasksError,
  } = useQuery(`/events/${event.id}/tasks`, `tasks`);

  if (alertsLoading || tasksLoading) return <p>Loading event data…</p>;
  if (alertsError || tasksError) return <p>Error loading event info.</p>;

  return (
    <div>
      <h1>{event.name}</h1>

      <p>
        {event.startTime} to {event.endTime} at {event.location}
      </p>

      <section>
        <h2>Alerts</h2>
        {alerts.length === 0 ? (
          <p>No alerts for this event.</p>
        ) : (
          <ul>
            {alerts.map((alert) => (
              <>
                <li key={alert.id}>{alert.name}</li>
                <li>{alert.message}</li>
              </>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2>Tasks</h2>
        {tasks.length === 0 ? (
          <p>No tasks created yet.</p>
        ) : (
          <ul>
            {tasks.map((task) => (
              <>
                <li key={task.id}>{task.name} —</li>
                <li>
                  {task.start_time} to
                  {task.end_time}
                </li>
              </>
            ))}
          </ul>
        )}
        <Link to={``}>View All Tasks</Link>
      </section>

      <section>
        <h2>Roster</h2>
        <Link to={``}>View Event Roster</Link>
      </section>

      <div>
        <Link to={``}>Create New Task</Link>
        <br />
        <Link to={``}>Edit Event Settings</Link>
      </div>
    </div>
  );
}
