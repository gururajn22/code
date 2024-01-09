import { SlArrowDown } from "react-icons/sl";
import { GoHome } from "react-icons/go";
import { PiNotepad } from "react-icons/pi";
import { MdWindow } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { MdOutlinePayments } from "react-icons/md";
import { PiNavigationArrow } from "react-icons/pi";
import { TbDiscount2 } from "react-icons/tb";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { MdColorLens } from "react-icons/md";
import { HiOutlineLightningBolt } from "react-icons/hi";
const Sidebar = () => {
  const data = [
    {
      name: "Home",
      link: "/",
      icon: <GoHome size={21} />,
    },
    {
      name: "Orders",
      link: "/",
      icon: <PiNotepad size={21}/>,
    },
    {
      name: "Products",
      link: "/",
      icon: <MdWindow size={21} />,
    },
    {
      name: "Delivery",
      link: "/",
      icon: <CiDeliveryTruck size={21} />,
    },
    {
      name: "Marketing",
      link: "/",
      icon: <HiOutlineSpeakerphone size={21} />,
    },
    {
      name: "Analytics",
      link: "/",
      icon: <TbBrandGoogleAnalytics size={21} />,
    },
    {
      name: "Payments",
      link: "/",
      icon: <MdOutlinePayments size={21} />,
    },
    {
      name: "Tools",
      link: "/",
      icon: <PiNavigationArrow size={21} />,
    },
    {
      name: "Discounts",
      link: "/",
      icon: <TbDiscount2  size={21}/>,
    },
    {
      name: "Audience",
      link: "/",
      icon: <MdOutlinePeopleOutline size={21}/>,
    },
    {
      name: "Appearance",
      link: "/",
      icon: <MdColorLens  size={21}/>,
    },
    {
      name: "Plugins",
      link: "/",
      icon: <HiOutlineLightningBolt size={21} />,
    },
  ];
  return (
    
    <div className="flex items-center fixed  bg-[#1E2640] w-[224px] h-[1482px] pt-[16px] pr-[10px] pb-[16px] pl-[10px]">
      <div className="mb-[1400px] ">
        <img
          className="-ml-[0px] h-[39px] w-[39px] rounded-sm"
        src="\src\img\e48c891d-79d6-4cd4-822f-7e0a44acaeb1.png"
        ></img>
      </div>
      <div className="mb-[1400px]">
        <p className="ml-[12px]">Nishyan</p>
        <p className="ml-[12px] underline ">visit store</p>
      </div>
      <div className="mb-[1400px]">
        <SlArrowDown className="ml-[53px]" />
      </div>
      <div className="h-screen text-center -ml-[150px] mb-[500px]">
        <ul className="-mt-[54px]">
          {data.map((item, index) => {
            return <li className="flex items-center -ml-10  pt-[8px] pr-[10px] pb-[8px] pl-[10px] gap-3" key={index}>{item.icon}{item.name}</li>
          })}
          
        </ul>
        {/* <div className="flex items-center">
        <h2 className="w-[192px] h-[54px]  bg-yellow-400">ok</h2>
        </div> */}
      
      </div>
    </div>
  );
};

export default Sidebar;
