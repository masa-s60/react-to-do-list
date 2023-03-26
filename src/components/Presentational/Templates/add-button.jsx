const AddButton = (props) => {
  console.log('ボタンクリック');
  return(
    <div>
      <button type="text" onClick={props.addTask}>
      追加
      </button>
    </div>
  );
}
  
export default AddButton;