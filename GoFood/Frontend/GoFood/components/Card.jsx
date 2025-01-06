import { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";

export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  const priceRef=useRef();
  const option = props.options;
  const price = Object.keys(option);
  const foodItem = props.foodItems;
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const handleAddCart = async () => {
    await dispatch({ type: "ADD", id: props.foodItems._id, qty: qty, size: size, price:finalPrice, img: props.foodItems.img,name:props.foodItems.name })
    console.log(data)
  }
  useEffect(()=>{
    setSize(priceRef.current.value)
  },[]);
  let finalPrice=qty*Number(option[size])
  return (
    <div className="card mt-3" style={{ width: "20rem", maxHeight: "500px" }}>
      {/* Image section */}
      <img
        src={foodItem.img}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
        }}
        className="card-img-top"
        alt="pizza"
      />

      <div className="card-body">

        <h5 className="card-title">{foodItem.name}</h5>
        <p className="card-text">{foodItem.description}</p>

        {/* Controls Section */}
        <div className="d-flex flex-column align-items-stretch">
          {/* Quantity Select */}
          <select className="m-2 h-100 rounded" onChange={(e) => { setQty(e.target.value) }}>
            {Array.from(Array(5), (e, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          {/* Price Select */}
          <select className="m-2 h-100 rounded"ref={priceRef} onChange={(e) => { setSize(e.target.value) }}>
            {price.map((data) => (
              <option key={data} value={data}>
                {data}
              </option>
            ))}
          </select>

          {/* Total Price Text */}
          <div className="d-inline fs-5 my-2">${finalPrice}/-</div>

          {/* Add to Cart Button */}
          <button className="btn btn-success" onClick={handleAddCart}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}
