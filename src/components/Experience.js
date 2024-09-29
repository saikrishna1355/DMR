
import { motion, useForceUpdate, useIsomorphicLayoutEffect, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from './LiIcon';

const Details =({poistion, company, companyLink, time, address, work}) => {
    const ref = useRef(null);

    return (
    <li ref={ref} className='my-8 first:mt=0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
    md:w-[80%]
    ' >

    <LiIcon reference={ref}/>
        <motion.div initial={{y:50}} whileInView={{y:0}} 
        transition={{duration:0.5, type:"spring"}}>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {poistion}&nbsp;<a href={companyLink} target="_blank" className='text-primary dark:text-primaryDark capitalize'>@{company}</a>
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} |  {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
    )
}


const Experience = () => {
    const ref = useRef(null);
    // const {scrollYProgress} = useScroll(
    //     {    
    //         target : ref,
    //         offest: ["start end", "center start"]
    //     }
    // )
  return (
 

    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center
        md:text-6xl xs:text-4xl md:mb-16
        '>Experience</h2>
    
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div  className='absolute left-9 top-8 w-[4px] h-full bg-dark origin-top dark:bg-light 
        md:w-[2px] md:left-[30px] xs:left-[20px]
        ' />
        {/* <motion.div style={{scaleY: scrollYProgress}} className='absolute left-9 top-8 w-[4px] h-full bg-dark origin-top' /> */}
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                <Details 
poistion="ShortFilim Editor" company="Friends"
time="2022-Present" address="Guntur"
work="Worked on a team responsible for developing new effects for ShortFilim 
Colour Grading , including improving the accuracy and relevance of Colours and 
developing Transistions for ShortFilim and visualization."
                />

                <Details
poistion="viedo Editor" company="Friends"
time="Summer 2021" address="Guntur"
work="Worked on a team responsible for developing a new new effects that allowed Viewers to view and 
share short-form video content, including designing and implementing a new user interface and developing 
the Edits to support the feature."
                />

                <Details
poistion="Editor" company="youtube"
time="2020-2021" address="Online"
work="Worked on a team responsible for editing, including implementing new features such 
as Cinematic Edits and Reels, and optimizing the Viewers Satisfaction."
                />

            </ul>
        </div>

    </div>
  )
}

export default Experience