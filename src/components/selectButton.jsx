import { useContext } from 'react'
import { context } from '../App'

const SelectButton = () => {
  const relationTaskListDisplay = useContext(context);
  const setRadioButton = (e) => {
    relationTaskListDisplay.changeButton(e.target.value);
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
            checked={item === relationTaskListDisplay.checkedButton}/>{item}
          </label>
        )
      })}
    </div>
  );
}

export default SelectButton;