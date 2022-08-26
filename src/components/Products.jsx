import axios from "axios";
import { React, useEffect, useState } from "react";
import "../style/App.css";
import "../style/Products.css";
import "../style/PopupStyle.css";
import store from "../Rtk/Store";
import { fetchClothes, setItems } from "../Rtk/clothes/slice";
import {useDispatch, useSelector} from "react-redux"
import { fetchClothe } from "../Rtk/clothes/customer";
import star from "../assets/star.png"
import Products1 from "./Size";


const Products = () => {

  // const Size = ({active,setActive, children}) => {
  //   return(
  //       <div className={active ? 'Size active':'Size'} onClick={() => setActive(true)}>
  //           {children}
  //       </div>
  //   )
    
  // }
  
    const dispatch = useDispatch();
    // const getClothes = async () => {
    //     const data = await  axios.get(`https://6300bf109a1035c7f8f73b67.mockapi.io/Products`)
    //     return data
    // }
    const fetchClothes = async () => {
        try{
            const {data} = await axios.get('https://6300bf109a1035c7f8f73b67.mockapi.io/api/Clothes')
            dispatch(setItems(data))
            return data
        }
        catch (error){
            console.error(error)
        }    
    }
    const clothesStore = useSelector(state=>state.clothes);
    

    useEffect(() => { fetchClothes((dispatch)) }, [])

    useEffect(()=>{
        console.log(clothesStore);
    },[clothesStore.items])
    
    return (
        <>
          {/* <div className="Products__wrapper">
            {clothesStore.items.map((photo) => (
              <div className="Photo__Wrapper" key={photo.id}>
                <img src={photo.imgUrl} alt="photo" className="Photo"/>
                <div className="Title">
                  {photo.name}
                </div>
                <div className="Size_Wrapper">
                  <div>
                    {photo.size.map((size,i)=>
                      <div key={size} onClick={() => setSizeActive(i)} className={sizeActive === i ? 'Size active' : 'Size'} >
                        {size}
                      </div>
                    )}
                  </div>
                </div>
                <div className="Price__Wrapper">
                    <div className="Title__Price">
                    <span className="Popular">{photo.price}₽ Рейтинг:{photo.popular} <img src={star} alt="logo" className="Popular__Logo"/></span>

                    </div>
                    <div>
                    
                    <button className="Btn_1">+ Добавить</button>
                    </div>
                </div>
              </div>
            ))}
          </div > */}
          <div className="Products__wrapper">
          {clothesStore.items.map((product)=>{
              return (
                <Products1 name = {product.name} size = {product.size} imgUrl = {product.imgUrl} key={product.id} popular = {product.popular} price = {product.price}>

                </Products1>
              )
          })}
          </div>
        </>
      );
        

}

export default Products