"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { citiesInfoOptions } from "@/utils/constants";
import Image from "next/image";
import { LazyMotion, domAnimation } from "motion/react";
const textMotionVar = {
  hidden: { opacity: 0,  },
  visible: { opacity: 1},
};
function HeroCitiesHeader() {
  const [isAnimateLoad, setIsAnimateLoad] = useState(false);
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        className=" overflow-hidden relative w-full h-full max-h-[633px]   grid lg:grid-cols-4  grid-cols-2 lg:grid-rows-none grid-rows-2 "
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
              ease: "easeInOut",
              duration: 0.8,
            },
          },
        }}
        initial={"hidden"}
        animate={"visible"}
        onAnimationComplete={() => setIsAnimateLoad(true)}
      >
        {citiesInfoOptions.map((option, index) => {
          return (
            <motion.div
              className=" w-full gap-0 transform lg:translate-y-[--y] "
              variants={{
                hidden: { "--y": "-900px", opacity: 0 },
                visible: { "--y": "0px", opacity: 1 },
              }}
              transition={{
                type: "spring",
                stiffness: 50,
                damping: 15,
                delay: index * 0.4,
              }}
              key={option.alt}
            >
              <Image
                alt={option.alt}
                src={option.src}
                fill
                quality={100}
                priority
                className="!relative lg:!object-contain "
              />
            </motion.div>
          );
        })}

        {isAnimateLoad && (
          <div >
            <motion.p
              variants={textMotionVar}
              initial={"hidden"}
              animate={"visible"}
              transition={{
                duration:.7,
                ease:"easeInOut"
              }}
              className="text-white absolute md:top-[10%] top-[20%] right-[10%] md:right-[5%] 
              font-NotoSemi xl:text-[90px] lg:text-7xl md:text-5xl sm:text-4xl text-2xl"
            >
              ایران
            </motion.p>
            <motion.p
              variants={textMotionVar}
              initial={"hidden"}
              animate={"visible"}
              transition={{
                duration:.7,
                ease:"easeInOut",
                delay: 0.2,
              }}
              className="text-white absolute md:top-[40%] top-[35%] sm:right-[12%]  right-[8%]  
              md:right-[8%] font-NotoSemi xl:text-5xl lg:text-4xl sm:text-3xl text-2xl "
            >
              دریغ است ایران که ویران شود
            </motion.p>
            <motion.p
              variants={textMotionVar}
              initial={"hidden"}
              animate={"visible"}
              transition={{
                duration:.7,
                ease:"easeInOut",
                delay: .3,
              }}
              className="text-white absolute md:top-[60%] top-[50%] sm:right-[42%] right-[20%] 
              md:right-[30%] font-NotoSemi xl:text-5xl lg:text-4xl sm:text-3xl text-2xl"
            >
              کَُنام پلنگان و شیران شود
            </motion.p>
            <motion.p
              variants={textMotionVar}
              initial={"hidden"}
              animate={"visible"}
              transition={{
                duration:.7,
                ease:"easeInOut",
                delay: .4,
              }}
              className="text-white absolute md:bottom-[20%] bottom-[35%] left-[18%] 
              md:left-[28%] font-NotoSemi xl:text-2xl lg:text-xl sm:text-lg text-base"
            >
              فردوسی
            </motion.p>
          </div>
        )}
      </motion.div>
    </LazyMotion>
  );
}

export default HeroCitiesHeader;
