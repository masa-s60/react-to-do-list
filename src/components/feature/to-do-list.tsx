import { useState, createContext } from "react";
import TaskListDisplay from '../common/molecules/taskListDisplay';
import AddNewTask from '../common/molecules/addNewTask';
import {typeTaskList, checkedButtonStatus, inputTaskStatus, typeContext} from "../../types/types";

export const context = createContext<Partial<typeContext>>({});

function ToDoList() {
  const [checkedButton, changeButton] = useState<checkedButtonStatus>('すべて');
  const [inputTask, setTask] = useState<Partial<inputTaskStatus>>("");
  const [tasks, pushTask] = useState<Partial<typeTaskList>[]>([{comment: 'a', status: '作業中'}]);
  const noValue = /^\s+$/;
  const addTask = (): void => {
    if((inputTask === undefined) || (noValue.test(inputTask))) {
      alert('文字を入力してください');
      return;
    } else {
      pushTask([...tasks, {comment: inputTask, status: '作業中'}]);
      setTask('');
    }
  }

  const taskListItem: typeContext = {
    checkedButton,
    changeButton,
    tasks,
    pushTask,
    addTask
  }

  return(
    <div>
      <h1>ToDoリスト</h1>
      <context.Provider value={taskListItem}>
        <TaskListDisplay/>
        <AddNewTask inputTask={inputTask} setTask={setTask}/>
      </context.Provider>
    </div>
  );
}

export default ToDoList;