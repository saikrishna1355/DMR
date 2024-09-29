import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () =>{
    return (
        <footer className='w-full border-t-2 border-solid border-dark dark:text-light
        dark:border-light sm:text-base
        font-medium text-lg 
        '>
            {/* <Layout className='py-2 flex items-center  lg:flex-col lg:py-8' >
                <p>{new Date().getFullYear()} &copy; All Rights Reserved</p>
            </Layout> */}
            <Layout className='py-2 flex items-center justify-center lg:flex-col lg:py-8 h-full'>
    <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
</Layout>
        </footer>
        
    )
}

export default Footer