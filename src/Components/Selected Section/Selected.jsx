import { MdDelete } from "react-icons/md";
const Selected = ({selectedCart ,handleIsActive , handleDeleteCartItem}) => {
  return (
    <div>
       <h1 className="text-2xl font-bold"> Selected Players ({selectedCart.length}/6)</h1>

       {
        selectedCart.map(product => {
              return(
            <div className="flex justify-between mt-4 outline outline-gray-300 p-4 items-center rounded-xl">
              <div key={product.id }  className="flex gap-3 ">
              <div>
                  <img className="w-20 h-16 rounded-lg" src={product.image} alt="" />
              </div>

              <div className="flex flex-col">
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p className="text-gray-600">{product.role}</p>
              </div>
            </div>
            <div>
              <button onClick={() => handleDeleteCartItem(product.id)}  className="cursor-pointer"><MdDelete size={30} color="red"/></button>
            </div>
            </div>
          )
        })
       }
          <button
              onClick= {() => handleIsActive("Available")}
              className="bg-[#e7fe29] p-3 rounded-lg font-bold mt-5 cursor-pointer">
              Add More Player
            </button>
    </div>
  );
};

export default Selected;