import { useNavigate } from "react-router";
import useMutation from "../api/useMutation";

const EventEditing = ({ eventData }) => {
  const { mutate: edit } = useMutation("PUT", `/events/${eventData.id}/settings`, ["event"]);
  const { mutate: deleteEvent } = useMutation("DELETE", `/events/${eventData.id}/settings`, ["event"]);
  const navigate = useNavigate();

  const editEvent = (formData) => {
    const name = formData.get("name");
    const startTime = formData.get("start_time");
    const endTime = formData.get("end_time");
    const location = formData.get("location");
    edit({ name, startTime, endTime, location });
    navigate(`/events/${eventData.id}`);
  };

  return (
    <>
      <form action={editEvent}>
        <label>Name:
          <input type="text" name="name" defaultValue={eventData.name} />
        </label>
        <label>Start Time:
          <input type="text" name="start_time" defaultValue={eventData.start_time} />
        </label>
        <label>End Time:
          <input type="text" name="end_time" defaultValue={eventData.end_time} />
        </label>
        <label>Location:
          <input type="text" name="location" defaultValue={eventData.location} />
        </label>
        <label>Organizer ID:
          <input type="text" name="organizer_id" defaultValue={eventData.organizer_id} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => deleteEvent(eventData)}>Delete Event</button>
    </>
  )
}

export default EventEditing;