import { Link, useLoaderData } from "react-router-dom"

const Products = () => {
    const products=useLoaderData()
    const filterProducts = products.filter(
      (item) =>
        item.category === "men's clothing" ||
        item.category === "women's clothing"
    );
  return (
    <div className="grid grid-cols-1 gap-10 my-10 md:grid-cols-3 lg:grid-cols-5">
      {filterProducts.map((product)=>(
        <Link to={product.id.toString()} className="bg-white" key={product.id}>
        <div className="flex h-[200px] flex-col items-center py-8 border-[1px]">
          <img className="w-[140px] h-[150px]" src={product.image} alt={product.title} />
        </div>
        <div className="p-3 ">
          <p className="text-sm font-thin">{product.title}</p>
          <p className="py-2 text-xl font-bold">${product.price}</p>
        </div>
        </Link>
      ))}
    </div>
  )
}

export default Products
export const productsLoader=async()=>{
const res = await fetch("https://fakestoreapi.com/products");
return res.json()
}
