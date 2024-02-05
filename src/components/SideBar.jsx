import React from "react";
import { MdDashboard } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { PiFolderStarThin } from "react-icons/pi";
import { HiRadio } from "react-icons/hi2";
import { FaChartPie } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { HiMiniTicket } from "react-icons/hi2";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import { FaEarthOceania } from "react-icons/fa6";
const sideBarData = [
  {
    id: 1,
    title: "dashBoard",
    icon: <MdDashboard size={20} />,
  },
  {
    id: 2,
    title: "home",
    icon: <IoIosHome size={20} />,
  },
  {
    id: 3,
    title: "events",
    icon: <FaEarthOceania size={20} />,
  },
  {
    id: 4,
    title: "matches",
    icon: <HiRadio size={20} />,
  },
  {
    id: 5,
    title: "calender",
    icon: <SlCalender size={20} />,
  },
  {
    id: 6,
    title: "live ",
    icon: <FaCamera size={20} />,
  },
  {
    id: 7,
    title: "ticket",
    icon: <HiMiniTicket size={20} />,
  },
  {
    id: 8,
    title: "player",
    icon: <FaCircleUser size={20} />,
  },
  {
    id: 9,
    title: "statistic",
    icon: <FaChartPie size={20} />,
  },
];
const SideBar = () => {
  return (
    <div className="  px-4 py-10  h-[1000px] bg-gray-400/15 rounded-lg">
      <h2 className="pl-9 pb-7">
        <NavLink className={"text-xl uppercase font-bold"}>
          <span className="text-3xl text-red-400">s</span>ouq.
        </NavLink>
      </h2>
      {sideBarData.map((item) => (
        <Link
          className="grid grid-cols-4 py-2 mt-2 hover:bg-gray-600/20"
          key={item.id}
        >
          <div className="flex items-center justify-center cols-span-1">
            {item.icon}
          </div>
          <div className="font-bold capitalize t cols-span-3">{item.title}</div>
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
