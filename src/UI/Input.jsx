import React from "react";
import classes from "./Input.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setItems, clearItems } from "../Rtk/clothes/slice";
import debounce from "lodash.debounce";

const Input = () => {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");

  const search = (e) => {
    setSearchTerm(e.target.value);
    dispatch(
      debounce(async () => {
        clearItems();
        const { data } = await axios.get(
          `https://6300bf109a1035c7f8f73b67.mockapi.io/api/Clothes?name=${e.target.value}`
        );
        dispatch(setItems(data));
      }, 700)
    );
  };

  console.log(searchTerm);

  return (
    <input
      className={classes.Imput}
      placeholder="Search"
      value={searchTerm}
      type="text"
      onChange={search}
    />
  );
};

export default Input;
