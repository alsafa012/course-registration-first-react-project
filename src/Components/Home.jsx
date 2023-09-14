// import React from 'react';

import { useEffect } from "react";
import { useState } from "react";
import Cart from "./Cart";

const Home = () => {
     const [allData, setData] = useState([]);

     useEffect(() => {
          fetch("./data.json")
               .then((res) => res.json())
               .then((data) => setData(data));
     }, []);

     return (
          <div className="container mx-auto bg-[#F3F3F3]">
               <h1 className="text-center font-bold text-3xl my-10">Course Registration</h1>
               <div className=" md:flex gap-5">
                    {/* cards div */}
                    <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                         {allData.map((data) => (
                              <div className=" bg-white rounded-xl ml-2" key={data.id}>
                                   <div className="p-3 space-y-2">
                                   <div className="space-y-2">
                                        {/* < className=""> */}
                                        <img 
                                             src={data.img}
                                             alt=""
                                        />
                                        {/* </> */}
                                        <h1 className="font-bold text-lg">{data.course_name}</h1>
                                        <p>
                                             {data.title}
                                        </p>
                                   </div>
                                   <div className="flex">
                                        <p>*</p>
                                        <p>Price : {data.price}</p>
                                        <p>*</p>
                                        <p>Credit :{data.credit}</p>
                                   </div>
                                   <div className=" text-center">
                                   <button className=" w-full px-4 py-2 text-white font-bold bg-[#2F80ED] rounded-xl">Select</button>
                                   </div>
                                   </div>
                              </div>
                         ))}
                    </div>
                    {/* end cards div */}
                    <div className="w-[300px] mt-10 md:mt-0 mx-auto">
                         <Cart></Cart>
                    </div>

                    {/* parent div */}
               </div>
          </div>
     );
};

export default Home;
{
     /* <div className="grid md:grid-cols-3">
                        <div>
                        <div>
                         <img src="https://i.ibb.co/02njNmZ/mysql.png" alt="" />
                         <h1>Introduction to C Programming</h1>
                         <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout.
                         </p>
                         </div>
                         <div className="flex">
                              <p>*</p>
                              <p>Price : 15000</p>
                              <p>*</p>
                              <p>Credit : 1hr</p>
                         </div>
                         <button>Select</button>
                        </div>
                    </div> */
}
