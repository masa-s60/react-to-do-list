import { useContext } from 'react'
import { context } from '../../feature/to-do-list'
import {checkedButtonStatus} from "../../../types/types";

const SelectButton = () => {
  const taskListItem = useContext(context);
  const setRadioButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    taskListItem.changeButton?.(e.target.value as checkedButtonStatus);
  }
  const radioButtons = ['すべて', '作業中', '完了'];
  return(
    <div>
      {radioButtons.map( (item) => {
        return(
          <label key={item} htmlFor={item}>
            <input id={item} 
            className="p-radio-button" 
            type="radio" 
            onChange={ e => setRadioButton(e)} 
            value={item} 
            checked={item === taskListItem.checkedButton}/>{item}
          </label>
        )
      })}
    </div>
  );
}

export default SelectButton;