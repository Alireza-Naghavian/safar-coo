import { ClassName_T } from "@/types/global.t";
import React from "react";
import Spinner from "./Spinner";
import {motion} from "motion/react"
import { FadeInOutVar } from "@/utils/motionVairants";
type PreLoader_T=ClassName_T&{
    title?:string,
    isShow:boolean
}
function PreLoader({ title="درحال بارگزاری...", className ,isShow}: PreLoader_T) {
  return (
        <motion.div
        transition={{duration:.3}}
        variants={FadeInOutVar}
        initial={"initial"}
        animate={isShow ? "initial":"animate"}

        className={`w-full relative flex !h-12
          items-center gap-x-2 ${className} `}>
        <Spinner  width="w-7" height="h-7" color={"stroke-natural-black"} />
        <p className="text-bodyB3semi  text-natural-black text-right">{title}</p>
      </motion.div>
  );
}

export default PreLoader;
