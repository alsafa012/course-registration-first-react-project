import { useEffect } from "react";
import { useState } from "react";
import { BiBookOpen } from "react-icons/bi";
import { LuDollarSign } from "react-icons/lu";
import Card from "./Card";
import Swal from "sweetalert2";

const Home = () => {
     const [allData, setData] = useState([]);
     const [selectedBtn, setSelectedBtn] = useState([]);
     const [totalCredit, setTotalCredit] = useState(0);
     const [remainingCredits, setRemainingCredits] = useState(0);
     const [totalCost, setTotalCost] = useState(0);

     useEffect(() => {
          fetch("./data.json")
               .then((res) => res.json())
               .then((data) => setData(data));
     }, []);

     const handleSelectBtn = (item) => {
          let count = item.credit;
          let cost = item.price;
          const isExist = selectedBtn.find((arr) => arr.id === item.id);
          if (isExist) {
               return Swal.fire({
                    icon: "error",
                    title: "You already select this course!!!",
                    text: "#Cannot select multiple time!!!",
               });
          } else {
               selectedBtn.forEach((data) => {
                    count = count + data.credit;
                    cost = cost + data.price;
               });
               const remainingCredit = 20 - count;
               if (count > 20) {
                    return Swal.fire({
                         icon: "error",
                         title: "",
                         text: "",
                    });
               }
               setTotalCost(cost);
               setRemainingCredits(remainingCredit);
               setTotalCredit(count);
               const newData = [...selectedBtn, item];
               setSelectedBtn(newData);
          }
          console.log(count);
     };

     return (
          <div className="container mx-auto bg-[#F3F3F3] ">
               <h1 className="text-center font-bold text-3xl py-10">
                    Course Registration
               </h1>
               <div className=" md:flex gap-5">
                    {/* cards div */}
                    <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-3 gap-3  mb-10">
                         {allData.map((data) => (
                              <div
                                   className=" bg-white rounded-xl ml-2"
                                   key={data.id}
                              >
                                   <div className="p-3 space-y-4">
                                        <div className="space-y-4">
                                             <img src={data.img} alt="" />
                                             <h1 className="font-bold text-lg">
                                                  {data.course_name}
                                             </h1>
                                             <p className="text-justify">
                                                  {data.title}
                                             </p>
                                        </div>
                                        <div className="flex gap-2 justify-between items-center">
                                             <p className="text-2xl">
                                                  <LuDollarSign></LuDollarSign>
                                             </p>
                                             <p>Price : {data.price}</p>
                                             <p className="text-2xl">
                                                  <BiBookOpen></BiBookOpen>
                                             </p>
                                             <p>Credit : {data.credit}hr</p>
                                        </div>
                                        <div className=" text-center">
                                             <button
                                                  onClick={() =>
                                                       handleSelectBtn(data)
                                                  }
                                                  className=" w-full px-4 py-2 text-white font-bold bg-[#2F80ED] rounded-xl"
                                             >
                                                  Select
                                             </button>
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>
                    {/* end cards div */}
                    <div className="w-[300px] mt-10 md:mt-0 mx-auto md:mr-2">
                         <Card
                              totalCost={totalCost}
                              selectedBtn={selectedBtn}
                              remainingCredits={remainingCredits}
                              totalCredit={totalCredit}
                         ></Card>
                    </div>

               </div>
          </div>
     );
};

export default Home;
