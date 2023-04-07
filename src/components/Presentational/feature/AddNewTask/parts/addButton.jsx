import { useContext } from "react";
import { context } from '../../../../../App'
const AddButton = () => {
  const taskListState = useContext(context);
  return(
    <div>
      <button type="text" onClick={taskListState.addTask}>
        追加
      </button>
    </div>
  );
}

export default AddButton;