import useMutation from "./api/useMutation";
import useQuery from "./api/useQuery";
import { useParams } from "react-router";

//should taskData be passed down through props? or just the usequery data then no props? i don't know 
const TaskEditing = () => {
  // const { id } = useParams();
  // const { data: taskData } = useQuery(`/events/${id}/tasks`, "task");
  // const { mutate: edit } = useMutation("PUT", `/events/${id}/tasks`, ["task"]);

  const editTask = (formData) => {
    const eventID = formData.get("eventID");
    const name = formData.get("name");
    const startTime = formData.get("startTime");
    const endTime = formData.get("endTime");
    const location = formData.get("location");
    const instructions = formData.get("instructions");
    edit({ eventID, name, startTime, endTime, location, instructions });
  };

  return (
    <>
      <h1>Edit a Task</h1>
      <form action={editTask}>
        <label>Event ID:
          <input type="text" name="eventID" value={taskData.event_id} />
        </label>
        <label>Name:
          <input type="text" name="name" value={taskData.name} />
        </label>
        <label>Start Time:
          <input type="text" name="startTime" value={taskData.start_time} />
        </label>
        <label>End Time:
          <input type="text" name="endTime" value={taskData.end_time} />
        </label>
        <label>Location:
          <input type="text" name="location" value={taskData.location} />
        </label>
        <label>Instructions:
          <input type="text" name="instructions" value={taskData.instructions} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default TaskEditing;