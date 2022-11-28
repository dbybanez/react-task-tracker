import { Fragment } from "react"

const tasks = [
  {
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true
  },
  {
    id: 2,
    text: 'Meeting at School',
    day: 'Feb 6th at 1:30pm',
    reminder: true
  },
  {
    id: 3,
    text: 'Food Shopping',
    day: 'Feb 5th at 2:30pm',
    reminder: false
  }
]

const Tasks = () => {
  return (
    <Fragment>
      {tasks.map((task) => (
        <h3>{task.text}</h3>
      ))}
    </Fragment>
  )
}

export default Tasks
