'use client';

import React, { useEffect, useRef,useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logoone from './image/logoone.svg';
import logotwo from './image/logotwo.png';
import logothree from './image/logothree.svg';
import logofore from './image/logofore.png';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);


const Pageone = () => {

  const items = [
    { id: 1, image: logoone, alt: 'Logo One' },
    { id: 2, image: logotwo, alt: 'Logo One' },
    { id: 3, image: logothree, alt: 'Logo One' },
    { id: 4, image: logofore, alt: 'Logo One' },
  ];
    
    // Default to "/buy"

    const handleLinkClick = (href) => {
        setActiveLink(href); 
    };


    const wrapperRef = useRef(null); // Outer container
  const gridItem1Ref = useRef(null); // First grid item
  const gridItem2Ref = useRef(null); // Second grid item
  const gridItem3Ref = useRef(null); // Third grid item
  const titleRef = useRef(null); // "Core Products" title
  const acquireRef = useRef(null); // "Acquire CRX" section

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



  // aegerv

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
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 100%',
              toggleActions: 'play none none none',
            },
            delay: index * 0.1,
          }
        );
      });
    }, []);

    
    return (
        <div id='Roadmap' ref={wrapperRef} className='relative overflow-hidden py-[50px] sm:py-[60px] md:py-[70px] lg:py-[90px] xl:py-[120px] 2xl:py-[150px]'>
            <div className='relative bg-[#FBC4C5]'>
              <div className="container mx-auto px-6 sm:px-0">
                <div className="grid grid-cols-12 gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[31px]">
                  {items.map((item, index) => (
                    <div
                      key={item.id}
                      ref={(el) => (itemRefs.current[index] = el)}
                      className="col-span-12 md:col-span-6 lg:col-span-3"
                    >
                      <div className="flex justify-center items-center">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          className='w-full'
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>
    );
};

export default Pageone;