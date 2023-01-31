function Student(props) {
  console.log(props);

  return (
    <div style={{ backgroundColor: "skyblue", margin: 10 }}>
      <h1> {props.name}</h1>
      <h2>{props.Email}</h2>
      <h4>{props.other.id}</h4>
    </div>
  );
}
export default Student;
