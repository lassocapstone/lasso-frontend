import { useParams } from "react-router";
import useQuery from "../api/useQuery";
import TasksExpand from "./TasksExpand";

const Tasks = () => {
  const {eventId} = useParams();
  const { data: tasksData } = useQuery(`/events/${eventId}/tasks`, "task");

  return (
    <>
      <h1>List of Tasks</h1>
      {
        tasksData &&
        tasksData.map(task => (
          <ul key={task.id}>
            <TasksExpand task={task} />
          </ul>
        ))
      }
    </>
  )
}

export default Tasks;