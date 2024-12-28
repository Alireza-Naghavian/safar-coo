import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import Nav_searchBox from "@/components/atoms/inputFields/Nav_searchBox";
import SearchBox from "@/components/atoms/inputFields/SearchBox";
import NavItem from "@/components/atoms/NavItem/NavItem";
import { Disclosure_T } from "@/hooks/useDisclosure";
import useUnderline from "@/hooks/useUnderline";
import { menuItems } from "@/utils/constants";
import { motionDisappear } from "@/utils/motionVairants";
import { AnimatePresence, motion } from "motion/react";
function NavBarItems({close,isOpen:isSearchOpen,open}:Disclosure_T) {
  const { itemsRef, markerRef, style } = useUnderline();
  return (
    <div className={`h-full  ${isSearchOpen ? "w-full" : "w-[80%]"}  flex items-center   relative`}>
      {isSearchOpen && (
        <motion.div key={"revertmenu"} className="left-0 absolute">
          <MainBtn
            onClick={close}
            state="normal"
            type="button"
            variant="noBorder"
            size="md"
          >
            بازگشت
          </MainBtn>
        </motion.div>
      )}
      <div className=" flex  h-[60%]  items-center gap-x-12 absolute tr-300">
        {menuItems.map((item) => {
          return (
            <AnimatePresence key={item._id} mode="wait" initial={false}>
              <motion.div
                variants={motionDisappear}
                initial={"initial"}
                animate={isSearchOpen ? "animate":"initial"}
                exit={"exit"}
              >
                <div
                  className=""
                  ref={(elem) => {
                    if (elem) {
                      itemsRef.current = itemsRef.current
                        ? [...itemsRef.current, elem]
                        : [elem];
                    }
                  }}
                >
                  <NavItem
                    size="desktop"
                    target={item.target}
                    title={item.title}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          );
        })}

        {/*is search box disactive ? */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            variants={motionDisappear}
            initial={"initial"}
            animate={isSearchOpen ? "animate":"initial"}
            exit={"exit"}
          >
            <Nav_searchBox open={open} />
          </motion.div>
        </AnimatePresence>

        {/*is search box active ? */}
        <AnimatePresence mode="wait" initial={false}>
          
            <motion.div
              key={"activeSearchBox"}
              className="  lg:w-[511px] w-[177px] right-0 absolute "
              variants={motionDisappear}
              initial={"animate"}
              animate={isSearchOpen ? "initial":"animate"}
              exit={isSearchOpen ? "initial":"animate"}
            >
              <SearchBox size="desktop" />
            </motion.div>
        
        </AnimatePresence>
        {/* underline effect */}
        <div
          ref={markerRef}
          id="underline"
          style={{
            left: style.left,
            width: style.width,
            opacity: style.opacity,
          }}
        ></div>
      </div>
    </div>
  );
}

export default NavBarItems;
