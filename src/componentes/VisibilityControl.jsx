export const VisibilityControl = ({isChecked, setShowCompleted, cleanTasks}) => {
    const handleDelete = () => {
       if (window.confirm('¿ESTA SEGURO DE QUERER ELIMINARLO?')){
        cleanTasks()
       }
    }

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setShowCompleted(e.target.checked)}
      />{" "}
      <label> TAREAS REALIZADAS</label>

      <button onClick={handleDelete}>
        LIMPIAR
      </button>
    </div>
  );
};
