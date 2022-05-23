import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function CardDetails() {
  const { id } = useParams();
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      let response = await fetch(`http://localhost:8080/products/${id}`);
      let data1 = await response.json();
      setData(data1);
    };
    getData();
  }, []);
  console.log(data.reviews);
  return (
    <div className='product'>
      <div>{id}</div>
      <span>
        <h4 className='detailsTitle'>hello</h4>
      </span>
      <img className='detailsImage' src={data.img} alt='' />
      {/* Notice the "Price: $". do not edit it. */}
      <span className='detailsPrice'>Price: ${data.price}</span>
      <span className='detailsPrice'></span>
      <div>
        <h5>Reviews:</h5>
        {/* Iterate over reviews and populate review like:*/}
      </div>
    </div>
  );
}
export { CardDetails };
