import MainModal from "@/components/molecules/modal/Modal";
import { ClassName_T } from "@/types/global.t";
import React from "react";
type Loader_T = ClassName_T & {
  title?: string;
  isShow: boolean;
  spinner: React.ReactNode;
};
function Loader({ isShow, spinner, className, title }: Loader_T) {
  return (
    <MainModal
    isClickable={false}
      effect="top_to_bottom"
      isShow={isShow}
      className={`  w-full
            rounded-12 bg-white  relative
            md:max-w-[851px] max-w-[400px] md:py-[88px] md:px-[160px] p-7
            overflow-y-auto ${className}`} 
    >

        <MainModal.Body>
            <div className="box-center flex-col gap-y-[72px]">
                <p className="md:text-h2Semi sm:text-h4Semi text-center
                 text-bodyB3semi text-natural-black">
                    {title}
                </p>
                {spinner}
            </div>
        </MainModal.Body>
        
    </MainModal>
  );
}

export default Loader;
