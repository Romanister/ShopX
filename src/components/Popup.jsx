import "../style/App.css";
import "../style/PopupStyle.css";
import Select from "react-select";
import React, { useState } from "react";

const options = [{
    value:'price',
    label:'Цене',
},
{
    value:'rating',
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

    const onChange = (newValue) => {
        setCurrentFilter(newValue.value)
    }

    return(
        <>
      <header className="Popup__wrapper">
        <div className="Button__wrapper">
            <button className="Btn_1">
                Все        
            </button>
            <button className="Btn_1">
                Носки        
            </button>
            <button className="Btn_1">
                Трусы       
            </button>
            <button className="Btn_1">
                Перчатки       
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