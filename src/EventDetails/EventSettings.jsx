import { useState } from "react";
import EventEditing from "./EventEditing";
import useQuery from "../api/useQuery";
import { useParams } from "react-router";

export const EventSettings = () => {
  const [isEditing, setIsEditing] = useState(false);
  const {eventId} = useParams();

  const changeEdit = () => {
    setIsEditing(!isEditing);
  }

  const {
    data: event,
    loading,
    error
  } = useQuery(`/events/${eventId}/settings`, "current-event");

  if (loading || !event) return <p>Loading...</p>
  if (error) return <p>Sorry! {error}</p>

  const {
    name,
    start_time,
    end_time,
    location
  } = event;

  return (
    <>
      {!isEditing ? (
      <section>
        <h1>{name}</h1>
        <h3>{location}</h3>
        <p>From {start_time} to {end_time}</p>
        
        <button onClick={changeEdit}>Edit Settings</button>
      </section>
      ) 
      :
      <EventEditing eventData={event}/>}
    </>
  )
}