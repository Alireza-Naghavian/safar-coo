import Divider from "@/components/atoms/Divider/Divider";
import { HeaderContent_T } from "../user-panel.t";

function HeaderContentPanelLayout({ children, desc, title,className }: HeaderContent_T) {
  return (
    <>
      <div className={`sm:px-11 px-4   py-4 flex items-center justify-between
         xl:flex-nowrap flex-wrap xl:gap-y-0 gap-y-6 ${className}`}>
        {/* main title */}
        <div className="flex flex-col w-full items-start gap-y-2 child:text-right child:text-natural-black">
          <h1 className="lg:text-h1Semi md:text-h2Semi text-bodyB2semi  tracking-tighter">
            {title}
          </h1>
          <p className="max-w-[385px] md:text-btnTextXl  tracking-tighter text-bodyB3semi ">
            {desc}
          </p>
      
        </div>
        {/* switches box */}
        {children}
        
      </div>
      {/* seperator */}
      <Divider/>
      {/* seperator */}
    </>
  );
}

export default HeaderContentPanelLayout;
