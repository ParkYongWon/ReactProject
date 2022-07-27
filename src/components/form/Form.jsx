import React from "react";
import { useState } from "react";
import Todo from "../todo/Todo";
// import List from "../list/List";

import "./style.css";

function Form() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [count, setCount] = useState(2);
  const [allTarget, setAllTarget] = useState([{id:10, text:"김삿갓", title:"기본값", isDone:false}]);

  //   const [allTarget, setAllTarget] = useState([
  //     {
  //     id: 100,
  //     title: 'Study React JS!',
  //     text: 'useState, props...'
  //     },
  //     ]);

  const onChangeTitle = (event) => setTitle(event.target.value);
  const onChangeBody = (event) => setText(event.target.value);
  //   const onChangeAll = (event) => setAllTarget(event.target);
//   const onChangeAll = () => {
//     setAllTarget([...allTarget, { id: allTarget.length, title, text }]);
//   };

  // console.log(allTarget)

  const onSubmit = (event) => {
    event.preventDefault();
    if (title === ""|| text ==="") {
        alert("둘다쓰세요")
      return;
    }
    setCount (count+ 1)
    setAllTarget([...allTarget, { id: count, title:title, text:text, isDone: false}]);

    setTitle("");
    setText("");


    // setAllTarget({title, text})

    // console.log(allTarget)

    // setTitles(currentArray => [title, ...currentArray]);
    // setTexts(currentArray => [text, ...currentArray]);
  };

  //   console.log(title, text, allTarget);

  return (
    <div className="form">
      <form>
        <label className="labels" >제목</label>
        <input className="inputbox" onChange={onChangeTitle} value={title} type="text"></input>
        <label className="labels">내용</label>
        <input className="inputbox" onChange={onChangeBody} value={text} type="text"></input>
        <button className="addbox" type="submit" onClick={onSubmit}>추가하기</button>
      </form>

      <Todo
          title={title}
          allTarget={allTarget}
          text={text}
          setTitle={setTitle}
          setText={setText}
          setAllTarget={setAllTarget}
        />


        {/* <h2>working</h2>
        <div className="list-wrapper">
        {allTarget.map((todo) => {
          if (!todo.isDone) {
            return (
        <Todo
          key= {todo.id}
          title={title}
          allTarget={allTarget}
          text={text}
          setTitle={setTitle}
          setText={setText}
          setAllTarget={setAllTarget}
        />
        );
    } else {
      return null;
    }
})}
        </div>


        <h2>done</h2>
        <div className="list-wrapper">
        {allTarget.map((todo) => {
          if (todo.isDone) {
            return (
        <Todo
          key= {todo.id}
          title={title}
          allTarget={allTarget}
          text={text}
          setTitle={setTitle}
          setText={setText}
          setAllTarget={setAllTarget}
        />
        );
    } else {
      return null;
    }
  })}




        </div> */}

      

      {/* {allTarget.map((item) => {
        return(
        


        )})}; */}
        {/* <div>
            {allTarget.text}
        </div> */}

      {/* <List
        title={title}
        allTarget={allTarget}
        text={text}
        setTitle={setTitle}
        setText={setText}
        setAllTarget={setAllTarget}
      /> */}

      
      
    </div>
  );
}

export default Form;


