import { useState } from "react";
import {useImperativeHandle, forwardRef} from "react";

const InputField = (props, ref) => {
  const [inputTask, setTask] = useState('');
  useImperativeHandle(ref, () => ({
    removeInputField: () => {
      setTask('');
    },
  }));
  props.holdTask(inputTask);
  return(
    <div className="u-new-task__input">
      <input type="text" value={inputTask} onChange={(e) => {setTask(e.target.value)}}/>
    </div>
  );
}
const WrappedInputField = forwardRef(InputField);

export default WrappedInputField;