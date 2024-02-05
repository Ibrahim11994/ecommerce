import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import cartContext from "../context/CartContext";
import { FaEarthOceania } from "react-icons/fa6";

const ProductDetail = () => {
  const { addToCart } = useContext(cartContext);
  const product = useLoaderData();
  const { id } = useParams();
  return (
    <div className="grid items-center grid-cols-1 mt-20 lg:grid-cols-6 md:grid-cols-2">
      <div className="col-span-2 ">
        <img
          className="lg:h-[500px] md:h-80 h-72"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="col-span-4 ">
        <p className="text-2xl font-bold font-main">{product.title}</p>
        <p className="py-3 font-bold text-gray-500 font-main">
          {product.category}
        </p>
        <p className="py-6 text-gray-600">{product.description}</p>
        <p className="text-2xl font-bold">${product.price}</p>
        <button
          onClick={addToCart}
          className="flex items-center justify-between px-8 py-4 my-4 font-bold text-white bg-black"
        >
          add to cart
          <span className="pl-3 ">
            <FaCartShopping className="text-white " />
          </span>
        </button>
      </div>
    </div>
  );
};
export const productDetailLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("https://fakestoreapi.com/products/" + id);
  return res.json();
};

export default ProductDetail;
