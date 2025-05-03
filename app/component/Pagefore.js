'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import image4 from './image/image4.png';
import image5 from './image/image5.png'; // Adjust path as needed
import image7 from './image/image7.png';

gsap.registerPlugin(ScrollTrigger);

// Sample card data (replace with actual data)
const cardData = [
  {
    id: 1,
    imageSrc: image4,
    title: 'Ease of Trading',
    listItems: ['Intuitive interface', 'Seamless navigation', 'Quick transactions'],
  },
  {
    id: 2,
    imageSrc: image5, // Replace with different image if needed
    title: 'Institutional-grade Security',
    listItems: ['95% of assets stored safely offline', 'Highly encrypted personal data', 'Whitelisting and transaction confirmations'],
  },
  {
    id: 3,
    imageSrc: image7, // Replace with different image if needed
    title: 'Proven Reliability',
    listItems: ['Serving customers since 2011', 'Live customer support', 'Industry-leading uptime'],
  },
];

const Pageone = () => {
  const wrapperRef = useRef(null); // Outer container
  const titleRef = useRef(null); // "Core Products" title (if needed)
  const acquireRef = useRef(null); // "Acquire CRX" section (if needed)
  const cardRefs = useRef([]); // Refs for mapped cards

  // Helper to assign refs to card elements
  const setCardRef = (el, index) => {
    cardRefs.current[index] = el;
  };

  useEffect(() => {
    // GSAP context for proper scoping and cleanup
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: '(min-width: 768px)',
        },
        (context) => {
          const { isDesktop } = context.conditions;

          if (isDesktop) {
            // Main wrapper animation
            gsap.fromTo(
              wrapperRef.current,
              { y: 100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: wrapperRef.current,
                  start: 'top 100%',
                  end: 'bottom 100%',
                  scrub: 0.8,
                },
              }
            );

            // Title animation (if used)
            if (titleRef.current) {
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
            }

            // Card animations with stagger
            cardRefs.current.forEach((card, index) => {
              if (!card) return;
              gsap.fromTo(
                card,
                { y: 50, opacity: 0, scale: 0.9 },
                {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  duration: 1,
                  delay: index * 0.25, // Stagger effect
                  ease: 'power3.out',
                  scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    end: 'top 30%',
                    scrub: 0.8,
                  },
                }
              );
            });

            // Acquire CRX section animation (if used)
            if (acquireRef.current) {
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
          }
        }
      );
    }, wrapperRef); // Scope to wrapperRef for React strict mode

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div
      id="Blog"
      ref={wrapperRef}
      className="relative overflow-hidden py-[80px] sm:py-[60px] md:py-[70px] lg:py-[90px] xl:py-[120px] 2xl:py-[150px]"
    >
      <div className="relative">
        <div className="container mx-auto px-6 sm:px-0">
          <div className="grid grid-cols-12 gap-[14px] sm:gap-[15px] md:gap-[16px] lg:gap-[20px] xl:gap-[24px] 2xl:gap-[31px]">
            {cardData.map((card, index) => (
              <div
                key={card.id}
                ref={(el) => setCardRef(el, index)}
                className="borindsas bg-transparent sm:hover:border-none sm:hover:bg-[#212227] duration-300 cursor-pointer p-[32px] sm:p-[36px] md:p-[40px] lg:p-[48px] xl:p-[64px] 2xl:p-[84px] col-span-12 sm:col-span-4 flex items-center justify-center flex-col"
              >
                <Image
                  src={card.imageSrc}
                  className="h-[32px] sm:h-[36px] md:h-[40px] lg:h-[48px] xl:h-[64px] 2xl:h-[100px] w-fit relative z-40"
                  alt={`${card.title} icon`}
                  width={128} // Max width for optimization
                  height={128} // Adjust based on image aspect ratio
                />
                <div className="eastrasin text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[20px] 2xl:text-[23px] pt-[16px] sm:pt-[20px] md:pt-[24px] lg:pt-[32px] xl:pt-[36px] 2xl:pt-[40px] text-center">
                  {card.title}
                </div>
                <ul className="flex flex-col items-center justify-center gap-[16px] sm:gap-[20px] md:gap-[24px] lg:gap-[32px] xl:gap-[36px] 2xl:gap-[40px] pt-[16px] sm:pt-[20px] md:pt-[24px] lg:pt-[32px] xl:pt-[36px] 2xl:pt-[40px]">
                  {card.listItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="inturiss text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] text-center"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pageone;