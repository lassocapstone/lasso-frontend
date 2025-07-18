import useMutation from "./api/useMutation";
import { useState } from "react";

const TaskEditing = ({ eventData, taskData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { mutate: edit } = useMutation("PUT", `/events/${eventData.id}/tasks/${taskData.id}`, ["task"]);
  const { mutate: deleteTask } = useMutation("DELETE", `/events/${eventData.id}/tasks/${taskData.id}`, ["task"]);
  // is this the right endpoint

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

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
      <h1 onClick={toggleExpand}>Edit a Task</h1>
      {
        isExpanded &&
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
      }
      <button onClick={() => deleteTask(taskData)}>Delete Task</button>
    </>
  )
}

export default TaskEditing;