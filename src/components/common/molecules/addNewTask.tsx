import { FC } from "react";
import InputField from '../atoms/inputField';
import AddButton from '../atoms/addButton';
import { useStateProps } from "../../../types/types";

const AddNewTask: FC<useStateProps> = (props) => {
  return(
    <div>
      <h2>新規タスクの追加</h2>
      <InputField inputTask={props.inputTask} setTask={props.setTask}/>
      <AddButton/>
    </div>
  );
} 

export default AddNewTask;