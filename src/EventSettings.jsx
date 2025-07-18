import { Link } from "react-router";

export const EventSettings = ({event}) => {
  const {
    name,
    start_time,
    end_time,
    location
  } = event;

  return (
    <section>
      <h1>{name}</h1>
      <h3>{location}</h3>
      <p>From {start_time} to {end_time}</p>
      
      <Link to=''><button>Edit Settings</button></Link>
    </section>
  )
}