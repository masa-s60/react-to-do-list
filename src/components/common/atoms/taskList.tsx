import { useContext } from 'react'
import { context } from '../../feature/to-do-list'
import { typeTaskList, typeContext } from "../../../types/types";

const TaskList = () => {
  const {tasks} = useContext(context) as Required<typeContext>;
  const {pushTask} = useContext(context) as Required<typeContext>;
  const {checkedButton} = useContext(context) as Required<typeContext>;
  const taskListItem = useContext(context) as Required<typeContext>;

  const deleteTask = (targetIndex: number) => {
    pushTask(
      taskListItem.tasks.filter( (task, index) => {
        return index !== Number(targetIndex);
      })
    );
  }

  const changeTaskStatus = (index: number) => {
    if(tasks[index].status === '作業中') {
      tasks[index].status = '完了';
      pushTask([...tasks]);  
    } else {
      tasks[index].status = '作業中';
      pushTask([...tasks]);  
    }
  }

  const displayTask = (task: Partial<typeTaskList>, index: number) => {
    return <tr key={index}>
      <td>{index}</td>
      <td>{task.comment}</td>
      <td>
        <button onClick={ () => changeTaskStatus(index)}>{task.status}</button>
        <button onClick={ () => deleteTask(index)}>削除</button>
      </td>
    </tr>
  }

  if(checkedButton === 'すべて') {
    return(
      <>
        {Object.keys(tasks).map( (index) => {
          const numIndex = Number(index);
          return displayTask(tasks[numIndex], numIndex)})
        }
      </>
    );  
  } else if(checkedButton === '作業中') {
    return(
      <>
        {Object.keys(tasks).map( (index) => {
          const numIndex = Number(index);
          if(tasks[numIndex].status === '作業中') return displayTask(tasks[numIndex], numIndex)})
        }
      </>
    ); 
  } else {
    return(
      <>
        {Object.keys(tasks).map( (index) => {
          const numIndex = Number(index);
          if(tasks[numIndex].status === '完了') return displayTask(tasks[numIndex], numIndex)})
        }
      </>
    ); 
  }
}

export default TaskList;