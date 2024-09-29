import AnimateText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import profilepic from "../../public/images/profile/aa.jpg";
import profilepic1 from "../../public/images/profile/qq.jpg";
import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";


const AnimatedNumbers = ({valve}) => {
    const ref = useRef(null);
    
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000});
    const isInView = useInView(ref, {once:true});
    
    useEffect(() => {
        if(isInView){
            motionValue.set(valve);
        }
    }, [isInView, valve, motionValue])
    
    useEffect(() => {
        springValue.on("change", (latest) =>{
            if(ref.current && latest.toFixed(0) <= valve ){
                ref.current.textContent = latest.toFixed(0);
            }
            
        })
    }, [springValue, valve, ])
    
    
    
    
        return <span ref={ref}></span>
    }


const about = () => {
  return (
    <>
      <Head>
        <title>Sai Smiley | About Page</title>
        <meta name="description" content="Sai Smiley  About Page" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center  dark:text-light">
        <Layout className="pt-16">
          <AnimateText text="Passion Fuels Purpose! " className="mb-16 lg:!text-7xl sm:!text-7xl xs:!text-4xl sm:mb-8" />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            {/* Biography */}
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
               - Established with a vision to host unforgettable events, DMR Kalyanamandapam is a premier event space that caters to a variety of occasions. From elegant weddings and joyous family celebrations to corporate functions and community gatherings, we offer a versatile and spacious venue designed to meet your needs.
              </p>

              <p className="my-4 font-medium">
                - Our facility is equipped with modern amenities, including ample seating, state-of-the-art sound systems, and customizable decor options. We pride ourselves on our commitment to excellence and customer satisfaction, ensuring every detail is taken care of for a seamless experience.
              </p>

              <p className="font-medium">
                - At DMR Kalyanamandapam, we believe in creating memories that last a lifetime. Let us be a part of your special moments!
              </p>
            </div>

            {/* Prpfile Picture */}
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8
            dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 mb-10
            ">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"/>
              <Image
                src={profilepic1}
                alt="saismiey"
                className="w-full h-auto rounded-2xl"
                priority 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
               <Image
                src={profilepic}
                alt="saismiey"
                className="w-full h-auto rounded-2xl mt-2 "
                priority 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* skills */}
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers valve={2500} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm">
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold  md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers valve={500} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm">
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold  md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers valve={30} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>

         {/* <Skills />
         <Experience />
         <Education /> */}
        </Layout>
      </main>
    </>
  );
};

export default about;
