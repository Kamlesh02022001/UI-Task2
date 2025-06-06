import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FaUser } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaRegFileAlt } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { PiNotePencilDuotone } from "react-icons/pi";
import { IoShareSocialOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";
import { HiArrowLeft } from "react-icons/hi2";
import { TbCirclePercentage } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { RiStackLine } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { MdSecurity } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { RxCopy } from "react-icons/rx";
import { MdCurrencyRupee } from "react-icons/md";
import './App.css'

function App() {
  
  return (
    <>
    <div className='h-full w-full bg-gray-100 '>
      {/* header  */}
       <div  className='h-[60px]  bg-white flex  justify-end items-end w-full'> 
          <div className='flex mb-2 items-center px-10'>
              <div className="mr-2 ">
              <FaUser className="text-2xl text-white mt-[3px] bg-blue-600  rounded-full h-9 w-9 p-2" />
            </div>

              <div className='mr-5 flex flex-col  '>
                <p className='font-'>Kamlesh Janawale</p>
                <p className='text-sm text-gray-500'>Web Developer</p>
              </div>
              <IoIosArrowDown />
          </div>        
       </div>

       <div  className='h-[60px] flex justify-between bg-white p-5 overflow-hidden mt-5 mx-16 rounded-2xl'>
          <p className='text-blue-700 font-bold flex items-center'><HiOutlineArrowLeft className='mr-5'/>iSecure</p>
          <p className='text-blue-700 flex items-center'><GrUpdate className='mr-2'/>Select a new product</p>
        </div>

      {/* product */}
       <div  className='h-full p-6 overflow-hidden mt-5 bg-white mx-16 rounded-2xl'>
          {/* Menu  */}
          <div className='h-[60px] items-center overflow-hidden justify-between px-5 flex bg-blue-100 rounded-lg'>
            <div className='flex space-x-3 overflow-hidden items-center'>
               <FaUser className="text-2xl  text-white mt-[3px] bg-blue-600  rounded-full h-9 w-9 p-1" />
               <p className='font-bold '>Kamlesh J.</p>
               <p className='bg-white rounded-lg text-sm py-0.5 px-2'>35 M</p>
               <p className='bg-white rounded-lg text-sm py-0.5 px-2'>Life shield</p>
               <p className='bg-white rounded-lg text-sm py-0.5 px-2'>Lump sum payout</p>
               <p className='bg-white rounded-lg text-sm py-0.5 px-2'>Covered Till 75</p>
               <p className='bg-white rounded-lg text-sm py-0.5 px-2'>Graduate and above</p>
               <p className='bg-white rounded-lg text-sm py-0.5 px-2'>Salaried</p>
               <p className='bg-white rounded-lg text-sm py-0.5 px-2'>10 LPA</p>
            </div>
            <button className='text-blue-700 border border-blue-700 rounded-full px-3 py-1 flex items-center'><PiNotePencilDuotone className='text-xl mr-2'/> Modify plan details</button>
          </div>

          <div className='flex mt-5 justify-between'>
            {/* left box  */}
            <div className='w-[520px] h-[430px] border overflow-hidden shadow border-gray-300 rounded-lg'>
              <div className=''>
              <p className='flex justify-center items-center text-sm text-white py-1 bg-orange-500 '> <MdSecurity className='mr-2'/> 40 Yr policy term till Age of 75</p>
              </div>
              <div className='my-5'>
                <div className=' flex items-center space-x-4 justify-center'>
                  <p className='h-10 w-10 flex justify-center items-center text-white text-3xl rounded-full bg-blue-700 pb-1'>-</p>
                  
                  <div className='border border-gray-300 px-5 py-2 rounded-lg'>
                    <p className='text-blue-700 text-sm flex'>Life cover (<MdCurrencyRupee className='mt-[3px] '/> )</p>
                    <p className='text-gray-30 text-sm'>1,00,00,000</p>
                  </div>
                  
                  <p className=' h-10 w-10 flex justify-center items-center text-white text-3xl rounded-full bg-blue-700 pb-1'>+</p>
                </div>
                <div className='flex items-center space-x-1.5 mt-2 justify-center'>
                  <p className='bg-white border-blue-600 rounded-lg text-sm py-0.5 px-2 border shadow w-fit'>25 L</p>
                  <p className='bg-white border-blue-600 rounded-lg text-sm py-0.5 px-2 border shadow w-fit'>50 L</p>
                  <p className='bg-white border-blue-600 rounded-lg text-sm py-0.5 px-2 border shadow w-fit'>75 L</p>
                  <p className=' border-blue-600 rounded-lg text-sm py-0.5 px-2 border shadow w-fit bg-blue-100'>1 Cr</p>
                  <p className='bg-white border-blue-600 rounded-lg text-sm py-0.5 px-2 border shadow w-fit'>5 Cr</p>

                </div>
              </div>

              <div className='bg-blue-100 mx-4 rounded-lg p-3 '>       
                <p className=' font-semibold text-blue-900 flex items-center'><RiStackLine className='text-xl mr-2' /> Add benefit riders</p>
                <div className='border-t border-blue-500 my-2'></div>
                <div className='space-y-3'>
                  <div className='flex justify-between items-center pr-3 pl-4'>
                    <p className='w-[200px] text-gray-500 text-sm'>Accidental permanent total/ partial disability</p>
                    
                    <div className='flex'>
                      <p className='text-blue-700 text-sm h-fit shadow px-2 py-1 bg-gradient-to-r from-blue-200 to-blue-100 mr-2 flex'><MdCurrencyRupee className='mt-[3px] '/> 249/m</p>
                      <button className='text-blue-700 border border-blue-500 bg-white rounded-full py-0.5 px-2 h-fit'>+ Add</button>
                    </div>
                  </div>

                  <div className='flex justify-between items-center pr-3 pl-4'>
                    <p className='w-[200px] text-gray-500 text-sm'>New critical illness</p>
                    
                    <div className='flex'>
                      <p className='text-blue-700 text-sm h-fit shadow px-2 py-1 bg-gradient-to-r from-blue-200 to-blue-100 mr-2 flex'><MdCurrencyRupee className='mt-[3px] '/> 249/m</p>
                      <button className='text-blue-700 border border-blue-500 bg-white rounded-full py-0.5 px-2 h-fit'>+ Add</button>
                    </div>
                  </div>

                  <div className='flex justify-between items-center pr-3 pl-4'>
                    <p className='w-[200px] text-gray-500 text-sm'>Accidental death</p>
                    
                    <div className='flex'>
                      <p className='text-blue-700 text-sm h-fit shadow px-2 py-1 bg-gradient-to-r from-blue-200 to-blue-100 mr-2 flex'><MdCurrencyRupee className='mt-[3px] '/> 249/m</p>
                      <button className='text-blue-700 border border-blue-500 bg-white rounded-full py-0.5 px-2 h-fit'>+ Add</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-full flex justify-center'> 
                <button className='bg-gray-300 text-white py-3 px-3 mt-5 rounded-lg flex items-center'><GrUpdate className='mr-2'/>Update premium</button>
                </div>
            </div>

            {/* right box */}
            <div className='w-[700px]'>
              {/* box 1  */}
              <div className=' border-gray-300 h-[640px] border overflow-hidden rounded-lg'>
                  <div className='flex my-5 justify-between'>
                    <p className='text-blue-700 bg-blue-100 py-2 px-7 text-lg font-bold rounded-r-full'>YOUR PREMIUM</p>
                    <div className='flex justify-between border w-[180px] mr-5 py-2 flex text-gray-500 px-2 items-center'>
                    <p className=''>Annually </p>
                    <IoIosArrowDown />
                    </div>
                  </div>

                  <div className='px-5 space-y-4'>
                    <p className='font-bold'>ộ Smart recommendations</p>

                    <div className='flex justify-between border rounded-lg py-4 border-gray-300 px-2'>
                      <div className='flex items-center'>
                      <div className='h-5 mr-2 w-5 border rounded-full border-blue-900'></div>
                        <p>Pay for</p>
                        <p className='font-bold ml-1'>5 years</p>
                        <p className='ml-2 py-0.5 px-3 rounded-full bg-blue-100 text-sm flex'>Save<MdCurrencyRupee className='mt-[3px] '/> 3.66 Lakhs</p>   
                      </div>

                      <div className='flex'>
                        <p className='font-bold mr-1 flex'><FaRupeeSign className='mt-1'/>62,124</p>
                        <p className=''>/Year</p>
                        <p className='ml-2 bg-gray-100 text-blue-700 px-2 py-0.5 flex'>Total: <MdCurrencyRupee className='mt-[4px] '/>4,66,340</p>
                      </div>
                    </div>

                    <div className='flex justify-between border-2 rounded-lg py-4 bg-gray-100 border-blue-500 px-2'>
                      <div className='flex items-center'>
                      <div className='h-5 mr-2 w-5 border-4 rounded-full border-blue-900'></div>
                        <p>Pay for</p>
                        <p className='font-bold ml-1'>10 years</p>
                        <p className='ml-2 py-0.5 px-3 rounded-full bg-green-600 text-white text-sm flex'>Save<MdCurrencyRupee className='mt-[3px] '/> 3.14 Lakhs</p>   
                      </div>

                      <div className='flex'>
                        <p className='font-bold mr-1 flex'><FaRupeeSign className='mt-1'/>46,768</p>
                        <p className=''>/Year</p>
                        <p className='ml-2 bg-blue-100 text-blue-700 px-2 py-0.5 flex'>Total:<MdCurrencyRupee className='mt-[4px] '/>4,98,110</p>
                      </div>
                    </div>

                    <div className='flex justify-between border rounded-lg py-4 border-gray-300 px-2'>
                      <div className='flex items-center'>
                      <div className='h-5 mr-2 w-5 border rounded-full border-blue-900'></div>
                        <p>Pay for</p>
                        <p className='font-bold ml-1'>15 years</p>
                        <p className='ml-2 py-0.5 px-3 rounded-full bg-blue-100 text-sm flex'>Save<MdCurrencyRupee className='mt-[3px] '/> 2.85 Lakhs</p>   
                      </div>

                      <div className='flex'>
                        <p className='font-bold mr-1 flex'><FaRupeeSign className='mt-1'/>33,894</p>
                        <p className=''>/Year</p>
                        <p className='ml-2 bg-gray-100 text-blue-700 px-2 py-0.5 flex'>Total: <MdCurrencyRupee className='mt-[4px] '/>5,08,340</p>
                      </div>
                    </div>

                    <div className='flex justify-between border rounded-lg py-4 border-gray-300 px-2'>
                      <div className='flex items-center'>
                      <div className='h-5 mr-2 w-5 border rounded-full border-blue-900'></div>
                        <p>Pay for</p>
                        <p className='font-bold ml-1'>20 years</p>
                        <p className='ml-2 py-0.5 px-3 rounded-full bg-blue-100 text-sm flex'>Save<MdCurrencyRupee className='mt-[3px] '/> 2.29 Lakhs</p>   
                      </div>

                      <div className='flex'>
                        <p className='font-bold mr-1 flex'><FaRupeeSign className='mt-1'/>27,984</p>
                        <p className=''>/Year</p>
                        <p className='ml-2 bg-gray-100 text-blue-700 px-2 py-0.5 flex'>Total: <MdCurrencyRupee className='mt-[4px] '/>5.43,670</p>
                      </div>
                    </div>

                    <div className='flex justify-between border rounded-lg py-4 border-gray-300 px-2'>
                      <div className='flex items-center'>
                      <div className='h-5 mr-2 w-5 border rounded-full border-blue-900'></div>
                        <p>Pay for</p>
                        <p className='font-bold ml-1'>25 years</p>
                        <p className='ml-2 py-0.5 px-3 rounded-full bg-blue-100 text-sm flex'>Save<MdCurrencyRupee className='mt-[3px] '/>1.91  Lakhs</p>   
                      </div>

                      <div className='flex'>
                        <p className='font-bold mr-1 flex'><FaRupeeSign className='mt-1'/>23,971</p>
                        <p className=''>/Year</p>
                        <p className='ml-2 bg-gray-100 text-blue-700 px-2 py-0.5 flex'>Total: <MdCurrencyRupee className='mt-[4px] '/>5,76,340</p>
                      </div>
                    </div>

                    <div className='flex'> 
                      <p className='font-semibold ml-1 mr-2'>Regular pay </p>
                      <p>(Up to 65 years of your age)</p>
                    </div>

                    <div className='flex justify-between border rounded-lg py-4 border-gray-300 px-2'>
                      <div className='flex items-center'>
                      <div className='h-5 mr-2 w-5 border rounded-full border-blue-900'></div>
                        <p>Pay for</p>
                        <p className='font-bold ml-1'>30 years</p>
                        {/* <p className='ml-2 py-0.5 px-3 rounded-full bg-blue-100 text-sm flex'>Save<MdCurrencyRupee className='mt-[3px] '/> 3.66 Lakhs</p>    */}
                      </div>

                      <div className='flex'>
                        <p className='font-bold mr-1 flex'><FaRupeeSign className='mt-1'/>16,074</p>
                        <p className=''>/Year</p>
                        <p className='ml-2 bg-gray-100 text-blue-700 px-2 py-0.5 flex'>Total:<MdCurrencyRupee className='mt-[4px] '/>6,43,340</p>
                      </div>
                    </div>
                  </div>
              </div>

                {/* box 2  */}
              <div className=' overflow-hidden h-[110px] my-5 border border-gray-300 rounded-lg'>
                <div className='h-2 bg-blue-800'></div>

                <div className=' p-3 px-4'>
                  <div className='flex'>
                      <p className='font-semibold mr-2'>Available discounts </p>
                      <p >(2)</p>
                  </div>

                  <div className='flex space-x-4 mt-2'>
                    <div className='flex items-center bg-blue-600 w-fit text-white rounded-lg px-2 py-1'>
                        <TbCirclePercentage  />
                        <p className='ml-1 mr-3'>Partner: 5%  </p>
                        <p>X</p>
                    </div>

                    <div className='flex items-center bg-blue-600 w-fit text-white rounded-lg px-2 py-1'>
                        <TbCirclePercentage  />
                        <p className='ml-1 mr-3'>Worksite markup: 5% </p>
                        <p>X</p>
                    </div>
                    
                    {/* <p className=' bg-blue-600 w-fit text-white rounded-lg px-4 py-1'>Worksite markup: 5%  X</p> */}
                  </div>

                </div>
              </div>

              {/* box 3  */}
              <div className=' overflow-hidden h-[110px] my-5 bg-blue-100 border border-blue-400 rounded-lg'>
                <div className=' p-3 px-4'>
                  <div className=''>
                      <div className='flex justify-between'>
                      <p className='font-semibold mr-2 mb-4'>Story </p>
                      <p className='text-blue-700 flex text-sm'><RxCopy className='mt-0.5 mr-2'/>Copy Story</p>
                      </div>
                      <p className='text-sm'>
                      By paying  50,000 annually for 10 years (5,00,000 total), you could receive around 15-20 lakhs after 30 years, depending on the returns.
                      </p>
                  </div>

                  
                  
                </div>
              </div>
            </div>
          </div>

          <div className='w-full border-blue-400 border items-center flex p-6 justify-between bg-blue-100 h-[100px] rounded-lg'>
            <div>
              <div className='text-blue-600'>Your Premium</div>
              <div className=' flex'>
                <p className='font-semibold flex'><FaRupeeSign className='mt-1'/>94,500</p>
                <p className='mx-2'>/ Yr</p>
                <p className='text-gray-500'>(Excl. of GST)</p>
                <p className='text-blue-600 underline ml-2'>View details</p>
              </div>
            </div>

            <div className='flex space-x-5 items-center'>
              <p className='bg-white px-4 flex text-blue-700 border border-blue-700 py-2 h-fit rounded-full items-center'> <IoShareSocialOutline className='mr-2 text-2xl'/>Share BI</p>
              <p className='bg-white px-4 text-blue-700 border flex items-center border-blue-700 py-2 h-fit rounded-full '> <LuDownload className='mr-2 text-xl'/> Download BI</p>
            </div>
          </div>
       </div>

        

    </div>
     
    
    
    </>
  )
}

export default App
