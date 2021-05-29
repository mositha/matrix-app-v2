const DivBox = (props) => {
  return (
    <div style={props.style}>
      <div>Name: {props.data.name} </div>
      <div>Age: {props.data.age} </div>
      <div>School: {props.data.school}</div>
    </div>
  );
};

export default DivBox;
