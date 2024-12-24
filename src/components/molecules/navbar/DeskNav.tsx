import NavItem from "@/components/atoms/NavItem/NavItem";
import { menuItems } from "@/utils/constants";
import NavBarItems from "./NavBarItems";
function DeskNav() {
  return (
    <div
      className="flex items-center  px-8  
     py-[31px] h-full w-full rounded-12 bg-accent-300 relative"
    >
      {/* right side */}
     <NavBarItems/>
      {/* left side */}
      <div className=""></div>
    </div>
  );
}

export default DeskNav;
