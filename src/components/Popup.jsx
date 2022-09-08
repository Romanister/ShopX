import "../style/App.css";
import "../style/PopupStyle.css";
import Select from "react-select";
import React, { useState } from "react";
import { useDispatch} from "react-redux";

import { clearItems,setItems } from "../Rtk/clothes/slice";
import axios from "axios";

const options = [{
    value:'price',
    label:'Цене',
},
{
    value:'popular',
    label:'Рейтингу',
},
{
    value:'name',
    label:'Названию',
},]

const Popup = () => {


    const [currentFilter, setCurrentFilter] = useState('')

    const getValue = () => {
        return currentFilter ? options.find(c => c.value === currentFilter) : ""
    }

    const onChange = async (newValue) => {
        setCurrentFilter(newValue.value)
        clearItems()
        const {data} = await axios.get(`https://6300bf109a1035c7f8f73b67.mockapi.io/api/Clothes?sortBy=${newValue.value}&orderBy=desc`)
            dispatch(setItems(data))
    }

    
    const dispatch = useDispatch();

    const Filter = async (props) => {
        clearItems()
        const {data} = await axios.get(`https://6300bf109a1035c7f8f73b67.mockapi.io/api/Clothes?filter=${props}`)
            dispatch(setItems(data))
    }
    
    
    

    return(
        <>
      <header className="Popup__wrapper">
        <div className="Button__wrapper">
        
            <button className="Btn_1" onClick={() => Filter('')}>
                Все        
            </button>
        
            <button className="Btn_1" onClick={() => Filter('socks')}>
                Носки        
            </button>
            <button className="Btn_1" onClick={() => Filter('sneakers')}>
                Кроссовки       
            </button>
            <button className="Btn_1" onClick={() => Filter('hoody')}>
                Худи      
            </button>
        </div>
        <div className="Filter__wrapper">
            <Select onChange={onChange}  value={getValue()} options={options} className = "Filter" placeholder = 'Фильтр по'></Select>
        </div>
      </header>
    </>
    )
}

export default Popup