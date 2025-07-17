import useMutation from "./api/useMutation";
import useQuery from "./api/useQuery";
import { useParams } from "react-router";

//should alertData be passed down through props? or just the usequery data then no props? i don't know 
const AlertEditing = () => {
  // const { id } = useParams();
  // const { data: taskData } = useQuery(`/events/:id/alerts/:id`, "alert");
  // const { mutate: edit } = useMutation("PUT", `/events/:id/alerts/:id`, ["alert"]);

  const editAlert = (formData) => {
    const isOkay = formData.get("is_okay");
    const name = formData.get("name");
    const message = formData.get("message");
    const eventId = formData.get("event_id");
    const recipientId = formData.get("recipient_id");
    const senderId = formData.get("sender_id");
    edit({ isOkay, name, message, eventId, recipientId, senderId });
  };

  return (
    <>
      <h1>Edit an Alert</h1>
      <form action={editAlert}>
        <label>Alert Status - Is Everything Okay?
          <input type="text" name="is_okay" value={alertData.is_okay} />
        </label>
        <label>Name:
          <input type="text" name="name" value={alertData.name} />
        </label>
        <label>Message:
          <input type="text" name="message" value={alertData.message} />
        </label>
        <label>Event ID:
          <input type="text" name="event_id" value={alertData.event_id} />
        </label>
        <label>Recipient ID:
          <input type="text" name="recipient_id" value={alertData.recipient_id} />
        </label>
        <label>Sender ID:
          <input type="text" name="sender_id" value={alertData.sender_id} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default AlertEditing;