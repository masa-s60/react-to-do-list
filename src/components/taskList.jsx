import { useContext } from 'react'
import { context } from '../App'

const TaskList = () => {
  const relationTaskListDisplay = useContext(context);
  const deleteTask = (targetIndex) => {
    relationTaskListDisplay.pushTask(
      relationTaskListDisplay.tasks.filter( (task, index) => {
        return index !== Number(targetIndex);
      })
    );
  }
  const changeTaskStatus = (index) => {
    if(relationTaskListDisplay.tasks[index].status === '作業中') {
      relationTaskListDisplay.tasks[index].status = '完了';
      relationTaskListDisplay.pushTask([...relationTaskListDisplay.tasks]);  
    } else {
      relationTaskListDisplay.tasks[index].status = '作業中';
      relationTaskListDisplay.pushTask([...relationTaskListDisplay.tasks]);  
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

  if(relationTaskListDisplay.checkedButton === 'すべて') {
    return Object.keys(relationTaskListDisplay.tasks).map( (index) => {
      return displayTask(relationTaskListDisplay.tasks[index], index);
    });
  } else if(relationTaskListDisplay.checkedButton === '作業中') {
    return Object.keys(relationTaskListDisplay.tasks).map( (index) => {
      if(relationTaskListDisplay.tasks[index].status === '作業中') {
        return displayTask(relationTaskListDisplay.tasks[index], index);
      }
    });
  } else if(relationTaskListDisplay.checkedButton === '完了') {
    return Object.keys(relationTaskListDisplay.tasks).map( (index) => {
      if(relationTaskListDisplay.tasks[index].status === '完了') {
        return displayTask(relationTaskListDisplay.tasks[index], index);
      }
    });
  }
}

export default TaskList;