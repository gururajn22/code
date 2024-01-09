import { GoDownload } from "react-icons/go";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
const Data = () => {
  return (
    <div className="bg-yellow-400 w-[1152px] h-[754px] mt-[96px] ml-[256px] fixed">
        <p className="flex justify-between font-Galano Grotesque w-[1152px] h-[36px] font-[500] text-[#1A181E] text-[17px] mb-[24px]">Overview <select className="w-[137px] rounded-[4px] border-[1px] h-[36px] gap-[16px]" >
         <option className="text-xs text-center">Last Month</option> 
            </select></p>
            <div className="flex gap-[20px]">
          <p className="w-[556px] h-[118px] bg-blue-600 p-[20px] text-[16px] font-[400]" >online orders <br></br> <p className="text-[32px]" >231</p></p>
          <p className=" w-[556px] h-[118px] bg-blue-600 p-[20px] text-[16px] font-[400]">Amount received<br></br> <p className="text-[32px]" >₹23,92,312.19</p> </p>
          </div>
          <div className="mt-[20px] w-[1152px] h-[1144px]">
         <p className="w-[252px] h-[28px] text-[20px] font-[500] font-Galano Grotesque">Transactions | This Month</p>
         <div className="w-[1152px] h-[1096px] pt-[12px] pr-[12px] pb-[24px] pl-[12px] ">
            <p className="flex justify-between"><input placeholder="Search by order ID..." className=" w-[248px] h-[40px] border-[1px] pt-[10px] pr-[16px] pb-[10px] pl-[16px] gap-[8px]  "/><p className=" text-center w-[79px] h-[36px] border-[1px] pt-[6px] pr-[12px] pb-[6px] pl-[12px] ml-[730px] ">Sort <p className="-mt-5 ml-11"><HiOutlineArrowsUpDown className="w-[16px] h-[16px]" /></p> </p><p className="w-[36px] h-[36px] border-[1px] flex items-center"><GoDownload  className="ml-2" /></p></p>
            <div className="mt-[10px]">
            <table className="w-[1128px] h-[40px] pt-[10px] pr-[12px] pb-[10px] pl-[12px]" >
                <thead className=" border-[1px] bg-blue-600">
                    <tr className="">
                        <th className="flex justify-between">order ID</th>
                        <th className="">order date </th>
                        <th className="">order amount</th>
                        <th>Transaction fees</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b-2">
                        <td className="w-[246px] h-[20px] pt-[14px] pr-[12px] pb-[11px] pl-[12px] ">
                          #281209
                        </td>
                        <td className="w-[246px] h-[20px] text-center ">
                           7 july,2023
                            </td>
                            <td className="w-[246px] h-[20px] text-center">
                             ₹1,278.23
                            </td>
                            <td className="w-[246px] h-[20px] text-center">
                             ₹22
                            </td>
                    </tr>
                    <tr  className="border-b-2">
                        <td className="w-[246px] h-[20px] pt-[14px] pr-[12px] pb-[11px] pl-[12px] ">
                          #281209
                        </td>
                        <td className="w-[246px] h-[20px] text-center">
                           7 july,2023
                            </td>
                            <td className="w-[246px] h-[20px] text-center">
                             ₹1,278.23
                            </td>
                            <td className="w-[246px] h-[20px] text-center">
                             ₹22
                            </td>
                    </tr>
                    <tr  className="border-b-2">
                        <td className="w-[246px] h-[20px] pt-[14px] pr-[12px] pb-[11px] pl-[12px] ">
                          #281209
                        </td>
                        <td className="w-[246px] h-[20px] text-center">
                           7 july,2023
                            </td>
                            <td className="w-[246px] h-[20px] text-center">
                             ₹1,278.23
                            </td>
                            <td className="w-[246px] h-[20px] text-center">
                             ₹22
                            </td>
                    </tr>
                    <tr  className="border-b-2">
                        <td className="w-[246px] h-[20px] pt-[14px] pr-[12px] pb-[11px] pl-[12px] ">
                          #281209
                        </td>
                        <td className="w-[246px] h-[20px] text-center">
                           7 july,2023
                            </td>
                            <td className="w-[246px] h-[20px] text-center">
                             ₹1,278.23
                            </td>
                            <td className="w-[246px] h-[20px] text-center">
                             ₹22
                            </td>
                    </tr>
                    <tr  className="border-b-2">
                        <td className="w-[246px] h-[20px] pt-[14px] pr-[12px] pb-[11px] pl-[12px] ">
                          #281209
                        </td>
                        <td className="w-[246px] h-[20px] text-center">
                           7 july,2023
                            </td>
                            <td className="w-[246px] h-[20px] text-center">
                             ₹1,278.23
                            </td>
                            <td className="w-[246px] h-[20px] text-center">
                             ₹22
                            </td>
                    </tr>
                    <tr  className="border-b-2">
                        <td className="w-[246px] h-[20px] pt-[14px] pr-[12px] pb-[11px] pl-[12px] ">
                          #281209
                        </td>
                        <td className="w-[246px] h-[20px] text-center">
                           7 july,2023
                            </td>
                            <td className="w-[246px] h-[20px] text-center">
                             ₹1,278.23
                            </td>
                            <td className="w-[246px] h-[20px] text-center">
                             ₹22
                            </td>
                    </tr>
                    
                </tbody>
            </table>
          </div>
          </div>
          
          </div>
         
         </div>
  )
}

export default Data

