import InputField from './parts/inputField';
import AddButton from './parts/addButton';

const AddNewTask = () => {
  return(
    <div>
      <h2>新規タスクの追加</h2>
      <InputField/>
      <AddButton/>
    </div>
  );
} 

export default AddNewTask;