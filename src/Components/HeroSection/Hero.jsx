import bg from '../../assets/bg-shadow.png'
import main from '../../assets/banner-main.png'
const Hero = ({handleFreeCreditButton , freeCredit}) => {
  return (
    <div> 
    <div>
        <img 
        src={bg}
        alt="Background" 
        className="bg-black rounded-2xl inset-0 "
      />

      <div className="absolute inset-0 flex flex-col space-y-7 mt-24 items-center justify-center">
        <img 
          src={main}
          alt="Main Profile" 
          className=" object-cover "
        />

         <h1 className='text-4xl text-white font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
         <h3 className='font-semibold text-2xl text-gray-400'>Beyond Boundaries Beyond Limits</h3>
         <button onClick={() => handleFreeCreditButton(freeCredit)} className='font-bold px-4 py-3.5 border-2 border-black  outline-2 outline-[#E2FF2E] outline-offset-4  rounded-lg  bg-[#e7fe29]'>Claim Free Credit</button>
      </div>
       
    </div>
    </div>
  );
};

export default Hero;