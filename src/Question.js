import "./Question.css";

const Question = (props) => {
  // console.log(props);
  function veryFn(){

  }
  return (
    <div>
      <h2>Question {props.idx}</h2>
      <p>{props.question}</p>
      <input onClick={veryFn} type="checkbox" id="checkbox1" name="checkbox1" />
      <label for="checkbox1">Checkbox 1</label>
      <br />

      <input  onClick={veryFn} type="checkbox" id="checkbox2" name="checkbox2" />
      <label for="checkbox2">Checkbox 2</label>
      <br />

      <input onClick={veryFn} type="checkbox" id="checkbox3" name="checkbox3" />
      <label for="checkbox3">Checkbox 3</label>
      <br />

      <input onClick={veryFn} type="checkbox" id="checkbox4" name="checkbox4" />
      <label for="checkbox4">Checkbox 4</label>
      <br />
      <p>Time left {props.timeleft} seconds</p>
      <button onClick={() => {props.skipFn(props.idx)}}>Skip Question</button>
    </div>
  );
};

export default Question;
