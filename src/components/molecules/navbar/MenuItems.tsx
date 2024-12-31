"use client";
import useDisclosure from "@/hooks/useDisclosure";
import NavBarItems from "./NavBarItems";
import NavBtnGroup from "./NavBtnGroup";
import MenuBarIcon from "../../../../public/icons/svgs/MenuBarIcon";
import MobileMenu from "./MobileMenu";
import Overlay from "@/components/atoms/Overlay/Overlay";
function MenuItems() {
  const { isOpen: isSearchOpen, close, open } = useDisclosure();
  const { isOpen: isMenuOpen, close: closeMenu, open: openMenu } = useDisclosure();
  return (
    <section
      className="  flex items-center lg:justify-normal justify-between  gap-x-2   xl:px-8 px-6   
     py-[31px] h-full w-full  rounded-12 bg-accent-300 "
    >
      {/* right side */}
     <NavBarItems isOpen={isSearchOpen}  close={close}  open={open}/>
     <button className="lg:hidden" onClick={openMenu}>
      <MenuBarIcon/>
     </button>
      <MobileMenu isOpen={isMenuOpen}  close={closeMenu}/>
      <Overlay onClose={closeMenu} openCondition={isMenuOpen}/>
      {/* left side */}
      <div className={`  gap-x-4  mr-auto ${isSearchOpen ? "hidden":"box-center "}`} >
       <NavBtnGroup/>
      </div>
    </section>
  );
}

export default MenuItems;
