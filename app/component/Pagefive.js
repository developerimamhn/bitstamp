"use client";


import React,{useEffect,useState,useRef} from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Image from 'next/image';






const Pagefive = () => {



      // hhsvs



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
        <div id='Support' className='section7 relative -mt-[1] pb-[50px] sm:pb-[60px] md:pb-[70px] lg:pb-[90px] xl:pb-[120px] 2xl:pb-[150px]'>
          <div className='container mx-auto' >
              <div className='py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[80px] bg-[#9226E0]'>
                <h2 className='sta7i09w text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[64px] 2xl:text-[99px] text-center'>Stay in the know</h2>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2'>
                <div className='signandpage py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[73px] px-[24px] sm:px-[32px] md:px-[36px] lg:px-[40px] xl:px-[48px] 2xl:px-[68px]'>
                  <p className='signpuptatg text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[36px] 2xl:text-[42px] text-center sm:text-start '>Sign up to our mailing list to receive the latest wallet news, features updates, and more importantly, giveaways.</p>
                </div>
                <div className='singpupagelogin flex items-center justify-center py-[32px] sm:py-[36px] md:py-[40px] lg:py-[48px] xl:py-[64px] 2xl:py-[73px] px-[24px] sm:px-[32px] md:px-[36px] lg:px-[40px] xl:px-[48px] 2xl:px-[68px]'>
                  <div className='singpuinput flex items-center justify-between px-[20px] sm:px-[24px] md:px-[32px] lg:px-[36px] xl:px-[40px] 2xl:px-[50px]'>
                    <input type='gmail' placeholder='Enter your mail' className='inpuitiname text-[15px] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[32px] 2xl:text-[35px] w-8/10 outline-none'/>
                    <svg xmlns="http://www.w3.org/2000/svg" className='cursor-pointer w-[20px] sm:w-[24px] md:w-[32px] lg:w-[36px] xl:w-[40px] !2xl:w-[44px]' viewBox="0 0 44 36" fill="none">
                    <path d="M24.843 0.0889359C24.4215 0.249733 24.0258 0.571323 23.0796 1.52762C22.0473 2.55163 21.8065 3.03401 21.8667 3.90569C21.8925 4.29498 21.9785 4.64195 22.0989 4.88737C22.2366 5.14972 23.7161 6.66457 26.9935 9.89738L31.6903 14.535L16.7742 14.552L1.84946 14.5773L1.41935 14.772C0.860215 15.0259 0.455914 15.4067 0.206452 15.9314C0.0172043 16.3291 0 16.4476 0 17.9709V19.5873L0.266667 20.1036C0.541936 20.6452 0.946237 21.0345 1.52258 21.2884C1.83226 21.4238 2.82151 21.4322 16.8172 21.4576L31.7763 21.4746L26.9505 26.2391C21.6344 31.4777 21.8495 31.2322 21.8495 32.307C21.8495 33.0856 22.1849 33.6272 23.3376 34.7358C23.871 35.2521 24.4387 35.7429 24.6022 35.8276C25.0237 36.0561 26.4086 36.0561 26.8387 35.836C27.2516 35.616 43.4753 19.6635 43.7677 19.1896C43.9742 18.8511 44 18.7241 44 18.0048C44 17.387 43.9656 17.1331 43.8452 16.9046C43.6215 16.4984 27.4065 0.529007 26.9333 0.249733C26.6237 0.07201 26.4258 0.0296974 25.8581 0.00431061C25.4108 -0.0126152 25.0495 0.0212364 24.843 0.0889359Z" fill="#F3E2FF"/>
                  </svg>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Pagefive;