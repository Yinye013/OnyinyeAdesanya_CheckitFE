import React, { useState } from "react";
import {
  FaMagnifyingGlass,
  FaHouse,
  FaEnvelope,
  FaRegImages,
  FaCalendarDay,
  FaGear,
} from "react-icons/fa6";
import { MdFlag, MdPieChart } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { IconType } from "react-icons";

interface IconProps {
  component: IconType;
  name: string;
}

const icons: IconProps[] = [
  { component: FaMagnifyingGlass, name: "search" },
  { component: FaHouse, name: "home" },
  { component: MdFlag, name: "flag" },
  { component: MdPieChart, name: "chart" },
  { component: FaEnvelope, name: "envelope" },
  { component: FaRegImages, name: "images" },
  { component: FaCalendarDay, name: "calendar" },
  { component: IoPeopleSharp, name: "people" },
  { component: FaGear, name: "settings" },
];

const SidebarLayout: React.FC = () => {
  const [activeIcon, setActiveIcon] = useState("home");
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div
      className={`${
        isExpanded ? "w-[10rem]" : "w-16"
      } transition-all duration-300 bg-slate-500 h-[100%] sticky flex flex-col items-center lg:items-stretch`}
    >
      <button
        className="lg:hidden p-2 mt-4 text-white"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Collapse" : "Expand"}
      </button>

      <div className="flex flex-col gap-8 pt-10 text-xl lg:mt-0 w-full">
        {icons.map(({ component: Icon, name }) => (
          <button
            key={name}
            onClick={() => setActiveIcon(name)}
            className={`p-3 flex items-center gap-4 transition-colors duration-200 text-gray-300 hover:text-white ${
              activeIcon === name
                ? "bg-white text-slate-800"
                : "hover:bg-slate-700"
            } rounded-md`}
          >
            <Icon className="text-2xl" />
            {isExpanded && <span className="text-xl capitalize">{name}</span>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SidebarLayout;
