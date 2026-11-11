import userImg from "../../assets/user.png";
import flag from "../../assets/flag.png";
const Player = ({p,handleChossePlayer}) => {
  const {  name, image, country, role, rating, price } = p ;
  return (
    <div className=" outline outline-gray-200 rounded-lg  ">
      <div className="card bg-base-100  ">
        <figure>
          <img className="w-full h-70" src={image} alt={name} />
        </figure>
        <div className="card-body">
          <div className="flex items-center">
            <img className="w-8 opacity-80" src={userImg} alt="" />
            <h2 className="font-bold text-xl">{name}</h2>
          </div>

          <div className="flex justify-between border-b mb-3 pb-4 border-gray-200">
            <div className="flex gap-2 items-center">
              <img className="w-6 h-6 opacity-50" src={flag} alt="" />
              <p className=" text-[1rem]">{country}</p>
            </div>
            <h3 className=" bg-base-300 p-2 rounded-xl">{role}</h3>
          </div>
          <h4 className="font-bold text-[1rem]">Rating</h4>
          <div className="flex justify-between text-gray-600 mt-2 ">
            <span>{rating.batting}</span>
            <span>{rating.bowling}</span>
          </div>
          <div className="card-actions justify-end mt-2 items-center">
            <p className="text-gray-600">Price : ${price}</p>
            <button
              onClick={() => handleChossePlayer(p)}
              className="outline outline-gray-300 p-2 rounded-xl hover:bg-[#e7fe29] transition-colors ease-in-out ">
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
