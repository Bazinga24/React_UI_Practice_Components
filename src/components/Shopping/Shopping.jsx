import React, { use } from "react";
import searchImg from "../../assets/search.png";
import "./Shopping.css";
import { useState, useEffect } from "react";
import Items from "./Items";
function Shopping() {
  const [searchItem, setSearchItem] = useState("");
  const [suggestedItems, setSuggestedItem] = useState([]);
  const [itemList, setItemList] = useState([]);
  //................................
  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    console.log(e.target.value);
  };

  //................................
  const getItems = async (value) => {
    const url = `https://api.frontendeval.com/fake/food/${value}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setSuggestedItem(data);
  };

  //.................................
  useEffect(() => {
    if (searchItem.length >= 2) {
      getItems(searchItem);
    } else {
      setSuggestedItem([]);
    }
  }, [searchItem]);

  //................................
  const clickHandler = (item) => {
    setItemList((prev) => [...prev, item]);
  };
  //................................
  const removeHandler = (item) => {
    setItemList((prev) => {
      const temp = [...prev];
      const index = temp.indexOf(item);
      temp.splice(index, 1);
      return temp;
    });
  };
  //...................................
  return (
    <div>
      <h1>Search and Add Items</h1>
      <div id="search-container">
        <input type="text" onChange={changeHandler} />
        <button>
          <img src={searchImg} />
        </button>
      </div>
      {suggestedItems && (
        <div id="suggestion-box">
          {suggestedItems.slice(0, 10).map((item) => (
            <p
              key={item}
              onClick={() => {
                clickHandler(item);
              }}
            >
              {item}
            </p>
          ))}
        </div>
      )}
      <Items items={itemList} removeHandler={removeHandler} />
    </div>
  );
}

export default Shopping;
