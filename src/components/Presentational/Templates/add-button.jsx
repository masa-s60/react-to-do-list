const AddButton = (props) => {
  return(
    <div>
      <button type="text" onClick={props.setTask.addTask}>
      追加
      </button>
    </div>
  );
}
  
export default AddButton;