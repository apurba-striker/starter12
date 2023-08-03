import { motion } from "framer-motion";

export const Block = () => {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className='w-full py-16 text-[#1A535C] px-4 bg-[#D0E7EB]'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
          <div className='lg:col-span-2 my-4'>
            <h1 className='md:text-4xl sm:text-3xl text-3xl font-bold font py-2'>
              Find Out how you Can Scale
            </h1>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold font py-2'>
              your lending business with us
            </h1>
            
          </div>
          <div className='my-4 justify-center items-center'>
            
              <button className='bg-[#00df9a] text-[#ffffff]  font-medium w-[200px] ml-4 my-6 px-6 py-3'>
                Schedule a demo
              </button>
            </div>
          
          </div>
        </div>
      
      </motion.div>
    );
  };
  