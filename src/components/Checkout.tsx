
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../redux/action";

function Checkout() {
  const dispatch = useDispatch()
  const cartProducts = useSelector((state:any) => state.cartProducts);
  useEffect(() => {
    getCartData(dispatch);
  }, [dispatch]);
  console.log(cartProducts);
  

  let totalvalue = cartProducts.reduce((accumulator:any, currentValue:any) => {
      return accumulator + currentValue.price;
    }, 0)
    console.log(totalvalue);
  
 


  // HINT: you can fetch multiple IDs from json-server like this:
  // localhost:8080/products?id=1&id=4&id=6
  // this will fetch products with id 1, 4 and 6.
 
  // If cart is empty, show following div:
  // if () {
  //   return <div className="emptyCart">Nothing in cart</div>;
  // }


// else:
  return (
    <div style={{ padding: 10 }}>
      <h4>Checkout:</h4>
      <div className="checkoutWrapper">
        {
          cartProducts.map((e:any) => (
            <div className="checkoutItem">
            <span>{e.product_name}</span>
            <span>${e.price}</span> 
          </div>
          ))
        }
        {/* Show Items in cart here likeL
        
        <div className="checkoutItem">
          <span>Product Name</span>
          <span>$1235</span> 
        </div>
        */}
      </div>
      <hr className="hr" />
      <div className="totalContainer">
        <span>Total:</span>
        <span className="total">
          {/* Show total here */}
        ${totalvalue}
        </span>
      </div>
    </div>
  );
}

export { Checkout };
