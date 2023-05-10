import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github ,reactjs} from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import {fadeIn,textVariant} from '../utils/motion';
import {Tilt} from 'react-tilt';


const ProjectCard=({index,name,description,tags,image,source_code_link,projectLink})=>{

     return (
      <motion.div variants={fadeIn("up","spring",index*0.5,0.75)} >
        <Tilt
        options={{max:45,scale:1,speed:450}}
        className="green-pink-gradien bg-black bg-opacity-20 p-5 rounded-2xl sm:w-[360px] w-full"
        >
<div className='w-full relative h-[230px] ' >
<img  src={image} className='w-full h-full object-cover rounded-2xl'   />
<div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
<div onClick={()=>window.open(source_code_link,"_blank")}
className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer '
 >
 <img src={github}
 className='w-1/2 h-1/2 object-contain'
  />

</div>

<div onClick={()=>window.open(projectLink,"_blank")}
className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer '
 >
 <img src={reactjs}
 className='w-1/2 h-1/2 object-contain'
  />

</div>


</div>
</div>

<div className='mt-5' >
<h3 className='text-white font-bold text-[24px] ' >
  {name}
</h3>
<p  className='mt-2 text-secondary text-[14px]' >
  {description}
</p>

</div>
<div className='mt-4 flex flex-wrap gap-2 ' >
{tags.map((tag)=>
(
  <p key={tag.name} className={`text-[14px] ${tag.color} `} >{`#${tag.name}`}</p>
))}
</div>
        </Tilt>
      </motion.div>
     )
}

const Works = () => {
  return (
    <>

          <motion.div variants={textVariant()} >
            <p id="work" className={styles.sectionSubText} >
           MY WORK
            </p>
          <h2 className={styles.sectionHeadText} >
              Projects...
          </h2>
          </motion.div>
    
    <div className='w-full flex' >
       <motion.p 
       variants={fadeIn("","",0.1,1)}
       className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
    

   
        </motion.p>
    </div>

    <div className='mt-20 flex flex-wrap gap-7 ' >
    {
      projects.map((project,index)=>
      (
        
        <ProjectCard   key={`project-${index}`}
        index={index}
        {...project}

         />
      )
      )
    }

    </div>


    </>
  )
}

export default  SectionWrapper(Works,"");