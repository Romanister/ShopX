import axios from "axios";
import { React, useEffect} from "react";
import "../style/App.css";
import "../style/Products.css";
import "../style/PopupStyle.css";
import {  setItems } from "../Rtk/clothes/slice";
import { useDispatch, useSelector } from "react-redux";
import Products1 from "./CardProduct";

const Products = () => {
  const dispatch = useDispatch();

  const fetchClothes = async () => {
    try {
      const { data } = await axios.get(
        "https://6300bf109a1035c7f8f73b67.mockapi.io/api/Clothes"
      );
      dispatch(setItems(data));
      return data;
    } catch (error) {
      console.error(error);
    }
  };
  const clothesStore = useSelector((state) => state.clothes);

  useEffect(() => {
    fetchClothes(dispatch);
  }, []);

  useEffect(() => {
    console.log(clothesStore);
  }, [clothesStore.items]);

  return (
    <>
      <div className="Products__wrapper">
        {clothesStore.items.map((product) => {
          return (
            <Products1
              name={product.name}
              size={product.size}
              imgUrl={product.imgUrl}
              key={product.id}
              popular={product.popular}
              price={product.price}
            ></Products1>
          );
        })}
      </div>
    </>
  );
};

export default Products;
