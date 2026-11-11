import bgShadow from '../../assets/bg-shadow.png'
import footerImg from '../../assets/logo-footer.png'
const Footer = () => {
  return (
   
    <footer className="relative bg-[#060814] text-white pt-34 pb-12 mt-42 ">
      {/* 
        Subscribe Card Layer 
        - top-0 & -translate-y-1/2 ব্যবহার করে Card-টিকে ঠিক Footer-এর উপরের বর্ডারে অর্ধেক ঢুকিয়ে দেওয়া হয়েছে।
      */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 mt-10">
        <div 
          className="max-w-4xl mx-auto rounded-3xl p-10 shadow-2xl text-center border border-white/60  bg-cover bg-center bg-white"
          style={{ backgroundImage: `url(${bgShadow})` }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Get the latest updates and news right in your inbox!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-3 border border-gray-300 rounded-xl w-full outline-none text-black"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-pink-400 to-amber-300 font-bold rounded-xl text-black whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-4 mt-12 text-center ">
        <div className='flex flex-col justify-center items-center'>
          <img src={footerImg} alt="" />
        </div>
        <div className='grid md:grid-cols-3 grid-cols-1 mt-8 mb-4 gap-30 pb-12 border-b border-gray-500'>
          <div>
            <h4 className='text-[1.2rem] font-bold text-start mb-3'>About Us</h4>
            <p className='font-normal text-gray-400 text-start'>We are a passionate team dedicated to providing the best services to our customers.</p>
          </div>
          <div>
            <h4 className='text-[1.2rem] font-bold mb-3 text-start'>Quick Links</h4>
            <div className='text-gray-500 space-y-2 text-start ml-8 '> 
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a>  </li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            </div>
          </div>
          <div>
            <h4 className='text-[1.2rem] font-bold mb-3 text-start'>Subscribe</h4>
            <p className='text-gray-400 text-start' >Subscribe to our newsletter for the latest updates.</p>
              <div className="flex flex-col sm:flex-row justify-center  max-w-md mx-auto  mt-2">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-2 border border-gray-300 rounded-l-xl w-full outline-none bg-white text-black"
            />
            <button className="px-6 py-2 bg-gradient-to-r from-pink-400 to-amber-300 font-bold rounded-r-xl text-black whitespace-nowrap">
              Subscribe
            </button>
          </div>
          </div>
        </div>
      
        <p className="text-gray-400 text-sm">© 2026 All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

