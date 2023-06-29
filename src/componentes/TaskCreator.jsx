import { useState} from "react";

export const TaskCreator = ({ createNewTask }) => {
  //console.log(props)
  const [newTaskName, setNewTaskName] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingresa nueva tarea"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />

      <button>Agregar</button>
    </form>
  );
};

export default TaskCreator;
