import { useContext } from "react";
import { context } from '../../../../../App'
const InputField = () => {
  const taskListState = useContext(context);
  return(
    <div className="u-new-task__input">
      <input type="text" value={taskListState.inputTask} onChange={ e => taskListState.setTask(e.target.value)}/>
    </div>
  );
}

export default InputField;