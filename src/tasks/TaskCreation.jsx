import { useParams } from "react-router";
import useMutation from "../api/useMutation";

const TaskCreation = () => {
  const {eventId} = useParams();
  const { mutate: add, loading, error } = useMutation("POST", `/events/${eventId}/tasks`, ["task"]);

  const addTask = (formData) => {
    const name = formData.get("name");
    const startTime = formData.get("startTime");
    const endTime = formData.get("endTime");
    const location = formData.get("location");
    const instructions = formData.get("instructions");
    add({ eventId, name, startTime, endTime, location, instructions });
  };

  return (
    <>
      <h1>Create a Task</h1>
      <form action={addTask}>
        <label>
          Name
          <input type="text" name="name" placeholder="Task Name" required/>
        </label>
        <label>
          Start Time
          <input type="datetime-local" name="startTime" required/>
        </label>
        <label>
          End Time
          <input type="datetime-local" name="endTime" required/>
        </label>
        <label>
          Location
          <input type="text" name="location" required/>
        </label>
        <label>
          Instructions
          <input type="text" name="instructions" required/>
        </label>
        <button>{loading ? "Adding..." : "Add Task"}</button>
        {error && <output>{error}</output>}
      </form>
    </>
  )
}

export default TaskCreation;