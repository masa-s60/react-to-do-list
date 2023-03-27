const InputField = (props) => {
  return(
    <div className="u-new-task__input">
      <input type="text" value={props.inputTask} onChange={ e => props.setTask(e.target.value)}/>
    </div>
  );
}

export default InputField;