
import { motion, useForceUpdate, useIsomorphicLayoutEffect, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon';

const Details =({type, time, place, info}) => {
    const ref = useRef(null);

    return (
    <li ref={ref} className='my-8 first:mt=0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]' >

    <LiIcon reference={ref}/>
        <motion.div initial={{y:50}} whileInView={{y:0}} 
        transition={{duration:0.5, type:"spring"}}>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {type}&nbsp;
            </h3>
            <span className='capitalize font-medium text-dark/75  dark:text-light/75 xs:text-sm'>
                {time} |  {place}
            </span>
            <p className='font-medium w-full md:text-sm '>
                {info}
            </p>
        </motion.div>
    </li>
    )
}


const Education = () => {
    const ref = useRef(null);
    // const {scrollYProgress} = useScroll(
    //     {
    //         target : ref,
    //         offest: ["start end", "center start"]
    //     }
    // )
  return (
 

    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center  md:text-6xl xs:text-4xl md:mb-16'>Education</h2>
    
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div  className='absolute left-9 top-8 w-[4px] h-full bg-dark origin-top  dark:bg-light
        md:w-[2px] md:left-[30px] xs:left-[20px]
        ' />
        {/* <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-8 w-[4px] h-full bg-dark origin-top' /> */}

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                <Details 
                    type="Master of Business Administration - MBA" 
                    time="2023-2025" 
                    place="Mysore University, Mysore"
                    info="Human Resources Management/Personnel Administration, General."
                />
                 
            </ul>

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                <Details 
                    type="Bachelor's degree 0f Mechanical Engineering" 
                    time="2018-2022" 
                    place="Vasireddy Venkatadri Institute of Technology"
                    info="While pursuing a Bachelor's degree in Mechanical Engineering, I worked on a project related to Hospital Domain which sparked my interest in web development."
                />
                 
            </ul>


            <ul className="w-full flex flex-col items-start  justify-between ml-4  xs:ml-2 ">
                <Details 
                    type="Board of Intermediate Education" 
                    time="2016-2018" 
                    place="Sri Chaitanya College of Education"
                    info="MPC."
                />
                 
            </ul>

        
        </div>

    </div>
  )
}

export default Education