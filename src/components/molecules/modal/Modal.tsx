"use client";
import Overlay from "@/components/atoms/Overlay/Overlay";
import useScrollLocker from "@/hooks/useScrollLocker";
import { ContentProps_T, HeaderProps_T, Modal_T } from "@/types/modal.t";
import { cva } from "class-variance-authority";
import React from "react";
import Close_square from "../../../../public/icons/svgs/Close_square";
import { ChildrenProps } from "@/types/global.t";
import ClientOnlyPortal from "@/utils/ClientOnlyPortal";
const Modal: React.FC<Modal_T> = (props) => {
  const { children, effect, isShow, onClose, className,isClickable } = props;
  // hidden scroll when modal is active
  useScrollLocker(isShow);

  // based effect styles
  const modalStyle = cva(
    `
    bg-white rounded-12 shadow-lg w-full 
    tr-500 z-[60] fixed left-0 right-0  flex flex-col  mx-auto 
    `,
    {
      variants: {
        effect: {
          bottom_to_top: `${
            isShow ? `bottom-0 lg:top-20` : `-bottom-full lg:top-60`
          }`,
          top_to_bottom:`${
                 isShow ? `top-10 lg:bottom-20` : `-top-full lg:bottom-60`
          }`,
          ease_out: `${
            isShow ? "top-16 transform scale-100" : `top-40 transform scale-50 `
          } `,
          buttom_to_fit: `${isShow ? "bottom-0" : "-bottom-full"} `,
        },
      },
      defaultVariants: {
        effect: "ease_out",
      },
    }
  );

  return (
 <ClientOnlyPortal>
      <div
      className={`${
        isShow ? "visible opacity-100" : "invisible opacity-0 "
      } z-[60] fixed inset-0 tr-500`}
    >
      <Overlay className="!tr-400" onClose={() => isClickable &&onClose && onClose()} openCondition={isShow} />
      <div className={modalStyle({ className, effect })}>
        {React.Children.map(children, (child) => {
          return React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<ContentProps_T>)
            : child;
        })}
      </div>
    </div>
 </ClientOnlyPortal>
  );
};
// Header Modal
const Header :React.FC<HeaderProps_T> = ({...rest})=>{
   
    return(
        <div className={`${rest.className} w-full flex items-center justify-start `}>
           <button onClick={rest.onClose}><Close_square/></button> 
        </div>
    )
}

// Body modal
const Body :React.FC<ChildrenProps> = ({children})=><>{children}</>
// Content Modal
const Content: React.FC<ContentProps_T> = ({ ...restProps }) => {
  return (
    <div {...restProps}>
      {React.Children.map(restProps.children, (child) => {
        return React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<ContentProps_T>)
          : child;
      })}
    </div>
  );
};


// compound All sections
const MainModal = Object.assign(Modal,{
    Modal,
    Content,
    Header,
    Body,
})

export default MainModal;
