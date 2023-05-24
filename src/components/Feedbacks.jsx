import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import cycleImg from '../assets/cycleImg.jpg';
import { Tilt } from "react-tilt";
const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
 <div>
  
    <p className='text-yellow-800 font-black text-[48px]'>"</p>

    <div className=''>
    <h1 className="text-[40px] text-bold text-yellow-900 " >Honors And Awards</h1>
      <p className='text-yellow-900 tracking-wider text-[18px]'> AKTU Zonal level Gold medallist in Volleyball (2022)</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
       

       
      </div>

      {/* second award */}
      <p className='text-yellow-900 tracking-wider text-[18px]'> AKTU Zonal level Gold medallist in Volleyball (2022)</p>

<div className='mt-7 flex justify-between items-center gap-1'>
 

  <img
    src={image}
    alt={`feedback_by-${name}`}
    className='w-10 h-10 rounded-full object-cover'
  />
</div>
    </div>
 
 
    </div> 
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 mb-10 relative rounded-[20px]`}>




    <div className="absolute w-[100%] h-[150%]  " >
    <img 
    className="w-[100%] rounded-[20px] object-cover  h-[70%] opacity-20"
      src={cycleImg}
    />

    </div>
      <div
        className={` rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>LifeStyle:</p>
          <h2 className={styles.sectionHeadText}>"</h2>
        </motion.div>
      </div>
      <div className={`  justify-center -mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={index} index={index} {...testimonial} />
        ))}
      </div>

      
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");