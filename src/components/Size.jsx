
import { React, useState } from "react";
import "../style/App.css";
import "../style/Products.css";
import "../style/PopupStyle.css";
import star from "../assets/star.png"
import { plusItem, removeItem, minusItem, clearItems  } from "../Rtk/clothes/customer";




const Products1 = ({name, size, imgUrl, id, popular, price }) => {




    const [sizeActive, setSizeActive] = useState(0);
    
    return(
        <>
          
              <div className="Photo__Wrapper">
                <img src={imgUrl} alt="photo" className="Photo"/>
                <div className="Title">
                  {name}
                </div>
                <div className="Size_Wrapper">
                  <div>
                    {size.map((size,i)=>
                      <div key={size} onClick={() => setSizeActive(i)} className={sizeActive === i ? 'Size active' : 'Size'} >
                        {size}  
                      </div>
                    )}
                  </div>
                </div>
                <div className="Price__Wrapper">
                    <div className="Title__Price">
                    <span className="Popular">{price}₽ Рейтинг:{popular} <img src={star} alt="logo" className="Popular__Logo"/></span>

                    </div>
                    <div>
                    
                    <button className="Btn_1">+ Добавить</button>
                    </div>
                </div>
              </div>
        
        </>
    )
}

export default Products1