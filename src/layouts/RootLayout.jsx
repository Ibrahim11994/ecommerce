import React, { useContext } from "react";
import { FaRegUser } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import cartContext from "../context/CartContext";
const nav = [
  { id: 1, to: "", title: "home" },
  { id: 2, to: "shop", title: "shop" },
  { id: 3, to: "features", title: "features" },
  { id: 4, to: "pages", title: "pages" },
  { id: 5, to: "blog", title: "blog" },
];
const RootLayout = () => {
  const{count}=useContext(cartContext)
  return (
    <>
      <div className="shadow-lg">
        <div className="container py-5">
          <header className="flex items-center justify-between">
            <h2>
              <NavLink className={"text-xl uppercase font-bold"}>
                <span className="text-3xl text-red-400">s</span>ouq.
              </NavLink>
            </h2>

            <nav>
              <div className="flex items-center text-gray-700 capitalize` gap-7 ">
                {nav.map((item) => (
                  <NavLink className={"font-[13]"} key={item.id} to={item.to}>
                    {item.title}
                  </NavLink>
                ))}
              </div>
            </nav>
            <div className="flex gap-6">
              <div>
                <Link to={"search"}>
                  <IoSearchSharp size={20} />
                </Link>
              </div>
              <div>
                <Link to={"user"}>
                  <FaRegUser size={20} />
                </Link>
              </div>
              <div className="relative ">
                <Link to={"cart"}>
                  <TiShoppingCart size={20} />
                </Link>
                <div className="absolute bottom-[-50%] text-red-700 right-[-50%] font-bold">
                  {count}
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
