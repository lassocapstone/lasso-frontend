import useMutation from "../api/useMutation";
import { useState } from "react";

const AlertEditing = ({ eventData, alertData }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { mutate: edit } = useMutation("PUT", `/events/${eventData.id}/alerts/${alertData.id}`, ["alert"]);
  const { mutate: deleteAlert } = useMutation("DELETE", `/events/${eventData.id}/alerts/${alertData.id}`, ["alert"]);
  //is that the right end point?

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

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
      <h1 onClick={toggleExpand}>Edit an Alert</h1>
      {
        isExpanded &&
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
      }
      <button onClick={() => deleteAlert(alertData)}>Delete Alert</button>
    </>
  )
}

export default AlertEditing;