
import PropTypes from "prop-types";
const Card = ({ selectedBtn, totalCredit, remainingCredits, totalCost }) => {
     return (
          <div className="bg-white rounded-xl p-5 space-y-5">
               <h4 className="border-b-2 text-[#2F80ED] font-semibold text-[19px] py-4">
                    Credit Hour Remaining {remainingCredits}hr
               </h4>
               <h1 className="font-bold text-2xl my-2">Course Name</h1>
               {selectedBtn.map((btn ,index) => (
                    <div key={btn.id}>
                         <div>
                              <p>{index+1}. {btn.course_name} </p>
                         </div>
                    </div>
               ))}
               <h2 className="border-y-2 py-4 font-semibold">
                    Total Credit Hour : {totalCredit}
               </h2>
               <h3 className="font-semibold ">Total Price : {totalCost} USD</h3>
          </div>
     );
};
Card.propTypes = {
     selectedBtn: PropTypes.array.isRequired,
     totalCredit: PropTypes.number.isRequired,
     remainingCredits: PropTypes.number.isRequired,
     totalCost: PropTypes.number.isRequired,
};
export default Card;
