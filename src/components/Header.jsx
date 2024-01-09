import { CiCircleQuestion } from "react-icons/ci";
import { BsFillChatLeftDotsFill } from "react-icons/bs";
// import { IoMdArrowDropdownCircle } from "react-icons/io";
const Header = () => {
  return (
    <>
    <div className=" ">
      <h2 className="bg-yellow-300 flex gap-[6px]  font-[Galano Grotesque] text-[20px] items-center text-black fixed w-[1270px] h-[64px] ml-[224px] pt-3 pr-8 pb-3 pl-8 border-t-0 border-r-0 border-l-0 border-b-1">Payments <CiCircleQuestion size={14} className="gap-[6px]" /> <p className="w-[74px]  h-[16px]  flex items-center text-[12px]">How it works</p></h2>
    </div>
    <div style={{ zIndex: 1 }} className="ml-[500px] flex justify-evenly " >
     <input  className="w-[400px] h-[40px] flex items-center justify-center  mt-3 ml-52 pt-[9px] pr-[16px] pb-[9px] pl-[16px] bg-[#F2F2F2]" placeholder="Search features, tutorials,etc."/> 
     <div className="flex items-center gap-3 ml-60  mt-5">
    <BsFillChatLeftDotsFill size={25} />
    {/* <IoMdArrowDropdownCircle size={25}  /> */}
    </div>
   
    </div>
    
    </>
  );
};

export default Header;
