import useMutation from "./api/useMutation";
import useQuery from "./api/useQuery";
import { useParams } from "react-router";

//should eventData be passed down through props? or just the usequery data then no props? i don't know 
const EventEditing = () => {
  // const { id } = useParams();
  // const { data: taskData } = useQuery(`/events/${id}/tasks`, "task");
  // const { mutate: edit } = useMutation("PUT", `/events/${id}/tasks`, ["task"]);

  const editEvent = (formData) => {
    const name = formData.get("name");
    const startTime = formData.get("start_time");
    const endTime = formData.get("end_time");
    const location = formData.get("location");
    const organizerId = formData.get("organizer_id");
    edit({ name, startTime, endTime, location, organizerId });
  };

  return (
    <>
      <h1>Edit an Event</h1>
      <form action={editEvent}>
        <label>Name:
          <input type="text" name="name" value={eventData.name} />
        </label>
        <label>Start Time:
          <input type="text" name="start_time" value={eventData.start_time} />
        </label>
        <label>End Time:
          <input type="text" name="end_time" value={eventData.end_time} />
        </label>
        <label>Location:
          <input type="text" name="location" value={eventData.location} />
        </label>
        <label>Organizer ID:
          <input type="text" name="organizer_id" value={eventData.organizer_id} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default EventEditing;