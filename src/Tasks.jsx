import useQuery from "./api/useQuery";
import TasksExpand from './TasksExpand';

const Tasks = () => {
  const { data: tasksData } = useQuery('/tasks', "task");

  return (
    <>
      <h2>List of Tasks</h2>
      {
        tasksData &&
          tasksData.length ?
          tasksData.map(task => (
            <ul key={task.id}>
              <TasksExpand task={task} />
            </ul>
          ))
          :
          <p>You have no tasks.</p>
      }
    </>
  )
}

export default Tasks;