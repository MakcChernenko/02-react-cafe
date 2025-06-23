import { HiUser } from "react-icons/hi";

interface Products {
  name: string;
  imgUrl: string;
  price: number;
}

const Product = ({ name, imgUrl, price }: Products) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} />
      <p>
        `Price: ${price} <HiUser size={24} />`
      </p>
    </div>
  );
};

export default Product;
