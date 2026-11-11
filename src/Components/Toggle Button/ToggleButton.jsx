import Available from "../Available Section/Available";
import Selected from "../Selected Section/Selected";

const ToggleButton = ({handleIsActive , isActive , handleChossePlayer,selectedCart , handleDeleteCartItem}) => {
  return (
    <div>
         <div className="flex justify-between items-center sticky top-0 z-50 py-20 ">

         <h1 className="font-bold text-2xl">Available Players </h1>

      <div>
      <button  onClick={() => handleIsActive("Available")} className={`${isActive.status ? " bg-[#e7fe29] font-bold text-black" : "bg-white text-gray-500 font-normal outline outline-gray-200"} px-4 py-2  rounded-l-md `} >Available</button>
      <button onClick={() => handleIsActive ("Selected")} className= {`${!isActive.status ? "font-bold text-black bg-[#e7fe29] " : "bg-white text-gray-500 font-normal outline outline-gray-200"} px-4 py-2  rounded-r-md  `}>Selected ({`${selectedCart.length}`})</button>
      </div>
     
         </div>
      {
        isActive.status ? <Available handleChossePlayer = {handleChossePlayer}></Available> : <Selected 
        selectedCart={selectedCart}
        handleIsActive={handleIsActive}
        handleDeleteCartItem={handleDeleteCartItem}
        ></Selected>
      }
    </div>

  
  );
};

export default ToggleButton;