import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimateText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import project1 from "../../public/images/projects/1.jpg";
import project2 from "../../public/images/projects/corporate-event.jpg";
import project3 from "../../public/images/projects/bb.jpg";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex item-center justify-between relative rounded-br-2xl
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8  xs:rounded-2xl xs:rounded-br-3xl xs:p-4
    "
    >
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden  rounded-lg lg:w-full"
      >
        <div
          className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
              rounded-br-3xl xs:-right-2  sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
              "
        />

        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light  sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        {/* <div className="mt-2 flex items-center"> */}
          {/* <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link> */}
          {/* <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold
            sm:px-4 sm:text-base
            "
          >
            Visit Project
          </Link> */}
        {/* </div> */}
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark
    dark:border-light dark:bg-dark xs:p-4
     bg-light p-6 relative ">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden  rounded-lg"
      >
        <div
          className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light 
              rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] sm-rounded-[1.5rem]
              "
        />

        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base ">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <div className=" w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold  underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>DMR | Services Page</title>
        <meta name="description" content="Sai Smiley  About Page" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimateText text="Elevate Your Events at DMR Kalyanamandapam!" className="mb-16
          lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl
          " />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProjects
                title="Wedding Ceremony"
                img={project1}
                summary="At DMR Kalyanamandapam, we offer the ideal setting for your dream wedding. Our elegant venue caters to both intimate gatherings and grand celebrations, featuring beautiful decor and modern amenities. With a dedicated team to manage every detail, you can focus on celebrating your love and creating unforgettable memories with family and friends."
                link="/"
                github="/"
                type="DMR Kalyana Mandapam"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjects
                title="Birthday Party"
                img={project3}
                summary="Celebrate your birthday at DMR Kalyanamandapam! Our versatile venue is perfect for any party, big or small. With customizable decor and modern amenities, we cater to all ages. Our team will help you plan every detail, ensuring your day is filled with joy and lasting memories. Make your birthday extraordinary—every moment is a reason to celebrate! "
                link="/"
                github="/"
                type="DMR Kalyana Mandapam"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProjects
                title="Social/Corporate Events"
                img={project2}
                summary="Host your events at DMR Kalyanamandapam, where professionalism meets elegance. Our spacious venue is perfect for conferences, workshops, team-building activities, and social gatherings. With modern amenities and flexible seating, we customize each event to your needs."
                link="/"
                github="/"
                type="DMR Kalyana Mandapam"
              />
            </div>
            
            
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
