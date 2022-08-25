import React from "react";
import classes from './Input.module.css'
import {  useEffect, useState } from "react";
import { useSelector,useDispatch} from "react-redux"
import axios from "axios";
import {  setItems, clearItems } from "../Rtk/clothes/slice";
import debounce from "lodash.debounce";

// const iFilterCloth = (searchText, listOfClothes)=>{
//     if (!searchText) {
//         return listOfClothes;
//     }
//     return listOfClothes.filter(({clothes})=>
//         clothes.toLowerCase().includes(searchText.toLowerCase())
//         );
// }

const Input = () => {

    // const clothesStore = useSelector(state=>state.clothes);
    const dispatch = useDispatch();
    // const [clothList,setClothList] = useState(clothesStore.items)
    const [searchTerm, setSearchTerm] = useState ('')

    // useEffect(()=>{
    //     const Debounce = setTimeout( async ()=>{
    //         clearItems()
    //         const {data} = await axios.get(`https://6300bf109a1035c7f8f73b67.mockapi.io/api/Clothes?name=${searchTerm}`)
    //             dispatch(setItems(data)) 
    //             console.log('hi')
    //         },700);

    //     return clearTimeout(Debounce)
    // },[searchTerm]);
    const search = (e)=> {
        setSearchTerm(e.target.value)
        dispatch (debounce(async()=>{
           clearItems()
        const {data} = await axios.get(`https://6300bf109a1035c7f8f73b67.mockapi.io/api/Clothes?name=${e.target.value}`)
        dispatch(setItems(data))
    },700))}


    // useEffect(()=>{
    //     debounce(()=>{
    //         clearItems()
    //         console.log('hi')
    //         const {data} = axios.get(`https://6300bf109a1035c7f8f73b67.mockapi.io/api/Clothes?name=${searchTerm}`)
    //         dispatch(setItems(data))
    //     },700)
    // },[searchTerm]);

    console.log(searchTerm)

    return(
        
        <input 
        className = {classes.Imput} 
        placeholder = "Search"
        value={searchTerm}
        type="text"
        onChange={search}
        />
    )
}

export default Input;
