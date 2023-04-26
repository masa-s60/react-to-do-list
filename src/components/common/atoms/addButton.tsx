import { useContext } from "react";
import { context } from '../../feature/to-do-list'
const AddButton = () => {
  const taskListItem = useContext(context);
  
  return(
    <div>
      <button type="button" onClick={taskListItem.addTask}>
        追加
      </button>
    </div>
  );
}

export default AddButton;