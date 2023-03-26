import { useState, useRef, createContext } from "react";
import SelectButton from './components/Presentational/Templates/selectButton.jsx';
import TaskTable from './components/Presentational/Templates/taskTable';
import WrappedInputField from './components/Presentational/Templates/inputField';
import AddButton from './components/Presentational/Templates/add-button.jsx';
import './App.css';

function App() {
  const refInputField = useRef();
  const [checkedButton, changeButton] = useState('すべて');
  const [inputTask, holdTask] = useState("");
  const [tasks, pushTask] = useState([{comment: 'タスク１', status: '作業中'}, {comment: 'タスク２', status: '作業中'}, {comment: 'タスク３', status: '作業中'}]);
  const relationTaskListDisplay = {
    checkedButton,
    changeButton,
    tasks,
    pushTask,
  }
  const addTask = () => {
    if(inputTask === '') {
      console.log('入力がありません');
      return;
    } else {
      const newTasks = [...tasks, {comment: inputTask, status: '作業中'}];
      pushTask(newTasks);
      refInputField.current.removeInputField();
    }
  }

  return (
    <div>
      <h1>ToDoリスト</h1>
      <context.Provider value={relationTaskListDisplay}>
        <SelectButton/>
        <TaskTable/> 
      </context.Provider>
      <h2>新規タスクの追加</h2>
      <WrappedInputField holdTask={holdTask} ref={refInputField}/>
      <AddButton addTask={addTask}/>
    </div>
  );
}

export const context = createContext();
export default App;
