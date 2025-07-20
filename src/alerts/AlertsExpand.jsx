import { useState } from "react";

const AlertsExpand = ({ alert }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <li onClick={toggleExpand}>
        <h3>Alert {alert.id}</h3>
        <span>{isExpanded ? '▲' : '▼'}</span>
      </li>
      {isExpanded && (
        <>
          <li>Everything is Okay: {alert.is_okay ? "YES" : "NO"}</li>
          <li>Name: {alert.name}</li>
          <li>Message: {alert.message}</li>
          <li>Event ID: {alert.event_id}</li>
          <li>Sender ID: {alert.sender_id}</li>
        </>
      )}
    </>
  )
}

export default AlertsExpand;