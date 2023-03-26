import { useState, useEffect } from "react";
import { useImperativeHandle, forwardRef } from "react";

const InputField = (props, refFunction) => {
  const [inputTask, setTask] = useState('');
  useImperativeHandle(refFunction, () => ({
    removeInputField: () => {
      setTask('');
    },
  }));
  useEffect(() => {
    props.holdTask(inputTask);
  }, [inputTask]);
  return(
    <div className="u-new-task__input">
      <input type="text" value={inputTask} onChange={(e) => {setTask(e.target.value)}}/>
    </div>
  );
}
const WrappedInputField = forwardRef(InputField);

export default WrappedInputField;