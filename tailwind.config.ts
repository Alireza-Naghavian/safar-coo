import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      xs: "320px",
      sm: `640px`,
      md: `768px`,
      lg: `1024px`,
      xl: `1280px`,
      "2xl": `1366px`,
      "3xl": "1440px",
    },
    extend: {
      backgroundImage:{
        'iranology-bg': "url('/images/iranologyBg.png')",
      },
      fontFamily: {
        Yekan: "Yekan",
        YekanSemi: "Yekan SemiBold",
        YekanBold: "Yekan Bold",
        NotoSemi:"Noto Semi"
      },
      colors: {
        primary: {
          200: "#8FFFF6",
          300: "#4FF9F2",
          400: "#1BE6E3",
          500: "#03C9C9 ",
          600: "#00A0A3",
          700: "#047C81",
        },
        secondary: {
          200: "#FFC478",
          300: "#FFC152",
          400: "#FFAB16",
          500: "#FF8F00 ",
          600: "#CC6902",
          700: "#A1510B",
        },
        accent: {
          200: "#9DDAF9",
          300: "#1EB5FF",
          400: "#0698FF",
          500: "#007DF0",
          600: "#0865C5",
          700: "#0D579B",
        },
        natural: {
          black: "#131313",
          gray1: "#3D3D3D",
          gray2: "#797979",
          gray3: "#B7B7B7",
          gray4: "#E6E6E6",
        },
        success: {
          1: "#00DD16",
          2: "#00FF1A",
          3: "#50FF61",
        },
        error: {
          1: "#DD0000",
          2: "#FF0000",
          3: "#FF5050",
        },
        danger: {
          1: "#F2DB06",
          2: "#FFF500",
        },
      },
      fontSize: {
        captionSm: ["12px", "150%"],
        captionMd: ["14px", "150%"],
        captionXs: ["10px", "150%"],
        captionXXs: ["8px", "150%"],
        btnText3xl: ["24px", "150%"],
        btnText2xl: ["18px", "150%"],
        btnTextXl: ["16px", "150%"],
        btnTextM: ["14px", "150%"],
        btnTextS: ["12px", "150%"],
        btnTextXs: ["10px", "150%"], 
        D1Heavy:["64px",{fontWeight:"600",lineHeight:"170%"}],
        D2Bold:["57px",{fontWeight:"600",lineHeight:"170%"}],
        D2Semi:["57px",{fontWeight:"450",lineHeight:"170%"}],
        D3Bold:["47px",{fontWeight:"600",lineHeight:"170%"}],
        D3Semi:["47px",{fontWeight:"450",lineHeight:"170%"}],
        D4Bold:["39px",{fontWeight:"600",lineHeight:"170%"}],
        D4Semi:["39px",{fontWeight:"450",lineHeight:"170%"}],
        h1B:["34px",{fontWeight:"600",lineHeight:"170%"}],
        h1Semi:["34px",{fontWeight:"450",lineHeight:"170%"}],
        h2B:["26px",{fontWeight:"600",lineHeight:"170%"}],
        h2Semi:["26px",{fontWeight:"450",lineHeight:"170%"}],
        h3B:["24px",{fontWeight:"600",lineHeight:"170%"}],
        h3Semi:["24px",{fontWeight:"450",lineHeight:"170%"}],
        h4B:["20px",{fontWeight:"600",lineHeight:"170%"}], 
        h4Semi:["20px",{fontWeight:"450",lineHeight:"170%"}],
        bodyB1semi :["24px",{fontWeight:"450",lineHeight:"170%"}],
        bodyB1Regular :["24px",{fontWeight:"325",lineHeight:"170%"}],
        bodyB2semi :["20px",{fontWeight:"450",lineHeight:"170%"}],
        bodyB2Regular :["20px",{fontWeight:"325",lineHeight:"170%"}],
        bodyB3semi:["16px",{fontWeight:"450",lineHeight:"170%"}],
        bodyB3Regular :["16px",{fontWeight:"325",lineHeight:"170%"}],
        bodyB4semi :["14px",{fontWeight:"450",lineHeight:"170%"}],
        bodyB4Regular :["14px",{fontWeight:"325",lineHeight:"170%"}],
        bodyB5semi :["12px",{fontWeight:"450",lineHeight:"170%"}],
        bodyB5Regular :["12px",{fontWeight:"325",lineHeight:"170%"}],
        bodyB6semi :["10px",{fontWeight:"450",lineHeight:"170%"}],
        bodyB6Regular :["10px",{fontWeight:"325",lineHeight:"170%"}],
      },
      dropShadow:{
        shadow1:" 0px 11px 24px 0px rgba(0, 0, 0, 0.2),0px 43px 43px 0px rgba(0, 0, 0, 0.17),0px 96px 58px 0px rgba(0, 0, 0, 0.1),0px 171px 69px 0px rgba(0, 0, 0, 0.03),0px 268px 75px 0px rgba(0, 0, 0, 0)",
        shadow2:"-1px 12px 27px 0px rgba(0, 0, 0, 0.15),-3px 48px 48px 0px rgba(0, 0, 0, 0.13),-7px 108px 65px 0px rgba(0, 0, 0, 0.08),-13px 193px 77px 0px rgba(0, 0, 0, 0.02),-20px 301px 85px 0px rgba(0, 0, 0, 0)",
        shadow3:"-1px 16px 35px 0px rgba(0, 0, 0, 0.14),-4px 64px 64px 0px rgba(0, 0, 0, 0.12),-10px 145px 87px 0px rgba(0, 0, 0, 0.07),-17px 257px 103px 0px rgba(0, 0, 0, 0.02),-27px 402px 113px 0px rgba(0, 0, 0, 0)",
        shadow4:"-1px 20px 44px 0px rgba(0, 0, 0, 0.1),-5px 80px 80px 0px rgba(0, 0, 0, 0.09),-12px 181px 109px 0px rgba(0, 0, 0, 0.05),-22px 321px 129px 0px rgba(0, 0, 0, 0.01),-34px 502px 141px 0px rgba(0, 0, 0, 0)",
        shadow5:"0px 1px 4px 0px rgb(6, 152, 255)", 
        shadow6:"0px 1px 4px 0px rgb(255, 0, 0)",
        shadow7:"0px 1px 4px 0px rgb(0, 0, 0)",
      
        },
        container:{
          center:true,
          padding:{
            DEFAULT:"1rem",
            xs:"12px"
          }
        },
      gap: {
        lgGap: "24px",
        smGap: "16px",
      },
      spacing: {
        smSize: "16px",
      },
      borderRadius:{
        2:"2px",
        4:"4px",
        8:"8px",
        12:"12px",
        16:"16px",
        20:"20px",
        41:"41px",
        56:"56px",
      }
    },
  },
  plugins: [
    nextui({}),
    function({addVariant}:{addVariant:(target:string,state:string)=>void}){
      addVariant("child","&>*")
      addVariant("child-hover","&>*:hover")
    }

  ],
} satisfies Config;
