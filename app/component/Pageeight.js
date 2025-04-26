'use client';


import React, { useEffect, useRef, useState  } from 'react';
import Image from 'next/image';
import linetwo from './image/linertwo.svg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Pageeight = () => {
    const svgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      svgRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: svgRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);


  const [hasGradientBorder, setHasGradientBorder] = useState(false);
  const inputRef = useRef(null);

  const toggleGradientBorder = () => {
    setHasGradientBorder(!hasGradientBorder);
    inputRef.current.focus();
  };



  
    return (
        <></>
    );
};

export default Pageeight;