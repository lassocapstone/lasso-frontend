import { useState } from "react";
import useMutation from "../api/useMutation";
import { useParams } from "react-router";

const TasksExpand = ({ task }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {eventId} = useParams();

  const {
    mutate: deleteTask,
    loading,
    error
  } = useMutation(`DELETE`, `/events/${eventId}/tasks/${task.id}`, ["task"]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const removeTask = () => {
    deleteTask();
  }

  return (
    <>
      <li onClick={toggleExpand}>
        <h3>Task: {task.name}</h3>
        <span>{isExpanded ? '▲' : '▼'}</span>
      </li>
      {
        isExpanded && (
          <>
            <li>Start Time: {task.start_time}</li>
            <li>End Time: {task.end_time}</li>
            <li>Location: {task.location}</li>
            <li>Instructions: {task.instructions}</li>
            <button onClick={removeTask}>Mark Task as Complete</button>
          </>
        )
      }
    </>
  )
}

export default TasksExpand;
