'use client';


import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import righticon from './image/righticon.png';
import image1 from './image/image1.png';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const HeroPage = () => {

  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animation for text elements
    gsap.from(textRef.current, {
      opacity: 0,
      x: -100,
      duration: 1.5,
      ease: 'power2.out',
    });

    // Animation for buttons
    gsap.from(buttonRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 0.5, // Delay to make the buttons appear after text animation
      ease: 'power2.out',
    });

    // Animation for image
    gsap.from(imageRef.current, {
      opacity: 0,
      x: 100,
      duration: 1.5,
      delay: 0.5,
      ease: 'power2.out',
    });
  }, []);





  const gridItems = [
    {
      icon: (
        <svg className="h-[24px] sm:h-[32px] md:h-[36px] lg:h-[40px] xl:h-[48px] 2xl:h-[64px]" viewBox="0 0 70 71" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M56.2928 4.85063V34.8846C56.2928 35.9058 55.8871 36.8852 55.165 37.6073C54.4429 38.3294 53.4635 38.7351 52.4423 38.7351H4.88078C3.85956 38.7351 2.88017 38.3294 2.15806 37.6073C1.43595 36.8852 1.03027 35.9058 1.03027 34.8846V4.85063C1.03027 3.82941 1.43595 2.85002 2.15806 2.12791C2.88017 1.4058 3.85956 1.00012 4.88078 1.00012H52.4115C52.9197 0.996057 53.4237 1.09266 53.8945 1.28434C54.3652 1.47603 54.7933 1.759 55.1541 2.11696C55.515 2.47492 55.8013 2.90077 55.9968 3.36996C56.1922 3.83914 56.2928 4.34237 56.2928 4.85063V4.85063Z" fill="#9226E0" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M48.5316 8.9706C50.1393 8.9706 51.4426 7.6673 51.4426 6.05961C51.4426 4.45191 50.1393 3.14862 48.5316 3.14862C46.9239 3.14862 45.6206 4.45191 45.6206 6.05961C45.6206 7.6673 46.9239 8.9706 48.5316 8.9706Z" fill="white" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M56.2933 12.9749H1V21.7772H56.2933V12.9749Z" fill="white" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M68.9685 16.7796V46.8136C68.9685 47.8348 68.5629 48.8142 67.8407 49.5363C67.1186 50.2584 66.1392 50.6641 65.118 50.6641H17.5873C16.5661 50.6641 15.5867 50.2584 14.8646 49.5363C14.1425 48.8142 13.7368 47.8348 13.7368 46.8136V16.7796C13.7368 15.7584 14.1425 14.779 14.8646 14.0569C15.5867 13.3348 16.5661 12.9291 17.5873 12.9291H65.118C66.1392 12.9291 67.1186 13.3348 67.8407 14.0569C68.5629 14.779 68.9685 15.7584 68.9685 16.7796V16.7796Z" fill="white" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M61.2381 20.8996C62.8458 20.8996 64.1491 19.5963 64.1491 17.9887C64.1491 16.381 62.8458 15.0777 61.2381 15.0777C59.6304 15.0777 58.3271 16.381 58.3271 17.9887C58.3271 19.5963 59.6304 20.8996 61.2381 20.8996Z" fill="white" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M68.9999 24.904H13.7065V33.7063H68.9999V24.904Z" fill="#7827B3" stroke="#7827B3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
      ),
      title: 'Your money, <br className="md:block hidden"/> your way',
      description:
        'Pay friends and family in seconds. Send to a username, phone number, or email.',
      padding:
        'py-[32px] sm:py-[36px] md:py-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[84px] pl-[20px] sm:pl-[24px] md:pl-[32px] lg:pl-[36px] xl:pl-[40px] 2xl:pl-[51px] pr-[32px] sm:pr-[36px] md:pr-[40px] lg:pr-[48px] xl:pr-[64px] 2xl:pr-[77px]',
    },
    {
      icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-[24px] sm:h-[32px] md:h-[36px] lg:h-[40px] xl:h-[48px] 2xl:h-[64px]" viewBox="0 0 95 102" fill="none">
  <path d="M79.1748 21.2764H1.44482V68.0364H79.1748V21.2764Z" fill="white" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M73.1051 26.1367H7.51514V63.1767H73.1051V26.1367Z" fill="#9226E0" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M40.312 57.4062C47.3536 57.4062 53.062 51.6979 53.062 44.6562C53.062 37.6146 47.3536 31.9062 40.312 31.9062C33.2704 31.9062 27.562 37.6146 27.562 44.6562C27.562 51.6979 33.2704 57.4062 40.312 57.4062Z" fill="white" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M83.4848 21.9445L6.1792 13.833L1.29957 60.3377L78.6052 68.4492L83.4848 21.9445Z" fill="white" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M76.9501 26.1454L11.7183 19.3008L7.85296 56.1385L73.0848 62.9832L76.9501 26.1454Z" fill="#9226E0" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M55.0743 42.4663C55.3377 39.9579 54.8512 37.4277 53.6764 35.1958C52.5015 32.9639 50.6911 31.1306 48.4741 29.9278C46.2572 28.7251 43.7333 28.2069 41.2217 28.4388C38.7102 28.6707 36.3239 29.6423 34.3646 31.2307C32.4054 32.8191 30.9613 34.9528 30.215 37.3621C29.4687 39.7714 29.4537 42.3479 30.172 44.7657C30.8902 47.1835 32.3095 49.3339 34.2501 50.9449C36.1908 52.556 38.5657 53.5552 41.0743 53.8163C44.4356 54.1661 47.7983 53.1671 50.4234 51.0389C53.0486 48.9106 54.7214 45.8273 55.0743 42.4663Z" fill="white" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M91.5486 24.4644L17.4448 1L3.32935 45.5786L77.4332 69.043L91.5486 24.4644Z" fill="white" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M84.3031 27.2685L21.7729 7.46875L10.5917 42.7808L73.1218 62.5805L84.3031 27.2685Z" fill="#9226E0" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M59.6046 38.877C60.3655 36.4727 60.3962 33.8967 59.693 31.4749C58.9898 29.0531 57.5842 26.8943 55.654 25.2713C53.7237 23.6484 51.3556 22.6344 48.849 22.3574C46.3424 22.0804 43.81 22.553 41.5721 23.7154C39.3341 24.8777 37.491 26.6776 36.2761 28.8875C35.0611 31.0973 34.5287 33.6178 34.7463 36.1303C34.9638 38.6427 35.9216 41.0342 37.4984 43.0023C39.0751 44.9704 41.2001 46.4266 43.6046 47.187C46.8284 48.2008 50.3226 47.8955 53.3216 46.3379C56.3207 44.7802 58.58 42.0973 59.6046 38.877Z" fill="white" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M65.4073 93.7572C75.0903 91.5555 81.155 81.9211 78.9533 72.2382C76.7517 62.5553 67.1173 56.4905 57.4343 58.6922C47.7514 60.8939 41.6867 70.5283 43.8884 80.2112C46.09 89.8941 55.7244 95.9589 65.4073 93.7572Z" fill="white" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M49.5555 64.9365H47.5854" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M47.4328 67.667H45.6128" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M46.2242 71.1562H44.5542" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.7625 78.2871H43.7925" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M75.5433 89.4978C82.8622 82.7866 83.3548 71.4129 76.6435 64.094C69.9323 56.7751 58.5587 56.2825 51.2398 62.9938C43.9209 69.705 43.4283 81.0786 50.1395 88.3975C56.8507 95.7164 68.2244 96.209 75.5433 89.4978Z" fill="white" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M65.431 89.1087C72.5445 87.9846 77.3999 81.3067 76.2757 74.1931C75.1516 67.0796 68.4737 62.2243 61.3601 63.3484C54.2466 64.4725 49.3913 71.1504 50.5154 78.264C51.6395 85.3775 58.3174 90.2328 65.431 89.1087Z" fill="white" stroke="#9226E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M62.5144 68.3964V67.2764H64.4444V68.3964C66.1144 68.7364 66.9744 70.0164 66.9744 72.0564V72.5264H64.7444V71.9064C64.7444 70.8364 64.3144 70.4264 63.5644 70.4264C62.8144 70.4264 62.3844 70.8364 62.3844 71.9064C62.3844 74.9964 66.9944 75.1464 66.9944 79.4264C66.9944 81.4264 66.1144 82.7664 64.4444 83.1164V84.2064H62.5144V83.1164C60.8244 82.7664 59.9644 81.4664 59.9644 79.4264V78.4264H62.1944V79.6064C62.1944 80.6764 62.6644 81.0664 63.4144 81.0664C64.1644 81.0664 64.6344 80.6764 64.6344 79.6064C64.6344 76.5264 60.0244 76.3764 60.0244 72.0864C60.0744 69.9964 60.8644 68.7064 62.5144 68.3964Z" fill="#9226E0"/>
  <path d="M71.3677 79.0192C81.0108 76.6489 86.9064 66.9101 84.5361 57.2671C82.1658 47.6241 72.427 41.7284 62.784 44.0987C53.141 46.4691 47.2453 56.2078 49.6156 65.8509C51.9859 75.4939 61.7247 81.3896 71.3677 79.0192Z" fill="white" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M55.2156 50.2666H53.2456" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M53.0929 52.9971H51.2729" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M51.8744 56.4766H50.2144" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M51.4226 63.6064H49.4526" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M82.3268 73.658C89.0226 66.3251 88.5062 54.9525 81.1733 48.2566C73.8404 41.5607 62.4678 42.0771 55.7719 49.4101C49.076 56.743 49.5925 68.1156 56.9254 74.8115C64.2583 81.5073 75.6309 80.9909 82.3268 73.658Z" fill="white" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M81.1048 66.4889C83.8387 59.8262 80.6538 52.2087 73.9911 49.4748C67.3285 46.7409 59.711 49.9258 56.9771 56.5885C54.2431 63.2512 57.428 70.8686 64.0907 73.6026C70.7534 76.3365 78.3709 73.1516 81.1048 66.4889Z" fill="white" stroke="#9226E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M68.1745 53.6669V52.5469H70.0745V53.6669C71.7545 54.0069 72.6045 55.2869 72.6045 57.3269V57.7969H70.3745V57.1769C70.3745 56.1069 69.9545 55.6969 69.2045 55.6969C68.4545 55.6969 68.0245 56.1069 68.0245 57.1769C68.0245 60.2669 72.6245 60.4169 72.6245 64.6969C72.6245 66.6969 71.7545 68.0369 70.0745 68.3869V69.4769H68.1745V68.3969C66.4745 68.0469 65.6245 66.7469 65.6245 64.7069V63.7069H67.8445V64.8869C67.8445 65.9569 68.3245 66.3469 69.0745 66.3469C69.8245 66.3469 70.2945 65.9569 70.2945 64.8869C70.2945 61.8069 65.6845 61.6569 65.6845 57.3669C65.6845 55.3169 66.5245 54.0269 68.1745 53.6669Z" fill="#9226E0"/>
</svg>
      ),
      title: 'Earn crypto',
      description:
        'Earn competitive crypto rewards by staking our native DIVI coin.',
      padding:
        'py-[24px] sm:py-[32px] md:py-[36px] lg:pt-[40px] xl:pt-[48px] 2xl:pt-[68px] pl-[20px] sm:pl-[24px] md:pl-[32px] lg:pl-[36px] xl:pl-[40px] 2xl:pl-[51px] pr-[32px] sm:pr-[36px] md:pr-[40px] lg:pr-[48px] xl:pr-[64px] 2xl:pr-[77px]',
    },
    {
      icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-[24px] sm:h-[32px] md:h-[36px] lg:h-[40px] xl:h-[48px] 2xl:h-[64px]" viewBox="0 0 73 85" fill="none">
  <path d="M35.1759 73.9226C47.5973 71.0983 55.3772 58.7391 52.5529 46.3177C49.7285 33.8963 37.3694 26.1164 24.948 28.9407C12.5266 31.7651 4.74662 44.1242 7.57097 56.5456C10.3953 68.967 22.7545 76.747 35.1759 73.9226Z" fill="white" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.8396 36.9492H12.3125" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M48.1767 68.4572C57.5655 59.8479 58.1974 45.2577 49.5882 35.8689C40.9789 26.4801 26.3886 25.8482 16.9999 34.4575C7.61111 43.0667 6.97918 57.657 15.5884 67.0458C24.1977 76.4345 38.788 77.0665 48.1767 68.4572Z" fill="white" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M35.2059 67.9581C44.3313 66.5161 50.5598 57.9495 49.1177 48.8242C47.6757 39.6989 39.1091 33.4703 29.9838 34.9124C20.8585 36.3544 14.6299 44.921 16.072 54.0463C17.514 63.1717 26.0806 69.4002 35.2059 67.9581Z" fill="#9A32E6" stroke="#9226E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M31.4626 41.3879V39.9512H33.9384V41.3879C36.0807 41.8241 37.1839 43.4661 37.1839 46.083V46.686H34.3233V45.8906C34.3233 44.518 33.7716 43.992 32.8095 43.992C31.8474 43.992 31.2958 44.518 31.2958 45.8906C31.2958 49.8545 37.2096 50.0469 37.2096 55.5374C37.2096 58.103 36.0807 59.822 33.9384 60.271V61.6692H31.4626V60.271C29.2946 59.822 28.1914 58.1543 28.1914 55.5374V54.2546H31.0521V55.7683C31.0521 57.1409 31.655 57.6412 32.6171 57.6412C33.5792 57.6412 34.1822 57.1409 34.1822 55.7683C34.1822 51.8172 28.2684 51.6248 28.2684 46.1215C28.3325 43.4404 29.3459 41.7856 31.4626 41.3879Z" fill="white"/>
  <path d="M42.8237 55.0155C55.1939 51.9748 62.757 39.4817 59.7163 27.1115C56.6756 14.7413 44.1826 7.17821 31.8123 10.2189C19.4421 13.2596 11.879 25.7527 14.9197 38.1229C17.9605 50.4931 30.4535 58.0562 42.8237 55.0155Z" fill="white" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M22.1014 18.1318H19.5742" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M19.3816 21.6328H17.0469" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17.8131 26.0977H15.6836" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M17.2381 35.2441H14.7109" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M56.8795 48.1385C65.4691 38.7318 64.8066 24.1428 55.3998 15.5532C45.993 6.96368 31.4041 7.62616 22.8145 17.0329C14.2249 26.4397 14.8874 41.0287 24.2942 49.6182C33.701 58.2078 48.2899 57.5453 56.8795 48.1385Z" fill="white" stroke="#9226E0" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M55.3134 38.9425C58.8205 30.3955 54.7348 20.6237 46.1878 17.1166C37.6408 13.6094 27.8691 17.6951 24.3619 26.2421C20.8548 34.7891 24.9404 44.5609 33.4874 48.068C42.0344 51.5751 51.8062 47.4895 55.3134 38.9425Z" fill="#9A32E6" stroke="#9226E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M38.7243 22.4934V21.0566H41.1616V22.4934C43.3168 22.9296 44.4072 24.5716 44.4072 27.1885V27.7914H41.5465V26.9961C41.5465 25.6235 41.0077 25.0975 40.0456 25.0975C39.0835 25.0975 38.5319 25.6235 38.5319 26.9961C38.5319 30.96 44.4328 31.1524 44.4328 36.6429C44.4328 39.2085 43.3168 40.9275 41.1616 41.3764V42.7747H38.7243V41.3893C36.5435 40.9403 35.4531 39.2726 35.4531 36.6557V35.3729H38.301V36.8866C38.301 38.2592 38.9167 38.7595 39.8788 38.7595C40.8409 38.7595 41.4439 38.2592 41.4439 36.8866C41.4439 32.9355 35.5301 32.7431 35.5301 27.2398C35.5301 24.61 36.6077 22.9552 38.7243 22.4934Z" fill="white"/>
</svg>
      ),
      title: 'Convert crypto',
      description:
        'Convert crypto from any wallet with low-fees, and complete flexibility.',
      padding:
        'py-[32px] sm:py-[36px] md:py-[40px] lg:pt-[48px] xl:pt-[64px] 2xl:pt-[74px] pl-[20px] sm:pl-[24px] md:pl-[32px] lg:pl-[36px] xl:pl-[40px] 2xl:pl-[51px] pr-[32px] sm:pr-[36px] md:pr-[40px] lg:pr-[48px] xl:pr-[64px] 2xl:pr-[77px]',
    },
  ];
  const itemRefs = useRef([]);
  // GSAP animation effect
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
          duration: 1,
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
        <div id="hero" ref={buttonRef} className='relative'>
          <div className='relative z-[2] overflow-hidden'>
            <div className='pt-[50px] sm:pt-[81px] md:pt-[32px] lg:pt-[36px] xl:pt-[30px] 2xl:pt-[30px] sm:pb-0 pb-[50px] container mx-auto px-[24px] sm:px-0 w-full flex felx-center justify-center'>
                <div  className='grid grid-cols-1 sm:grid-cols-2 items-center'>
                  <div className=''>
                    <span className='welcobits'>Welcome to bitstamp</span>
                    <h2 className='tradines text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[64px] 2xl:text-[75px]'><span className=' bg-[#03FC9E] rounded-[5px] !text-[#15161B]'>Buy & tradeon</span> the original trusted crypto exchange. </h2>
                    <p className='bitstartp text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] pt-[14px] sm:pt-[15px] md:pt-[16px] lg:pt-[20px] xl:pt-[24px] 2xl:pt-[30px]'>Bitstamp makes trading easy, fast & reliable. With live customer support, staking andbank-grade security & insurance.Trusted Crypto Exchange Since 2011.</p>
                    <button className='buttonaudit cursor-pointer text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] flex items-center h-[36px] md:h-[40px] lg:h-[44px] xl:h-[48px] 2xl:h-[59px] px-[16px] sm:px-[20px] md:px-[24px] lg:px-[32px] xl:px-[36px] 2xl:px-[40px] group gap-[7.50px] mt-[20px] sm:mt-[24px] md:mt-[32px] lg:mt-[36px] xl:mt-[40px] 2xl:mt-[47px]'>
                    Get started
                    </button>
                  </div>
                  <div className='relative'>
                    <Image className='w-9/10' src={image1} alt='loading...'/>
                    <svg className='w-full absolute right-0 top-0 -z-10' viewBox="0 0 1188 1171" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g opacity="0.76" filter="url(#filter0_f_214_329)">
                      <circle cx="594" cy="577" r="194" fill="#03FC9E"/>
                      </g>
                      <defs>
                      <filter id="filter0_f_214_329" x="0" y="-17" width="1188" height="1188" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_214_329"/>
                      </filter>
                      </defs>
                      </svg>
                  </div>
                  
                </div>
            </div>
          </div>
        </div>
    );
};

export default HeroPage;