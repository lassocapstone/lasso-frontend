import useQuery from "./api/useQuery";
import TasksExpand from './TasksExpand';

const Tasks = () => {
  const { data: tasksData } = useQuery('/tasks', "task");

  return (
    <>
      <h1>List of Tasks</h1>
      {
        tasksData &&
        tasksData.map(task => (
          <ul key={task.id}>
            <TasksExpand task={task} />
          </ul>
        ))
      }
    </>
  )
}

export default Tasks;