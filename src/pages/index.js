import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import profilePic from "../../public/images/profile/ss.jpg";
import AnimateText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from '@/components/TransitionEffect'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>DMR</title>
        <meta name="description" content="  Function Hall" />
        
      </Head> 
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className="flex items-center justify-between w-full lg:flex-col">
            
            <div className='w-1/2 mr-12 md:mb-4 md:mr-0 md:w-full '> {/* Adjust margin with Tailwind */}
              <Image 
                src={profilePic} 
                alt="SaiSmileyEdits" 
                className='w-full h-auto lg:hidden md:inline-block md:w-full' 
                priority 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>

            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              
              <AnimateText text="DMR Kalyanamandapam." className='!text-5xl !text-left
              xl:!text-4xl lg:!text-center lg:!text-5xl md:text-4xl sm:!text-2xl
              '/>
              {/* <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
              As a skilled Editor, I am dedicated to turning ideas into innovative Viedo Edits. 
              Explore my latest projects and articles, showcasing my expertise in Adobe premierpro and Davinci.
              </p> */}
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
              Your premier venue for all events! Whether it’s a wedding, celebration, or corporate gathering, we provide the perfect space to make your occasion unforgettable. Let us help you host your next event with elegance and style.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>

                <Link href="/dummy.pdf" target={'_blank'}
                className="flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base
                dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light 
                "
                download={true}
                >Brochure <LinkArrow className={"w-6 ml-1"} />

                </Link>
                <Link href="/contact" target={'_blank'}
                className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base" 
                >Contact</Link>
              </div>
            </div>
          </div>       
        </Layout>

        {/* <HireMe /> */}
        {/* <div className='absolute right-6 bottom-9 inline-block w-16 md:hidden'>
          <Image src={lightBulb} alt="saismiley" className='w-full h-auto'  />
        </div> */}
      </main>
    </>
  )
}
