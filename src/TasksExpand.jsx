import { useState } from "react";

const TasksExpand = ({ task }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <li onClick={toggleExpand}>
        <h3>Task {task.id}</h3>
        <span>{isExpanded ? '▲' : '▼'}</span>
      </li>
      {
        isExpanded && (
          <>
            <li>Event ID: {task.event_id}</li>
            <li>Name: {task.name}</li>
            <li>Start Time: {task.start_time}</li>
            <li>End Time: {task.end_time}</li>
            <li>Location: {task.location}</li>
            <li>Instructions: {task.instructions}</li>
          </>
        )
      }
    </>
  )
}

export default TasksExpand;
