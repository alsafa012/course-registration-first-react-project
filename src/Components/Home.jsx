import { useEffect } from "react";
import { useState } from "react";
import { BiBookOpen } from "react-icons/bi";
import { LuDollarSign } from "react-icons/lu";
import Card from "./Card";
import Swal from "sweetalert2";
import { Audio } from "react-loader-spinner";
const Home = () => {
     const [allData, setData] = useState([]);
     const [selectedBtn, setSelectedBtn] = useState([]);
     const [totalCredit, setTotalCredit] = useState(0);
     const [remainingCredits, setRemainingCredits] = useState(20);
     const [totalCost, setTotalCost] = useState(0);
     const [loading , setLoading] = useState(true);

     useEffect(() => {
          fetch("./data.json")
               .then((res) => res.json())
               .then((data) => setData(data));
               setLoading(false);
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
                         icon: "warning",
                         title: "Credit Limit Exist!!!",
                         text: "#cannot add more!!",
                    });
               }
               setTotalCost(cost);
               setRemainingCredits(remainingCredit);
               setTotalCredit(count);
               const newData = [...selectedBtn, item];
               setSelectedBtn(newData);
          }
     };
     // remove courses from list
     const removeCourse = (idx) => {
          const item = selectedBtn.filter((item) => item.id === idx.id);
          setSelectedBtn(item);
          // experiment for math calculations
          /*  const remainingCredit = item.reduce((acc, course) => course.credit + acc,0)
          setTotalCredit(remainingCredit)
          // const remainingCost = item.reduce((acc, course) => course.credit + acc,0)
          // setRemainingCredits(remainingCost)
          // const remaining = item.reduce((acc, courses) => courses.price - acc,0)
          // setTotalCost(remaining)
          // setRemainingCredits(remainingCredit + item.credit)
               
          // selectedBtn.find((item) => {

          //      setTotalCredit(totalCredit - item.credit);
          //      setRemainingCredits(remainingCredits + item.credit);
          //      setTotalCost(totalCost - item.price);
          // });

          // setTotalCost(totalCost - selectedBtn[0].price); */
     };
     return (
          <div className="container mx-auto bg-[#F3F3F3] ">
               {loading && <div className="flex items-center justify-center">
                    <Audio
                         height="80"
                         width="80"
                         radius="9"
                         color="green"
                         ariaLabel="three-dots-loading"
                         wrapperStyle
                         wrapperClass
                    />
               </div>}
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
                                             <img
                                                  className="w-full"
                                                  src={data.img}
                                                  alt=""
                                             />
                                             <h1 className="font-bold text-lg">
                                                  {data.course_name}
                                             </h1>
                                             <p className="text-justify">
                                                  {data.title}
                                             </p>
                                        </div>
                                        <div className="flex gap-2 justify-between items-center">
                                             <button className="text-2xl">
                                                  <LuDollarSign></LuDollarSign>
                                             </button>
                                             <p>Price : {data.price}</p>
                                             <button className="text-2xl">
                                                  <BiBookOpen></BiBookOpen>
                                             </button>
                                             <p>Credit : {data.credit}hr</p>
                                        </div>
                                        <div className=" text-center">
                                             <button
                                                  onClick={() =>
                                                       handleSelectBtn(data)
                                                  }
                                                  className=" w-full px-4 py-2 text-white font-bold bg-[#2F80ED] rounded-xl"
                                             >
                                                  {/* {setSelectedBtn(!selectedBtn) ? 'Selected' : 'Select'} */}
                                                  {selectedBtn.includes(data)
                                                       ? "Selected"
                                                       : "Select"}
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
                              removeCourse={removeCourse}
                         ></Card>
                    </div>
               </div>
          </div>
     );
};

export default Home;
