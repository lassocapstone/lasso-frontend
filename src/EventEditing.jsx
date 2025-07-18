import useMutation from "./api/useMutation";
import { useState } from "react";

const EventEditing = ({ eventData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { mutate: edit } = useMutation("PUT", `/events/${eventData.id}/settings`, ["event"]);
  //is this the right endpoint

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

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
      <h1 onClick={toggleExpand}>Edit an Event</h1>
      {
        isExpanded &&
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
      }
    </>
  )
}

export default EventEditing;