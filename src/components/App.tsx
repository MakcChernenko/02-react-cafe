import { useState } from "react";
import Product from "./Product";
import Button from "./Button/Button";

export default function App() {
  const [click, setClick] = useState(0);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event);
    setClick(click + 1);
  };
  return (
    <>
      <h1>Best selling</h1>
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={14.29}
      />
      <Button onClick={handleClick} name={click} />
    </>
  );
}
