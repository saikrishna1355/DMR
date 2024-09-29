import React from 'react'
import { motion } from "framer-motion";

const Skill = ({name, x, y}) => {

    return(
         <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light 
            py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
            lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
            xs:text-dark xs:dark:text-light xs:font-bold
            '
            whileHover={{scale:1.05}}
            initial={{x:0,y:0}}
            whileInView={{x:x,y:y, transition:{duration: 1.5}}}
            viewport={{once:true}}
            >
              {name}
         </motion.div>
    )
  }


const skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
        lg:h-[80vh]  sm:h-[60vh]  xs:h-[50vh] 
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm
        '>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light  
            lg:p-6 md:p-6 xs:text-xs xs:p-2
            p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light'  whileHover={{scale:1.05}} >
            Edits </motion.div>

            <Skill name="Adobe" x="-5vw" y="-10vw" />
            <Skill name="Premier pro" x="-25vw" y="3vw" />
            <Skill name="Davinci" x="20vw" y="9vw" />
            <Skill name="After Effects" x="0vw" y="12vw" />
            <Skill name="Alightmotion" x="-20vw" y="-15vw" />
            <Skill name="Photoshop" x="15vw" y="-12vw" />
            <Skill name="Colour Grading" x="0vw" y="-22vw" />
            <Skill name="Cinematic Edits" x="25vw" y="-3vw" />
            <Skill name="Wedding invitations" x="18vw" y="19vw" />
            <Skill name="Birthday Edits" x="-23vw" y="18vw" /> 
            <Skill name="Common dp's" x="25vw" y="-18vw" />

        </div>
    </>
  )
}

export default skills