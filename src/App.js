import { useState, createContext } from "react";
import SelectButton from './components/selectButton';
import TaskTable from './components/taskTable';
import InputField from './components/inputField';
import AddButton from './components/add-button';
import './App.css';

function App() {
  const [checkedButton, changeButton] = useState('すべて');
  const [inputTask, setTask] = useState("");
  const [tasks, pushTask] = useState([]);
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
      pushTask([...tasks, {comment: inputTask, status: '作業中'}]);
      setTask('');
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
      <InputField setTask={setTask} inputTask={inputTask}/>
      <AddButton addTask={addTask}/>
    </div>
  );
}

export const context = createContext();
export default App;
