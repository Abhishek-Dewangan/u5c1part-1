import './Card.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProducts } from '../redux/action';
function Card(d: any) {
  const [state, setState] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setState(true);
    addProducts(
      dispatch,
      d.img,
      d.category,
      d.desc,
      d.id,
      d.price,
      d.product_name,
      d.rating,
    );
  };
  console.log(d);
  return (
    <div className='item'>
      <Link className='productLink' to={`/${d.id}`}>
        <img style={{width:'200px', height:'200px', margin:'20px'}}
          src={d.img}
          alt=''
          className='productImage'
        />
        <br />
        <div className='products'>
        <span className='productName'>
          {/* Product Name */}
          {d.product_name}
        </span>
        <span className='productCategory'>{d.category}</span>
        <br />
        {/* Notice the $ before price. keep it dont edit it. eg: "$123" */}
        <span className='productPrice'>${d.price}</span>
        <br />
        {/* Notice the Ratings: text. don't edit it. eg: "Ratings: 3.5" */}
        <span className='productRating'>Ratings:{d.rating} </span>
        <br />
        </div>
        {/* Show button here if item is already in the cart. otherwise show "Item Already in cart" */}
      </Link>
      {state ? (
        <div className='itemInCart'>Item Already in cart</div>
      ) : (
        <button className='productAddtoCart' onClick={handleClick}>
          Add to cart
        </button>
      )}

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
