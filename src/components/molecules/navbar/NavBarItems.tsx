"use client";
import NavItem from "@/components/atoms/NavItem/NavItem";
import useUnderline from "@/hooks/useUnderline";
import { menuItems } from "@/utils/constants";
function NavBarItems() {
  const { itemsRef, markerRef, style } = useUnderline();
  return (
    <div className=" flex items-center gap-x-12 absolute tr-300">
      {menuItems.map((item) => {
        return (
          <div  key={item._id} className="navItems">
            <div
              ref={(elem)=>{
                if(elem){
                    itemsRef.current = itemsRef.current ? [...itemsRef.current,elem]:[elem]
                }
              }}>
              <NavItem size="desktop" target={item.target} title={item.title} />
            </div>
          </div>
        );
      })}
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
  );
}

export default NavBarItems;
