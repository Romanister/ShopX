import { React, useEffect, useState } from "react";
import "../style/App.css";
import "../style/Products.css";
import "../style/PopupStyle.css";
import star from "../assets/star.png";
import { pushItems } from "../Rtk/clothes/customer";
import { useDispatch, useSelector } from "react-redux";

const Products1 = ({ name, size, imgUrl, id, popular, price }) => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [sizeActive, setSizeActive] = useState(0);

  const onClickAddToCart = () => {
    let prev_size = "";
    let _sizes = [];
    console.log(cartItems.items);
    const item = {
      id: id,
      name,
      price,
      popular,
      size: _sizes.length !== 0 ? [..._sizes] : [size[sizeActive]],
      imgUrl,
      count:
        cartItems.items?.count === undefined ? 1 : cartItems.items.count + 1,
    };
    dispatch(pushItems(item));
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems.items]);

  return (
    <>
      <div className="Photo__Wrapper">
        <img src={imgUrl} alt="photo" className="Photo" />
        <div className="Title">{name}</div>
        <div className="Size_Wrapper">
          <div>
            {size.map((size, i) => (
              <div
                key={size}
                onClick={() => setSizeActive(i)}
                className={sizeActive === i ? "Size active" : "Size"}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <div className="Price__Wrapper">
          <div className="Title__Price">
            <span className="Popular">
              {price}₽ Рейтинг:{popular}{" "}
              <img src={star} alt="logo" className="Popular__Logo" />
            </span>
          </div>
          <div>
            <button className="Btn_1" onClick={onClickAddToCart}>
              + Добавить
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products1;
