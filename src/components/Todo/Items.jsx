import React, { useState } from "react";
import Item from "./Item";
const items = ["Play cricket", "Play video-game", "Go for swimming"];

function Items() {
  const [tasks, setTasks] = useState(items);

  const deleteHandler = (itemName) => {
    const indexOf = items.indexOf(itemName);
    const temp = [...tasks];
    temp.splice(indexOf, 1);
    console.log(temp);
    setTasks(() => temp);
  };
  return (
    <div>
      {tasks.map((item) => (
        <Item name={item} key={item} deleteHandler={deleteHandler} />
      ))}
    </div>
  );
}

export default Items;
