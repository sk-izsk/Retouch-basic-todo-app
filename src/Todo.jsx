import React, { useState } from "react";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [todo, setTodo] = useState([]);
  const onChangeHandle = event => {
    const charId = event.target.value;
    setUserInput(charId);
  };
  const click = event => {
    event.preventDefault();

    setTodo(todo.concat(userInput));
    setUserInput("");
  };

  return (
    <div>
      <ul>
        {todo.map(x => (
          <li>{x}</li>
        ))}
      </ul>
      <form onSubmit={click}>
        <input type="text" onChange={onChangeHandle} value={userInput} />
        <input type="submit" value="send" />
      </form>
    </div>
  );
};

export default App;
