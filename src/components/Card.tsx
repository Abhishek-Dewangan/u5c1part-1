
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProducts } from "../redux/action";
function Card(d:any) {
  const [state, setState] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setState(true);
    addProducts(dispatch,d.img,d.category,d.desc,d.id,d.price,d.product_name,d.rating);
  }
  console.log(d);
  return (
    <div className="item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfa2i62BWhf1ijiB_2gMAfCiG71OVu6okqiA&usqp=CAU" alt="" className="productImage" />
      <span>
        <Link className="productLink" to={`/${d.id}`}>
          {/* Product Name */}
          {d.product_name}
        </Link>
      </span>
      <span className="productCategory">{d.category}</span>
      {/* Notice the $ before price. keep it dont edit it. eg: "$123" */}
      <span className="productPrice">${d.price}</span>
      {/* Notice the Ratings: text. don't edit it. eg: "Ratings: 3.5" */}
      <span className="productRating">Ratings:{d.rating} </span>
      {/* Show button here if item is already in the cart. otherwise show "Item Already in cart" */}
      {
        state?(
          <div className="itemInCart">Item Already in cart</div> 
        ):(
          <button className="productAddtoCart" onClick={handleClick}>
          Add to cart
        </button>
        )
      }
     
      {/*
      <div className="itemInCart">Item Already in cart</div> 
       OR
      <button className="productAddtoCart">
        Add to cart
      </button>
      */}
    </div>
  );
}

export { Card };
