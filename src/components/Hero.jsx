import { useState } from "react";
import { motion } from "framer-motion";



export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      className="w-screen h-screen flex justify-center items-center mb-[28vw] md:mb-[18vw] lg:mb-[18vw] xl:mb-[18vw] 2xl:mb-60  pb-24 sm:pb-32 md:pb-44 lg:pb-0 bg-[#D0E7EB]"
      id="home"
    >
      <div className="w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-30 lg:pt-30 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}ma
        >
          <div className="text-5xl sm:text-4xl lg:text-6xl xl:text-6xl font-bold tracking-wide  text-green-500  px-35 py-30 sm:px-15 py-10 md:px-40 lg:px-4 font-abc">
            Zero NPA<span className="text-[#1A535C] font-abc"> with DPDzero</span>
          
</div>
        
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className=" justify-center text-[#1A535C] text-sm lg:text-base xl:text-lg sm:text-base mt-5 px-10 sm:px-48v font-abc ">
          Helping you driving the focus back 
          </div>
          <div className=" justify-center items-center text-[#1A535C] text-sm lg:text-base xl:text-lg sm:text-base  sm:px-48v font-abc ">on what you do best, lending</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="flex flex-col gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
         
            
          <div className="w-64 sm:w-52 h-12 font-bold text-[#FFFFFF] border border-solid  flex justify-center items-center cursor-pointer bg-[#35B771] transition"
             onClick={() => setIsModalOpen(true)}
            >
               Schedule a Demo
            </div> 

          </div>
        </motion.div>
     
        
      </div>
      
    </section>
  );
};
