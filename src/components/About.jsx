import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import {services} from '../constants';
import {fadeIn,textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServicesCard=({index,title,icon})=>
{
  return(
    
    <Tilt className="xs:w-[250px] w-full" >
      <motion.div
       
       variants={fadeIn("index","spring",0.5*index ,0.20,)}
       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card   '
       >
<div 
 options={{
  max:45,
  scale:1,
  speed:450
 }}
 className=' rounded-[20px]  py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
  >

  <img src={icon} alt={title} className='w-16 h-16 object-contain'/>

<h3 className='text-yellow-900 text-[20px] font-bold text-center' >{title}</h3>

  </div>

       </motion.div>


    </Tilt>
    
  )
}





const About = () => {




  return (
    <>
    <motion.div  variants={textVariant()}  >

<p className={styles.sectionSubText} >
  Introduction
</p>
<h2 className={styles.sectionHeadText}  >
  Overview.
</h2>


    </motion.div>
    <motion.p
    variants={fadeIn("","",0.1,1)}
    className='mt-4 text-gray-100 text-[17px] max-w-3xl leading-[30px]'
    >
"Hi there! I'm a skilled web developer with expertise in <span className='text-green-500 outline-double'>React JS, JavaScript, HTML, CSS, and Tailwind CSS</span>. I also have strong proficiency in C++ with data structures and algorithms and enjoy practicing competitive programming. I've worked on various projects, including a news website , a top YouTube courses platform built with React. Currently, I'm seeking a frontend internship to further develop my skills and knowledge in web development. Looking forward to working on exciting projects and making a meaningful impact!"


    </motion.p>
<div className='mt-20 flex justify-center flex-wrap gap-10'>
{
  services.map((service,index)=>(
    <ServicesCard   key={service.title} index={index} {...service}/>
  ))
}

</div>

    </>
  )
}

export default SectionWrapper(About,"about");
