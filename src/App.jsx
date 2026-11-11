import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { useState } from "react"
import Hero from "./Components/HeroSection/Hero"
import Navbar from "./Components/NavBar/Navbar"
import ToggleButton from "./Components/Toggle Button/ToggleButton"
import Footer from "./Components/Footer/Footer";


function App() {
  
  const [isActive , setIsActive] = useState({
    status : true,
    active : "Available"
  });

  const [freeCredit , setFreeCredit] = useState(0);
  const [selectedCart , setSelectedCart] = useState([]);

  const handleIsActive = (status) => {
    if(status === "Available"){
      setIsActive({
        status: true,
        active : "Available"
      });
    }
    else{
      setIsActive({
        status:false, 
        active: "Selected"
      });
    }
  }

  const handleFreeCreditButton = (freeCredit) =>{
    toast.success("Congratulation ! You have Succesfully Claim free Credit")
    setFreeCredit(freeCredit + 5000000)
  } 

  // chose player button functionality added 

  const handleChossePlayer = (product) => {
    const isExist = selectedCart.find(productId => productId.id === product.id);
    if(!freeCredit){
     toast.error("Please Claim free Credit")
    }
    if(selectedCart.length >= 6){
      toast.error("Already Selected 6 Players!");
      return;
      }  
    else if (product.price > freeCredit){
      toast.error("Not Enough Credit ! Please Cliam more free Credit")
    }
    else if(isExist){
      toast.error("Already Selected this Player");
      return;
    }
   
    else{
      const RemainingPrice = freeCredit - product.price ;
      setFreeCredit(RemainingPrice);
      toast.success(`Congratulation ! ${product.name} Selected your Squad`)

      const newProduct = [... selectedCart , product];
      setSelectedCart (newProduct)
    }
  }

const handleDeleteCartItem = (id) =>{
   const RemainningCart = selectedCart.filter(p => p.id !== id);
   setSelectedCart(RemainningCart)
}

 return (
    <>
       <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="light"
      />
        <div>
         <Navbar freeCredit  = {freeCredit}></Navbar>

         <div className="container px-6  mx-auto  font">
            <Hero handleFreeCreditButton={handleFreeCreditButton} 
            freeCredit={freeCredit}
            ></Hero>
            
            <ToggleButton 
              isActive = {isActive}
              handleIsActive={handleIsActive}
              handleChossePlayer = {handleChossePlayer}
              selectedCart = {selectedCart}
              handleDeleteCartItem ={handleDeleteCartItem}
              ></ToggleButton>
             
         </div>
          <Footer></Footer>
       
        </div>
        
    </>

  )
}

export default App
