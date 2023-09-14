// import React from 'react';

const Cart = ({ selectedBtn ,totalCredit ,remainingCredits}) => {
     // console.log(selectedBtn)
     // const { id } = selectedBtn;
     return (
          <div className="bg-white rounded-xl p-5">
               <p className="font-bold text-center">Cart Section</p>
               <h4 className="border-b-2 text-[#2F80ED] font-semibold text-xl py-4">Credit Hour Remaining : {remainingCredits}hr</h4>
               <h1 className="font-bold text-2xl my-2">Course Name</h1>
               {selectedBtn.map((btn) => (
                    <div key={btn.id}>
                         <li> {btn.course_name} </li>
                    </div>
               ))}
               <h2 className="border-y-2 py-4">Total Credit Hour : {totalCredit}</h2>
          </div>
     );
};

export default Cart;
