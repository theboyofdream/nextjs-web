"use client";
// React Server Components
// import * as motion from "framer-motion/client"
import { AnimateCharByChar } from "@/components/animated/AnimateCharByChar"
import { Button } from "@/components/ui/button";
import { WobbleCard } from "@/components/ui/wobble-card";
import { AnimatePresence, delay, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {

  const container = useRef(null);

  return (
    <AnimatePresence>
      <div className="dark min-h-screen min-w-full">
        <div className="flex justify-center items-center min-h-screen">
          <div className="flex justify-center items-center min-h-full m-10 max-w-4xl">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
              <WobbleCard
                containerClassName={`col-span-1 lg:col-span-2 flex h-full bg-pink-800 min-h-[500px] lg:min-h-[300px] 
                  `}
                // bg-cover bg-[url('https://picsum.photos/1000/1000')]
                className=""
              >

                <div className="flex flex-1"></div>
                <div className="inline-block">
                  <Button
                    className=" bg-black/15"
                  // title="Desktop"
                  >
                    Desktop
                  </Button>
                  <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Gippity AI powers the entire universe
                  </h2>
                  <p className="mt-4 text-left  text-base/6 text-neutral-200 cursor-pointer">
                    Live Demo -
                  </p>
                </div>

              </WobbleCard>
              <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                className=""
              >
                <div className="max-w-xs">
                  <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Gippity AI powers the entire universe
                  </h2>
                  <p className="mt-4 text-left  text-base/6 text-neutral-200">
                    With over 100,000 mothly active bot users, Gippity AI is the most
                    popular AI platform for developers.
                  </p>
                </div>
                <Image
                  src="/linear.webp"
                  width={500}
                  height={500}
                  alt="linear demo image"
                  className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
                />
              </WobbleCard>
              <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  No shirt, no shoes, no weapons.
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                  If someone yells “stop!”, goes limp, or taps out, the fight is over.
                </p>
              </WobbleCard>
              <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                <div className="max-w-sm">
                  <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Signup for blazing-fast cutting-edge state of the art Gippity AI
                    wrapper today!
                  </h2>
                  <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    With over 100,000 mothly active bot users, Gippity AI is the most
                    popular AI platform for developers.
                  </p>
                </div>
                <Image
                  src="/linear.webp"
                  width={500}
                  height={500}
                  alt="linear demo image"
                  className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
                />
              </WobbleCard>
            </div>

          </div>
        </div>
        <div className="flex justify-center items-center min-h-screen max-w-4xl">
          <h1
            className="flex flex-wrap text-4xl"
          >
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: [-15, 15, -15, 0] }}
              style={{
                originY: 0.5,
                // originX: 0,
                // originZ: 1,
              }}
              whileTap={{ rotate: [-15, 15, -15, 0] }}
              transition={{
                duration: 0.6,
                // repeat: 1,
                // repeat: Infinity,
                // repeatDelay: 5,
                // transformOrigin: "bottom",
              }}
            // origin="bottom-center"
            >👋</motion.span>
            <AnimateCharByChar paragraph={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto aspernatur ab mollitia minus debitis quae quibusdam odit vel veniam. Ullam quae harum molestiae voluptates at omnis qui minima eligendi! Deserunt."} />
          </h1>
        </div>
        {/* <div className="flex justify-center items-center min-h-screen">
        </div>
        <TextFillOnScroll
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto aspernatur ab mollitia minus debitis quae quibusdam odit vel veniam. Ullam quae harum molestiae voluptates at omnis qui minima eligendi! Deserunt."
        /> */}
        <div className="flex justify-center items-center min-h-screen">
        </div>
        <div className="flex justify-center items-center min-h-screen">
        </div>
        <motion.h1
          className="flex flex-col items-center justify-center h-screen text-5xl max-w-4xl my-1"
          initial={{ y: 25, opacity: 0 }}
          whileInView={{ y: [25, -5, 0], opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.75,
            // delay: 0.5,
          }}
        >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto aspernatur ab mollitia minus debitis quae quibusdam odit vel veniam. Ullam quae harum molestiae voluptates at omnis qui minima eligendi! Deserunt.
        </motion.h1>
        <div className="flex justify-center items-center min-h-screen">
        </div>
        <div
          ref={container}
          className="flex items-center h-screen mx-4"
        >

          <motion.div
            className="flex flex-wrap max-w-4xl"
          >
            {
              "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto aspernatur ab mollitia minus debitis quae quibusdam odit vel veniam. Ullam quae harum molestiae voluptates at omnis qui minima eligendi! Deserunt."
                .split(" ")
                .map((word, i, words) => {
                  const start = i / words.length
                  const end = start + (1 / words.length)

                  return (
                    <motion.span
                      key={`w_${i}`}
                      className="text-5xl"
                    >
                      {
                        word.split("").map((char, i, chars) => {
                          // const start = start + (i * step);
                          // const end = start + ((i + 1) * step)
                          return (
                            <motion.span key={`c_${i}`}>
                              {char}
                            </motion.span>
                          )
                        })
                      }&nbsp;
                      {/* {word}&nbsp; */}
                    </motion.span>
                  )
                })
            }
          </motion.div>
        </div>
        <div className="flex justify-center items-center min-h-screen">
        </div>
        <div className="flex justify-center items-center min-h-screen">
        </div>
      </div >
    </AnimatePresence >
  );
}

// function Char({ children, progress, range }) {
//   const opacity = useTransform(progress, range, [0, 1]);
//   return (
//     <span>
//       {/* <span className="shadow">{children}</span> */}
//       <motion.span style={{ opacity: opacity }}>{children}</motion.span>
//     </span>
//   );
// }

// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// const ScrollFillText: React.FC<{ text: string }> = ({ text }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 0.1", "end 0.9"]
//   });

//   const fill = useTransform(scrollYProgress, [0, 1], [0, 100]);

//   return (
//     <div ref={containerRef} className="h-screen overflow-y-scroll">
//       <motion.div className="absolute top-0 left-0 h-full bg-blue-500" style={{ width: `${fill}%` }}>
//         {text}
//       </motion.div>
//       <div className="relative text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-500">
//         {text}
//       </div>
//     </div>
//   );
// };


const TextFillOnScroll: React.FC<{ text: string }> = ({ text }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.1", "end 0.9"]
  });

  const fill = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div ref={containerRef} className="min-h-screen overflow-y-scroll">
      <motion.div
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-500"
        style={{ width: `${fill}%` }}
      >
        <span className="text-transparent">{text}</span>
      </motion.div>
      <div className="relative text-3xl font-bold">{text}</div>
    </div>
  );
};
