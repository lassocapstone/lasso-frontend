import { useNavigate } from "react-router";
import useMutation from "../api/useMutation";

const EventCreate = ({ eventData }) => {
  const { 
    mutate: add,
    loading,
    error } = useMutation("POST", `/events`, ["event"]);

  const navigate = useNavigate();

  const addEvent = (formData) => {
    const name = formData.get("name");
    const startTime = formData.get("start_time");
    const endTime = formData.get("end_time");
    const location = formData.get("location");
    add({ name, startTime, endTime, location });
    navigate(`/account`);
  };

  return (
    <>
      {
        <form action={addEvent}>
          <label>Name:
            <input type="text" name="name" placeholder="Event Name" required/>
          </label>
          <label>Start Time:
            <input type="datetime-local" name="start_time" required/>
          </label>
          <label>End Time:
            <input type="datetime-local" name="end_time" required/>
          </label>
          <label>Location:
            <input type="text" name="location" placeholder="Event Location" required/>
          </label>
          <button type="submit">{!loading ? `Submit` : `Loading...`}</button>
        </form>
      }
    </>
  )
}

export default EventCreate;