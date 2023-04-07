import { useState, createContext } from "react";
import TaskListDisplay from './components/Presentational/feature/TaskListDisplay/taskListDisplay';
import AddNewTask from './components/Presentational/feature/AddNewTask/addNewTask';
import './styles/App.css';
export const context = createContext();
function App() {
  const [checkedButton, changeButton] = useState('すべて');
  const [inputTask, setTask] = useState("");
  const [tasks, pushTask] = useState([]);

  const addTask = () => {
    if(inputTask === '') {
      console.log('入力がありません');
      return;
    } else {
      pushTask([...tasks, {comment: inputTask, status: '作業中'}]);
      setTask('');
    }
  }

  const taskListState = {
    checkedButton,
    changeButton,
    inputTask,
    setTask,
    tasks,
    pushTask,
    addTask
  }
  
  return (
    <div>
      <h1>ToDoリスト</h1>
      <context.Provider value={taskListState}>
        <TaskListDisplay/>
        <AddNewTask/>
      </context.Provider>
    </div>
  );
}

export default App;