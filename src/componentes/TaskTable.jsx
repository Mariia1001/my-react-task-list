import { TaskRow } from "./TaskRow"
export const TaskTable = ({tasks, toggleTask, showCompleted = false}) => {

  const taskTebaleRows = (doneValue) => {

    return(
    tasks
    .filter(task=> task.done == doneValue)
    .map((task) => ( 
      <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
    ))
    )
  }

    return(
      <div>
<table>
        <thead>
          <tr>
            <th>LISTA DE TAREAS</th>
          </tr>
        </thead>
        <tbody>
          {
            taskTebaleRows(showCompleted)
          }
        </tbody>
      </table>
      </div>
    )
}