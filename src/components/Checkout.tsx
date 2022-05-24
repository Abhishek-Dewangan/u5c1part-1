import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartData } from '../redux/action';

function Checkout() {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state: any) => state.cartProducts);
  useEffect(() => {
    getCartData(dispatch);
  }, [dispatch]);
  console.log(cartProducts);

  let totalvalue = cartProducts.reduce(
    (accumulator: any, currentValue: any) => {
      return accumulator + currentValue.price;
    },
    0,
  );
  console.log(totalvalue);

  return (
    <div style={{ padding: 10 }}>
      <h4>Checkout:</h4>
      <div className='checkoutWrapper'>
        {cartProducts.map((e: any) => (
          <div className='checkoutItem'>
            <span>
              {e.product_name} ${e.price}
            </span>
          </div>
        ))}
      </div>
      <hr className='hr' />
      <div className='totalContainer'>
        <span>Total:</span>
        <span className='total'>
          {/* Show total here */}${totalvalue}
        </span>
      </div>
    </div>
  );
}

export { Checkout };
