import './App.css';
import Title from './components/Presentational/title.jsx'
import WrappedInputField from './components/Presentational/Templates/new-task-input.jsx'
import AddButton from './components/Presentational/Templates/add-button.jsx'
import { useState } from "react";
import { useRef,  useEffect} from "react";

function App() {
  const removeRef = useRef();
  // useEffect(() => {
  //   removeRef.current.removeInputField();
  // }, [removeRef.current]);
  const [inputTask, holdTask] = useState("");
  const [tasks, pushTask] = useState(['a','b']);
  const setTask = {
    addTask : () => {
      pushTask([...tasks, inputTask]);
      console.log(tasks);
      removeRef.current.removeInputField();
    }
  }
  return (
    <div>
      <Title title="ToDoリスト"/>
      <div>
        <label for="all">
          <input id="all" className="p-radio-button" type="radio" name="status" checked/>
          全て
        </label>
        <label for="working">
          <input id="working" className="p-radio-button" type="radio" name="status"/>
          作業中
        </label>
        <label for="complete">
          <input id="complete" className="p-radio-button" type="radio" name="status"/>
          完了
        </label>
      </div>

      <table id="status" className="p-status">
        <thead>
          <tr>
            <td>ID</td>
            <td>コメント</td>
            <p>{tasks}</p>
            <td>状態</td>
          </tr>
        </thead>
        <tbody id="taskBody">
        </tbody>
      </table>

      <Title title="新規タスクの追加"/>
      <WrappedInputField holdTask={holdTask} ref={removeRef}/>
      <AddButton setTask={setTask}/>
    </div>
  );
}

export default App;