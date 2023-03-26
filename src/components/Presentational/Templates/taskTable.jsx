import TaskList from "./taskList";

const TaskTable = () => {

  return(
    <div>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>コメント</td>
            <td>状態</td>
          </tr>
        </thead>
        <tbody>
          <TaskList/>
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;
