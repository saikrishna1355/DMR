import AnimateText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import A1 from "../../public/images/photos/10.jpg";
import A2 from "../../public/images/photos/1.jpg";
import A3 from "../../public/images/photos/2.jpg";
import A4 from "../../public/images/photos/3.jpg";
import A5 from "../../public/images/photos/4.jpg";
import A6 from "../../public/images/photos/5.jpg";
import A7 from "../../public/images/photos/6.jpg";
import A8 from "../../public/images/photos/7.jpg";
import A9 from "../../public/images/photos/8.jpg";
import A10 from "../../public/images/photos/9.jpg";
import A11 from "../../public/images/photos/11.jpg";
import A12 from "../../public/images/photos/12.jpg";
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


const photos = () => {
  return (
    <>
      <Head>
        <title>DMR | Photos Page</title>
        <meta name="description" content="DMR | Photos Page" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center  dark:text-light">
      <Layout className="pt-16">
        <AnimateText text="Capturing Memories at DMR Kalyanamandapam!" className="mb-16 lg:text-7xl sm:text-7xl xs:text-4xl sm:mb-8" />
        <div className="grid w-full gap-8 sm:grid-cols-1 md:grid-cols-1 grid-cols-3">
    {/* Profile Pictures */}
    {[A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, A11, A12].map((pic, index) => (
        <div key={index} className="relative h-64 rounded-2xl border-2 border-solid border-dark bg-light p-6 dark:bg-dark dark:border-light overflow-hidden">
            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
            <Image
                src={pic}
                alt="saismiey"
                className="w-full h-full object-cover rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
    ))}
</div>


        {/* Uncomment if needed */}
        {/* <Skills /> */}
        {/* <Experience /> */}
        {/* <Education /> */}
      </Layout>




      </main>
    </>
  );
};

export default photos;
