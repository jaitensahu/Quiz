import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Question from "./Question";
function App() {
  let [result, setResult] = useState([]);
  let [questions, setquestion] = useState("");
  let [timeleft, setTimer]=useState(10);
  let [currentIdx, setCurrentIdx]=useState(0);
  let [quesData, setData]=useState([]);
  let [load, setLoading]=useState("Loading...")
  // let api2="https://opentdb.com/api.php?amount=10&type=multiple&cate&difficulty=easy";
  let data =
    "https://quizapi.io/api/v1/questions?apiKey=A70xUjJWJZukMpnbJAwwuARc0Dx9siYMXfbGPskq&limit=10&difficulty=easy";
    
let [dataArr, setDataArr]=useState([]);
let timer2;
  useEffect(() => {
  try {
    
    const response= fetch(data);
    response.then((res)=>{
      return res.json();
    }).then((res2)=>{
      setLoading("")
      setquestion(res2[currentIdx].question);
      setCurrentIdx((prev)=>prev+1)
      setDataArr((prev)=>[...res2])
      gettingDataArray(res2)
      setData(res2[currentIdx]);
      // console.log(res2);
    })
  } catch (error) {
    console.log(error);
  }
  }, []);

  function gettingDataArray(array){
    let i=1;
    // console.log(array);
    
    let timer=setInterval(()=>{
      setTimer((prev)=>prev=10);
      // setquestion(array[i].question);
      setData(array[i++]);
      setCurrentIdx((prev)=>prev+1);
      if(i==1){
        clearInterval(timer)
        clearInterval(timer2)
      }
    },10000);

    timer2=setInterval(()=>{
      setTimer((prev)=>prev-1)
    },1000)
  }
  function skipQues(idx){
    console.log(dataArr, idx);
    setquestion(dataArr[idx].question);
    // setData(dataArr[idx]);
    setCurrentIdx((prev)=>prev+1);
    setTimer((prev)=>prev=10)
  }

  return <div className="App">
    <div>
      {load==""? <Question data={quesData} question={questions} result={result} idx={currentIdx} timeleft={timeleft} skipFn={skipQues}/>:"Loading..." }
  </div>
  </div>
}

export default App;
