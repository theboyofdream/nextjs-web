"use client";

import { useScroll, useTransform, motion, useMotionValue, useMotionTemplate, color } from 'framer-motion';
import React, { useRef } from 'react';
import styles from "./animateCharByChar.css"

export function AnimateCharByChar({ paragraph }) {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"]
  })

  const words = paragraph.split(" ")
  return (
    <p
      ref={container}
      className={"flex flex-wrap"}
    >
      {
        words.map((word, i) => {
          const start = i / words.length
          const end = start + (1 / words.length)
          return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
        })
      }
    </p>
  )
}

const Word = ({ children, progress, range }) => {
  const amount = range[1] - range[0]
  const step = amount / children.length
  return (
    <>
      {
        children.split("").map((char, i) => {
          const start = range[0] + (i * step);
          const end = range[0] + ((i + 1) * step)
          return <Char key={`c_${i}`} progress={progress} range={[start, end]}>{char}</Char>
        })
      }&nbsp;
    </>
  )
}

const Char = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.3, 1])
  // const linearOpacityFrom = useTransform(progress, range, [-100, 100])
  // const linearOpacityTo = useTransform(progress, range, [1, 0])
  // const background = useMotionTemplate`linear-gradient(to right, #fff ${linearOpacityFrom}%, #ffffff10, #ffffff10)`

  return (
    // <motion.span
    //   // className="bg-clip-text"
    //   style={{
    //     // opacity: 0.3,
    //     // backgroundColor: 'red',
    //     // opacity: opacity
    //     background
    //   }}
    // >
    //   <span
    //     style={
    //       [
    //         // styles.char,
    //         {
    //           // background,
    //         }]
    //     }
    //     // className="bg-clip-text text-transparent"
    //     className="char"
    //   >
    //     {children}
    //   </span>
    // </motion.span>
    <motion.span
      style={{
        opacity: opacity
      }}>
      {children}
    </motion.span>
  )
}