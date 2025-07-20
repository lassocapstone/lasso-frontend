import useMutation from "../api/useMutation";

const AlertCreation = () => {
  const { mutate: add } = useMutation("POST", "/alert", ["alert"]);

  const addAlert = (formData) => {
    const isOkay = formData.get("is_okay");
    const name = formData.get("name");
    const message = formData.get("message");
    const eventID = formData.get("event_id");
    const recipientID = formData.get("recipient_id");
    const senderID = formData.get("sender_id");
    add({ isOkay, name, message, eventID, recipientID, senderID });
  };

  return (
    <>
      <h1>Create an Alert</h1>
      <form action={addAlert}>
        <label>
          Alert Status - Is Everything Okay?
          <input type="text" name="is_okay" />
        </label>
        <label>
          Alert Name
          <input type="text" name="name" />
        </label>
        <label>
          Alert Message
          <textarea type="text" name="message" rows="10" />
        </label>
        <label>
          Event ID
          <input type="text" name="event_id" />
        </label>
        <label>
          Recipient ID
          <input type="text" name="recipient_id" />
        </label>
        <label>
          Sender ID
          <input type="text" name="sender_id" />
        </label>
        <button>Add Alert</button>
      </form>
    </>
  )
}

export default AlertCreation;