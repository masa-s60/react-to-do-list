import { useContext } from 'react'
import { context } from '../../../../../App'
const SelectButton = () => {
  const taskListState = useContext(context);
  const setRadioButton = (e) => {
    taskListState.changeButton(e.target.value);
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
            checked={item === taskListState.checkedButton}/>{item}
          </label>
        )
      })}
    </div>
  );
}

export default SelectButton;