import React, { use, useState } from "react";
import Item from "./Item";

function Items({ items, removeHandler }) {
  return (
    <>
      {items.map((item, index) => (
        <Item removeHandler={removeHandler} item={item} key={index} />
      ))}
    </>
  );
}

export default Items;
