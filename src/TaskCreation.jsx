import useMutation from "./api/useMutation";

const TaskCreation = () => {
  const { mutate: add, loading, error } = useMutation("POST", "/tasks", ["task"]);

  const addTask = (formData) => {
    const eventID = formData.get("eventID");
    const name = formData.get("name");
    const startTime = formData.get("startTime");
    const endTime = formData.get("endTime");
    const location = formData.get("location");
    const instructions = formData.get("instructions");
    add({ eventID, name, startTime, endTime, location, instructions });
  };

  return (
    <>
      <h1>Create a Task</h1>
      <form action={addTask}>
        <label>
          Event ID
          <input type="text" name="eventID" />
        </label>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <label>
          Start Time
          <input type="text" name="startTime" />
        </label>
        <label>
          End Time
          <input type="text" name="endTime" />
        </label>
        <label>
          Location
          <input type="text" name="location" />
        </label>
        <label>
          Instructions
          <textarea type="text" name="instructions" rows="10" />
        </label>
        <button>{loading ? "Adding..." : "Add Task"}</button>
        {error && <output>{error}</output>}
      </form>
    </>
  )
}

export default TaskCreation;