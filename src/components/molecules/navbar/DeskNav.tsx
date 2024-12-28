"use client";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import NavBarItems from "./NavBarItems";
import useDisclosure from "@/hooks/useDisclosure";
function DeskNav() {
  const { isOpen: isSearchOpen, close, open } = useDisclosure();
  return (
    <div
      className="  flex items-center justify-between  px-8  
     py-[31px] h-full w-full  rounded-12 bg-accent-300 relative"
    >
      {/* right side */}
     <NavBarItems isOpen={isSearchOpen}  close={close}  open={open}/>
      {/* left side */}
      <div className={`  gap-x-4  ${isSearchOpen ? "hidden":"box-center "}`} >
        <MainBtn size="lg" state="hover" className="bg-secondary-300 rounded-4" variant="fill" >ثبت نام</MainBtn>
        <MainBtn size="lg" state="hover" className=" bg-secondary-400 hover:bg-secondary-500 rounded-4" variant="fill" >
          دانلود اپلیکیشن
        </MainBtn>
      </div>
    </div>
  );
}

export default DeskNav;
