import { useContext } from 'react'
import { context } from '../../../../../App'
const TaskList = () => {
  const taskListState = useContext(context);
  const deleteTask = (targetIndex) => {
    taskListState.pushTask(
      taskListState.tasks.filter( (task, index) => {
        return index !== Number(targetIndex);
      })
    );
  }
  const changeTaskStatus = (index) => {
    if(taskListState.tasks[index].status === '作業中') {
      taskListState.tasks[index].status = '完了';
      taskListState.pushTask([...taskListState.tasks]);  
    } else {
      taskListState.tasks[index].status = '作業中';
      taskListState.pushTask([...taskListState.tasks]);  
    }
  }
  const displayTask = (task, index) => {
    return <tr key={index}>
      <td>{index}</td>
      <td>{task.comment}</td>
      <td>
        <button onClick={ () => changeTaskStatus(index)}>{task.status}</button>
        <button onClick={ () => {deleteTask(index)}}>削除</button>
      </td>
    </tr>
  }

  if(taskListState.checkedButton === 'すべて') {
    return Object.keys(taskListState.tasks).map( (index) => {
      return displayTask(taskListState.tasks[index], index);
    });
  } else if(taskListState.checkedButton === '作業中') {
    return Object.keys(taskListState.tasks).map( (index) => {
      if(taskListState.tasks[index].status === '作業中') {
        return displayTask(taskListState.tasks[index], index);
      }
    });
  } else if(taskListState.checkedButton === '完了') {
    return Object.keys(taskListState.tasks).map( (index) => {
      if(taskListState.tasks[index].status === '完了') {
        return displayTask(taskListState.tasks[index], index);
      }
    });
  }
}

export default TaskList;