import logo from "../../assets/logo.png";
import coin from "../../assets/dollar.png";

const Navbar = ({freeCredit}) => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/60 backdrop-blur-md pb-6 px-12 pt-4 font">
      <div className="flex justify-between items-center list-none   ">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center gap-8 text-gray-700 hover:text-black">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Fixture</a>
          </li>
          <li>
            <a href="#">Teams</a>
          </li>
          <li>
            <a href="#">Schedule</a>
          </li>
          <div className=" outline outline-gray-200  rounded flex gap-2 items-center px-6 p-3">
            <button className="font-semibold">{freeCredit} coin </button>
            <img className="w-5" src={coin} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
