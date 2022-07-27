import React from 'react';


import './style.css'

function Todo({allTarget, setAllTarget}) {
    
    // const NewTarget = allTarget.map((item) => )

    const deleteTitle = (id) => {
        setAllTarget(allTarget.filter((note) => note.id !== id));
            console.log(allTarget)
    }
    
    const successTitle = (todoId) => {
        const NewTarget = allTarget.map((todo) => {
          if (todo.id === todoId) {
            return {
                  ...todo,
                  isDone: !todo.isDone,
                };
              } else {
                return { ...todo };
              }
            });
        setAllTarget(NewTarget);
        console.log(NewTarget);
  };

    

    return (


            <div>
            

            {/* // <div className="todo-container" key={abc.id}>
            //     <h1>{abc.title}</h1>
            //     <div>
                    
            //     <div>
            //         {abc.text}
                    
            //     </div>
            //         <button onClick={() => deleteTitle(abc.id)}>삭제하기</button>
            //         <button onClick={() => successTitle(abc.id)}>완료</button>
            //     </div>
            //     </div> */}
            
            
            <h2>...(●'◡'●) Working 🌷</h2>
        <div className="list-wrapper">
        {allTarget.map((abc) => {
          if (!abc.isDone) {
            return (
                <div className="todo-container" key={abc.id}>
                <h1>{abc.title}</h1>
                <div>
                    
                <div>
                    {abc.text}
                    
                </div>
                    <button className="mybtn" onClick={() => deleteTitle(abc.id)}>🧻 삭제하기</button>
                    <button className="mybtn" onClick={() => successTitle(abc.id)}>✔ 완료</button>
                </div>
                </div>
        );
    } else {
      return null;
    }
})}
        </div>


        <h2>╰(*°▽°*)╯ Done 🌷</h2>
        <div className="list-wrapper">
        {allTarget.map((abc) => {
          if (abc.isDone) {
            return (
                <div className="todo-container" key={abc.id}>
                <h1>{abc.title}</h1>
                <div>
                    
                <div>
                    {abc.text}
                    
                </div>
                    <button className="mybtn" onClick={() => deleteTitle(abc.id)}>🧻 삭제하기</button>
                    <button className="mybtn" onClick={() => successTitle(abc.id)}>❌ 취소</button>
                </div>
                </div>
        );
    } else {
      return null;
    }
  })}




        </div>





        </div>
        
        
        
    )
}



export default Todo;