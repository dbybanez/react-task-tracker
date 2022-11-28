import { Fragment } from "react"
import Task from './Task'

const Tasks = ({ tasks }) => {
  return (
    <Fragment>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </Fragment>
  )
}

export default Tasks
