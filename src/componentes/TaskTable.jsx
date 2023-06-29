import { TaskRow } from "./TaskRow"
export const TaskTable = ({tasks, toggleTask}) => {
    return(
<table>
        <thead>
          <tr>
            <th>Lista</th>
          </tr>
        </thead>
        <tbody>
          {
          tasks.map((task) => ( 
            <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
          ))
          }
        </tbody>
      </table>
    )
}