'use client';

import React, { useEffect, useRef,useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import numbeingss from './image/numbeingss.png';
import image2 from './image/image2.png';
import Image from 'next/image';
import Link from 'next/link';
import Crxconving from './Crxconving';
import CryptoTable from './CryptoTable';

gsap.registerPlugin(ScrollTrigger);


const Pagetwo = () => {
 const wrapperRef = useRef(null);
   const gridItem1Ref = useRef(null);
   const gridItem2Ref = useRef(null);
   const gridItem3Ref = useRef(null);
   const titleRef = useRef(null);
   const acquireRef = useRef(null);
 
   useEffect(() => {
     const mm = gsap.matchMedia();
 
     mm.add(
       {
         isDesktop: '(min-width: 768px)',
         isMobile: '(max-width: 767px)',
       },
       (context) => {
         const { isDesktop, isMobile } = context.conditions;
 
         // Main wrapper animation
         gsap.fromTo(
           wrapperRef.current,
           { y: isMobile ? 50 : 100, opacity: 0 },
           {
             y: 0,
             opacity: 1,
             duration: isMobile ? 1 : 1.5,
             ease: 'power3.out',
             scrollTrigger: {
               trigger: wrapperRef.current,
               start: isMobile ? 'top 90%' : 'top 80%',
               end: 'top 20%',
               scrub: 0.8,
             },
           }
         );
 
         // Title animation
         gsap.fromTo(
           titleRef.current,
           { y: 30, opacity: 0, scale: 0.95 },
           {
             y: 0,
             opacity: 1,
             scale: 1,
             duration: 1,
             ease: 'power2.out',
             scrollTrigger: {
               trigger: titleRef.current,
               start: 'top 85%',
               end: 'top 50%',
               scrub: 0.8,
             },
           }
         );
 
         // Grid items animation (individual with slight stagger)
         [gridItem1Ref, gridItem2Ref, gridItem3Ref].forEach((ref, index) => {
           gsap.fromTo(
             ref.current,
             { y: 50, opacity: 0, scale: 0.9 },
             {
               y: 0,
               opacity: 1,
               scale: 1,
               duration: 1,
               delay: index * 0.25, // Manual stagger effect
               ease: 'power3.out',
               scrollTrigger: {
                 trigger: ref.current,
                 start: 'top 80%',
                 end: 'top 30%',
                 scrub: 0.8,
               },
             }
           );
         });
 
         // Acquire CRX section animation
         gsap.fromTo(
           acquireRef.current,
           { y: 50, opacity: 0, scale: 0.95 },
           {
             y: 0,
             opacity: 1,
             scale: 1,
             duration: 1.2,
             ease: 'power3.out',
             scrollTrigger: {
               trigger: acquireRef.current,
               start: 'top 85%',
               end: 'top 40%',
               scrub: 0.8,
             },
           }
         );
       }
     );
 
     return () => mm.revert(); // Cleanup
   }, []);
 
 
   // itesms
 
   const itemRefs = useRef([]);
 
   useEffect(() => {
     itemRefs.current.forEach((el, index) => {
       if (!el) return;
 
       gsap.fromTo(
         el,
         {
           autoAlpha: 0,
           y: 50,
         },
         {
           autoAlpha: 1,
           y: 0,
           duration: 0.3,
           ease: 'power2.out',
           scrollTrigger: {
             trigger: el,
             start: 'top 100%',
             toggleActions: 'play none none none',
           },
           delay: index * 0.1, // Delay between each item
         }
       );
     });
   }, []);
 


    
    return (
        <div id='About' ref={wrapperRef} className='py-[45px] sm:py-[60px] md:py-[90px] lg:py-[120px] xl:py-[150px] 2xl:py-[180px] px-6 sm:px-0'>
           <div className='container mx-auto'>
              {/* <Image ref={wrapperRef} src={image2} alt='image2'/> */}
              <CryptoTable/>
           </div>
        </div>
    );
};

export default Pagetwo;