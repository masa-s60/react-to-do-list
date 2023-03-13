export default Title;

function Title(props) {
  if(props.title === "ToDoリスト") {
    return (
      <div>
        <h1>{props.title}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h2>{props.title}</h2>
      </div>
    );
  }
}