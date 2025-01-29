"use client"
import useDisclosure from "@/hooks/useDisclosure";
import { motionDisappear } from "@/utils/motionVairants";
import { Star1 } from "iconsax-react";
import { motion } from "motion/react";
import { useState } from "react";
// type RateStar_T =ClassName_T& {
//   subject: string;
//   score: number;
//   setScore: SetState<number>;
//   isShow:boolean;
//   setShow:SetState<boolean>
// };
function RateStar() {
    const [score,setScore]=useState(0)
    const {isOpen:isShow,open:HideRate} = useDisclosure(false)
  return (
    <motion.div 
    variants={motionDisappear}
    initial={"initial"}
    transition={{
        delay:2
    }}
    animate={isShow ? "animate":"initial"}
    className={` w-full mx-auto max-w-[402px] flex 
        flex-col gap-y-10 mt-[88px] `}>
          <p className="text-center md:text-h3Semi text-bodyB3semi
           text-natural-black">به این مقاله چند امتیاز میدی؟ </p>
              <div className="box-center">
                  {[... Array(5)].map((_,index)=>{
                      index +=1;
                      return(
                        <Star1
                          key={index}
                          className={`size-[45px] md:size-[66px] cursor-pointer tr-300 ${index <= score ?
                               "fill-secondary-500":
                               " fill-natural-gray2"}`}
                          onClick={()=>{
                            setScore(index)
                            HideRate()
                          }}
                        />  
                      )
                  })}
              </div>
        </motion.div>
  )
}

export default RateStar;
