import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Card } from "./Card";
import { getProductsData } from "../redux/action";

function Body() {
  const dispatch = useDispatch();
  const products = useSelector((state:any) => state.products);

  useEffect(() => {
    getProductsData(dispatch)
  },[dispatch]);
  console.log(products)
  return (
    <div className="container">
      {/* Iterate over data and show `Card` here */
      products.map((e:any) => (
        <Card key={e.id}  {...e} />
      ))
      }
    </div>
  );
}

export { Body };
