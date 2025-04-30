'use client'


import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import logo from "./image/logo.png";


gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null); 
    const menuButtonRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);
  
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
      ) {
        setToggle(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  
    const handleScroll = (e, sectionId) => {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 50,
          behavior: "smooth",
        });
        setToggle(false);
      }
    };
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    useEffect(() => {
      // Example of animating elements when they come into view
      gsap.fromTo('.feature', 
        { opacity: 0, y: 50 }, 
        {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          scrollTrigger: {
            trigger: '.feature',
            start: 'top 80%',
            end: 'bottom top',
            toggleActions: 'play none none none'
          }
        }
      );
  
      // Example of animating the button with scale and opacity
      gsap.fromTo('.buttonaudit-3', 
        { opacity: 0, scale: 0.8 }, 
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'ease-in-out',
          scrollTrigger: {
            trigger: '.buttonaudit-3',
            start: 'top 80%',
            end: 'bottom top',
            toggleActions: 'play none none none'
          }
        }
      );
    }, []);
  
    const [isTranslated, setIsTranslated] = useState(false);
  
    const handleClick = () => {
      setIsTranslated(true);
      setTimeout(() => {
        setIsTranslated(false);
      }, 200);
    };


    const iconRefs = useRef([]);

  useEffect(() => {
    // GSAP entrance animation for icons
    gsap.fromTo(
      iconRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      }
    );
  }, []);

  // Handle hover animation with GSAP
  const handleMouseEnter = (index) => {
    gsap.to(iconRefs.current[index], {
      scale: 1.2,
      rotate: 10,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(iconRefs.current[index], {
      scale: 1,
      rotate: 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const socialLinks = [
    { href: 'https://twitter.com', icon: 'twitter' },
    { href: 'https://linkedin.com', icon: 'linkedin' },
    { href: 'https://facebook.com', icon: 'facebook' },
    { href: 'https://instagram.com', icon: 'instagram' },
    { href: 'https://telegram.org', icon: 'telegram' },
  ];
  
    return (
        <div id='Wiki' className=''>
            <div className='w-full '>
                <div className='flex items-start justify-between sm:flex-row flex-col gap-[40px] pb-[24px] sm:pb-[32px] md:pb-[36px] lg:pb-[40px] xl:pb-[48px] 2xl:pb-[60px] container mx-auto px-[24px] sm:px-0'>
                    <div className='grid grid-cols-12 gap-[36px] sm:gap-[40px] md:gap-[48px] lg:gap-[64px] xl:gap-[96px] 2xl:gap-[128px] h-full '>
                      <div className='col-span-10 sm:col-span-3'>
                        <Image className='sm:w-[50px] md:w-[60px] lg:w-[70px] xl:w-[90px] 2xl:w-[110px] w-[135px] ' src={logo} alt="loading..."/>
                        <p className='privacypolicy text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] mt-[13px] sm:mt-[14px] md:mt-[15px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[24px]'>Bitstamp USA, Inc. is licensed to engage in Virtual Currency Business Activity by the New York State Department of Financial Services.</p>
                        <div className="flex justify-start items-center gap-[12px] sm:gap-[13px] md:gap-[14px] lg:gap-[15px] xl:gap-[16px] 2xl:gap-[20px] mt-[16px] sm:mt-[20px] md:mt-[24px] lg:mt-[32px] xl:mt-[36px] 2xl:mt-[40px] ">
                          {socialLinks.map((link, index) => (
                            <a
                              key={index}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="cursor-pointer transition-colors duration-300 hover:fill-blue-500"
                              onMouseEnter={() => handleMouseEnter(index)}
                              onMouseLeave={() => handleMouseLeave(index)}
                              ref={(el) => (iconRefs.current[index] = el)}
                            >
                              {link.icon === 'twitter' && (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 40 40"
                                  fill="none"
                                  className="fill-white h-[20px] sm:h-[24px] md:h-[28px] lg:h-[32px] xl:h-[36px] 2xl:h-[40px]"
                                >
                                  <path
                                    d="M20 0C16.0444 0 12.1776 1.17298 8.8886 3.37061C5.59962 5.56823 3.03617 8.69181 1.52242 12.3463C0.00866562 16.0009 -0.387401 20.0222 0.384303 23.9018C1.15601 27.7814 3.06082 31.3451 5.85787 34.1421C8.65492 36.9392 12.2186 38.844 16.0982 39.6157C19.9778 40.3874 23.9992 39.9913 27.6537 38.4776C31.3082 36.9638 34.4318 34.4004 36.6294 31.1114C38.827 27.8224 40 23.9556 40 20C40 14.6957 37.8929 9.60859 34.1421 5.85786C30.3914 2.10714 25.3043 0 20 0ZM27.9875 16.8875V17.425C27.9863 19.5213 27.4213 21.5787 26.3517 23.3816C25.2821 25.1845 23.7473 26.6666 21.9081 27.6725C20.0689 28.6783 17.9929 29.171 15.8979 29.0989C13.8028 29.0268 11.7657 28.3925 10 27.2625C12.1739 27.5195 14.3613 26.9086 16.0875 25.5625C15.2306 25.5465 14.4002 25.2633 13.7122 24.7523C13.0242 24.2413 12.513 23.5282 12.25 22.7125C12.5054 22.7622 12.7649 22.7873 13.025 22.7875C13.3927 22.7879 13.7587 22.7374 14.1125 22.6375C13.1826 22.4501 12.3462 21.947 11.7447 21.2135C11.1433 20.4799 10.814 19.5611 10.8125 18.6125C11.3838 18.9288 12.0223 19.1045 12.675 19.125C11.8082 18.5405 11.1965 17.6479 10.9643 16.6286C10.7321 15.6092 10.8968 14.5397 11.425 13.6375C12.4572 14.9084 13.7451 15.948 15.2052 16.6888C16.6653 17.4296 18.2648 17.8551 19.9 17.9375C19.6953 17.0568 19.7866 16.1333 20.1596 15.3097C20.5327 14.4861 21.1668 13.8084 21.9637 13.3815C22.7607 12.9545 23.6762 12.8021 24.5685 12.9478C25.4608 13.0935 26.2802 13.5292 26.9 14.1875C27.8216 14.006 28.7053 13.6678 29.5125 13.1875C29.2056 14.1413 28.5611 14.9503 27.7 15.4625C28.4969 15.3434 29.2719 15.1076 30 14.7625C29.4599 15.5841 28.7786 16.3036 27.9875 16.8875Z"
                                    fill="inherit"
                                  />
                                </svg>
                              )}
                              {link.icon === 'linkedin' && (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="40"
                                  height="40"
                                  viewBox="0 0 40 40"
                                  fill="none"
                                  className="fill-white h-[20px] sm:h-[24px] md:h-[28px] lg:h-[32px] xl:h-[36px] 2xl:h-[40px]"
                                >
                                  <path
                                    d="M20 0C16.0444 0 12.1776 1.17298 8.8886 3.37061C5.59962 5.56823 3.03617 8.69181 1.52242 12.3463C0.00866562 16.0009 -0.387401 20.0222 0.384303 23.9018C1.15601 27.7814 3.06082 31.3451 5.85787 34.1421C8.65492 36.9392 12.2186 38.844 16.0982 39.6157C19.9778 40.3874 23.9992 39.9913 27.6537 38.4776C31.3082 36.9638 34.4318 34.4004 36.6294 31.1114C38.827 27.8224 40 23.9556 40 20C40 14.6957 37.8929 9.60859 34.1421 5.85786C30.3914 2.10714 25.3043 0 20 0ZM14.4 28.3625H10.5V15.8625H14.4V28.3625ZM12.35 14.325C12.0463 14.3549 11.7396 14.3206 11.45 14.2243C11.1604 14.1279 10.8944 13.9717 10.6691 13.7658C10.4439 13.5598 10.2645 13.3088 10.1426 13.029C10.0207 12.7492 9.95911 12.4468 9.96175 12.1416C9.9644 11.8364 10.0312 11.5352 10.158 11.2576C10.2847 10.9799 10.4684 10.732 10.6972 10.53C10.926 10.328 11.1947 10.1764 11.4859 10.0851C11.7772 9.9938 12.0843 9.9648 12.3875 10C12.691 9.96732 12.998 9.99889 13.2885 10.0927C13.579 10.1865 13.8465 10.3403 14.0737 10.5443C14.3008 10.7483 14.4824 10.9978 14.6068 11.2766C14.7311 11.5554 14.7954 11.8572 14.7954 12.1625C14.7954 12.4678 14.7311 12.7696 14.6068 13.0484C14.4824 13.3272 14.3008 13.5767 14.0737 13.7807C13.8465 13.9847 13.579 14.1385 13.2885 14.2323C12.998 14.3261 12.691 14.3577 12.3875 14.325H12.35ZM30 28.3625H25.575V21.9125C25.575 20.225 24.8875 19.075 23.3625 19.075C22.8952 19.0768 22.4403 19.2248 22.0614 19.4983C21.6825 19.7718 21.3988 20.157 21.25 20.6C21.1553 20.9329 21.1214 21.2801 21.15 21.625V28.375H16.775V15.875H21.15V17.8375C21.521 17.1552 22.0826 16.5957 22.7663 16.2272C23.45 15.8587 24.2261 15.6973 25 15.7625C27.775 15.7625 30 17.5625 30 21.425V28.3625Z"
                                    fill="inherit"
                                  />
                                </svg>
                              )}
                              {link.icon === 'facebook' && (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="40"
                                  height="40"
                                  viewBox="0 0 40 40"
                                  fill="none"
                                  className="fill-white h-[20px] sm:h-[24px] md:h-[28px] lg:h-[32px] xl:h-[36px] 2xl:h-[40px]"
                                >
                                  <path
                                    d="M20 0C16.0444 0 12.1776 1.17298 8.8886 3.37061C5.59962 5.56823 3.03617 8.69181 1.52242 12.3463C0.00866562 16.0009 -0.387401 20.0222 0.384303 23.9018C1.15601 27.7814 3.06082 31.3451 5.85787 34.1421C8.65492 36.9392 12.2186 38.844 16.0982 39.6157C19.9778 40.3874 23.9992 39.9913 27.6537 38.4776C31.3082 36.9638 34.4318 34.4004 36.6294 31.1114C38.827 27.8224 40 23.9556 40 20C40 14.6957 37.8929 9.60859 34.1421 5.85786C30.3914 2.10714 25.3043 0 20 0ZM24.4125 16.6125L24.1875 19.6H21.1125V30H17.2375V19.6H15.175V16.6125H17.2375V14.6C17.1417 13.5236 17.3726 12.4432 17.9 11.5C18.2655 10.9993 18.7517 10.5992 19.3134 10.337C19.8751 10.0747 20.494 9.95879 21.1125 10C22.3741 9.94219 23.6374 10.0685 24.8625 10.375L24.35 13.4375C23.8079 13.2876 23.2497 13.2036 22.6875 13.1875C21.8875 13.1875 21.1625 13.475 21.1625 14.275V16.6125H24.4125Z"
                                    fill="inherit"
                                  />
                                </svg>
                              )}
                              {link.icon === 'instagram' && (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="40"
                                  height="40"
                                  viewBox="0 0 40 40"
                                  fill="none"
                                  className="fill-white h-[20px] sm:h-[24px] md:h-[28px] lg:h-[32px] xl:h-[36px] 2xl:h-[40px]"
                                >
                                  <path
                                    d="M24.715 10.5037C23.485 10.4462 23.115 10.4362 20 10.4362C16.885 10.4362 16.5163 10.4487 15.2863 10.5037C12.1213 10.6488 10.6488 12.1462 10.5037 15.2863C10.4487 16.5163 10.435 16.885 10.435 20C10.435 23.115 10.4487 23.4837 10.5037 24.715C10.6488 27.8462 12.115 29.3538 15.2863 29.4988C16.515 29.5538 16.885 29.5662 20 29.5662C23.1162 29.5662 23.485 29.555 24.715 29.4988C27.88 29.355 29.3513 27.8512 29.4988 24.715C29.5538 23.485 29.565 23.115 29.565 20C29.565 16.885 29.5538 16.5163 29.4988 15.2863C29.3513 12.1488 27.8762 10.6488 24.715 10.5037ZM20 25.9912C19.2133 25.9913 18.4343 25.8365 17.7074 25.5355C16.9806 25.2345 16.3201 24.7933 15.7638 24.2371C15.2075 23.6809 14.7661 23.0205 14.465 22.2937C14.1639 21.5669 14.0088 20.7879 14.0087 20.0012C14.0087 19.2146 14.1635 18.4355 14.4645 17.7087C14.7655 16.9818 15.2067 16.3214 15.7629 15.7651C16.3191 15.2087 16.9795 14.7674 17.7063 14.4662C18.4331 14.1651 19.212 14.0101 19.9987 14.01C21.5876 14.0098 23.1114 14.6408 24.2349 15.7642C25.3585 16.8875 25.9898 18.4112 25.99 20C25.9902 21.5888 25.3592 23.1126 24.2358 24.2362C23.1125 25.3598 21.5888 25.9911 20 25.9912ZM26.2288 15.1737C25.8574 15.1737 25.5014 15.0263 25.2388 14.7637C24.9762 14.5011 24.8288 14.1451 24.8288 13.7738C24.8288 13.4024 24.9762 13.0464 25.2388 12.7838C25.5014 12.5212 25.8574 12.3738 26.2288 12.3738C26.6001 12.3738 26.9561 12.5212 27.2187 12.7838C27.4813 13.0464 27.6288 13.4024 27.6287 13.7738C27.6288 14.1451 27.4813 14.5011 27.2187 14.7637C26.9561 15.0263 26.6001 15.1737 26.2288 15.1737ZM23.8888 20C23.8888 21.0314 23.479 22.0205 22.7498 22.7498C22.0205 23.479 21.0314 23.8888 20 23.8888C18.9686 23.8888 17.9795 23.479 17.2502 22.7498C16.521 22.0205 16.1112 21.0314 16.1112 20C16.1112 18.9686 16.521 17.9795 17.2502 17.2502C17.9795 16.521 18.9686 16.1112 20 16.1112C21.0314 16.1112 22.0205 16.521 22.7498 17.2502C23.479 17.9795 23.8888 18.9686 23.8888 20ZM20 0C8.955 0 0 8.955 0 20C0 31.045 8.955 40 20 40C31.045 40 40 31.045 40 20C40 8.955 31.045 0 20 0ZM31.5963 24.81C31.405 29.0512 29.0438 31.4013 24.8113 31.5963C23.5663 31.6538 23.1688 31.6663 20 31.6663C16.8312 31.6663 16.435 31.6538 15.19 31.5963C10.95 31.4013 8.59875 29.0487 8.40375 24.81C8.34625 23.5662 8.33375 23.1688 8.33375 20C8.33375 16.8312 8.34625 16.435 8.40375 15.19C8.59875 10.95 10.9513 8.59875 15.19 8.405C16.435 8.34625 16.8312 8.33375 20 8.33375C23.1688 8.33375 23.5663 8.34625 24.8113 8.405C29.0538 8.6 31.4062 10.9588 31.5963 15.19C31.6538 16.435 31.6663 16.8312 31.6663 20C31.6663 23.1688 31.6538 23.5662 31.5963 24.81Z"
                                    fill="inherit"
                                  />
                                </svg>
                              )}
                              {link.icon === 'telegram' && (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="40"
                                  height="40"
                                  viewBox="0 0 40 40"
                                  fill="none"
                                  className="fill-white h-[20px] sm:h-[24px] md:h-[28px] lg:h-[32px] xl:h-[36px] 2xl:h-[40px]"
                                >
                                  <path
                                    d="M20 0C16.0444 0 12.1776 1.17298 8.8886 3.37061C5.59962 5.56823 3.03617 8.69181 1.52242 12.3463C0.00866562 16.0009 -0.387401 20.0222 0.384303 23.9018C1.15601 27.7814 3.06082 31.3451 5.85787 34.1421C8.65492 36.9392 12.2186 38.844 16.0982 39.6157C19.9778 40.3874 23.9992 39.9913 27.6537 38.4776C31.3082 36.9638 34.4318 34.4004 36.6294 31.1114C38.827 27.8224 40 23.9556 40 20C40 14.6957 37.8929 9.60859 34.1421 5.85786C30.3914 2.10714 25.3043 0 20 0ZM29.5375 13C29.475 13.8125 29.0125 16.65 28.55 19.7125L27.1125 28.75C27.1125 28.75 27 30.075 26.0125 30.3125C24.9626 30.291 23.9485 29.9266 23.125 29.275C22.8875 29.1 18.7875 26.5 17.2875 25.225C17.1299 25.1275 16.9997 24.9914 16.9095 24.8295C16.8192 24.6676 16.7719 24.4853 16.7719 24.3C16.7719 24.1147 16.8192 23.9324 16.9095 23.7705C16.9997 23.6086 17.1299 23.4725 17.2875 23.375C19.375 21.4625 21.8625 19.1 23.3625 17.5875C24.05 16.9 24.75 15.275 21.8625 17.25L13.75 22.775C13.3329 22.9627 12.8824 23.0649 12.4251 23.0756C11.9678 23.0864 11.513 23.0054 11.0875 22.8375C9.35001 22.3125 7.33751 21.5875 7.33751 21.5875C7.33751 21.5875 5.95001 20.725 8.32501 19.8L21.7875 14.25C23.125 13.75 27.625 11.85 27.625 11.85C27.625 11.85 29.7125 11.0375 29.5375 13Z"
                                    fill="inherit"
                                  />
                                </svg>
                              )}
                            </a>
                          ))}
                        </div>
                      </div>
                      <div className='col-span-9 grid grid-cols-2 gap-6 sm:gap-0 sm:flex justify-between items-start '>
                        <div className='flex items-start flex-col gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[30px] justify-start '>
                          <a className='privacypolicy text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] !text-[#FDFCFF]'>About</a>
                            <ul className='flex justify-start flex-col gap-[12px] sm:gap-[13px] md:gap-[14px] lg:gap-[15px] xl:gap-[16px] 2xl:gap-[20px] footeritesm figtree text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>
                              <a href='#' className='privacypolicy duration-300 text-[#9226E0] hover:text-[#03FC9E] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>Who We Are</a>
                              <a className='privacypolicy duration-300 text-[#9226E0] hover:text-[#03FC9E] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] cursor-pointer'>The Bitstamp Way</a>
                              <a className='privacypolicy duration-300 text-[#9226E0] hover:text-[#03FC9E] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] cursor-pointer'>Careers</a>
                              <a className='privacypolicy duration-300 text-[#9226E0] hover:text-[#03FC9E] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] cursor-pointer'>Legal & Privacy</a>
                            </ul>
                        </div>
                        <div className='flex items-start flex-col gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[30px] justify-start'>
                          <a className='privacypolicy text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] !text-[#FDFCFF] '>Products</a>
                            <ul className='flex justify-start flex-col gap-[12px] sm:gap-[13px] md:gap-[14px] lg:gap-[15px] xl:gap-[16px] 2xl:gap-[20px] footeritesm figtree text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>
                              <a className='privacypolicy duration-300 text-[#9226E0] hover:text-[#03FC9E] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] cursor-pointer'>Mobile Apps</a>
                              <a className='privacypolicy duration-300 text-[#9226E0] hover:text-[#03FC9E] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] cursor-pointer'>Tradeview</a>
                              <a className='privacypolicy duration-300 text-[#9226E0] hover:text-[#03FC9E] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] cursor-pointer'>Earn Stake</a>
                              <a className='privacypolicy duration-300 text-[#9226E0] hover:text-[#03FC9E] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] cursor-pointer'>Earn Lend</a>
                            </ul>
                        </div> 
                        <div className='flex items-start flex-col gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[30px] justify-start'>
                          <a className='privacypolicy text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] !text-[#FDFCFF] '>Services</a>
                            <ul className='flex justify-start flex-col gap-[12px] sm:gap-[13px] md:gap-[14px] lg:gap-[15px] xl:gap-[16px] 2xl:gap-[20px] footeritesm figtree text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>
                              <a className='privacypolicy duration-300 text-[#9226E0] hover:text-[#03FC9E] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] cursor-pointer'>Institutions & Partners</a>
                              <a className='privacypolicy duration-300 text-[#9226E0] hover:text-[#03FC9E] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] cursor-pointer'>Bitstamp as a Service</a>
                              <a className='privacypolicy duration-300 text-[#9226E0] hover:text-[#03FC9E] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] cursor-pointer'>The Bitstamp Ecosystem</a>
                              <a className='privacypolicy duration-300 text-[#9226E0] hover:text-[#03FC9E] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] cursor-pointer'>Pro</a>
                            </ul>
                        </div> 
                        <div className='flex items-start flex-col gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[30px] justify-start'>
                          <a className='privacypolicy text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] !text-[#FDFCFF] '>Resources</a>
                            <ul className='flex justify-start flex-col gap-[12px] sm:gap-[13px] md:gap-[14px] lg:gap-[15px] xl:gap-[16px] 2xl:gap-[20px] footeritesm figtree text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>
                              <a className='privacypolicy duration-300 text-[#9226E0] hover:text-[#03FC9E] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] cursor-pointer'>API Documentation</a>
                              <a className='privacypolicy duration-300 text-[#9226E0] hover:text-[#03FC9E] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] cursor-pointer'>PGP Key</a>
                              <a className='privacypolicy duration-300 text-[#9226E0] hover:text-[#03FC9E] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] cursor-pointer'>Lightning Network</a>
                              <a className='privacypolicy duration-300 text-[#9226E0] hover:text-[#03FC9E] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] cursor-pointer'>Crypto Pulse</a>
                            </ul>
                        </div> 
                        <div className='flex items-start flex-col gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[30px] justify-start'>
                          <a className='privacypolicy text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[20px] !text-[#FDFCFF] '>Address</a>
                            <ul className='flex justify-start flex-col gap-[12px] sm:gap-[13px] md:gap-[14px] lg:gap-[15px] xl:gap-[16px] 2xl:gap-[20px] footeritesm figtree text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>
                              <a className='privacypolicy duration-300 text-[#9226E0] hover:text-[#03FC9E] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] cursor-pointer'>Bitstamp Ltd</a>
                              <a className='privacypolicy duration-300 text-[#9226E0] hover:text-[#03FC9E] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] cursor-pointer'>5 New Street Square</a>
                              <a className='privacypolicy duration-300 text-[#9226E0] hover:text-[#03FC9E] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] cursor-pointer'>London, EC4A 3TW</a>
                              <a className='privacypolicy duration-300 text-[#9226E0] hover:text-[#03FC9E] text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] cursor-pointer'>United Kingdom</a>
                            </ul>
                        </div> 
                      </div>
                    </div>
                    
                </div>
                <div className='py-[24px] sm:py-[32px] md:py-[36px] lg:py-[40px] xl:py-[48px] 2xl:py-[52px] border-t border-[#fdfcff1a] flex justify-center items-center'>
                  <h2 className='privacypolicy duration-300 text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]'>© 2022 Divi Labs Holding. All rights reserved</h2>
                </div>
            </div>
        </div>
    );
};

export default Footer;