export const motionHiddenVariants ={
    initial:{opacity:100,x:"0%"},
    animate:{opacity:0,x:"100%",display:"none"},
    exit:{opacity:100,x:"0%"}
  }
  export const motionDisappear ={
    initial:{opacity:100,display:"block"},
    animate:{opacity:0,display:"none"},
    exit:{opacity:100,display:"flex"}
  }