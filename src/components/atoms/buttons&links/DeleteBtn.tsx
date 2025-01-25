import { ClassName_T } from "@/types/global.t";
import { Trash } from "iconsax-react";
import React from "react";
type DeleteBtn_T = ClassName_T&{
}
function DeleteBtn({className}:DeleteBtn_T) {
  return (
    <button
      className={`size-[40px] sm:size-[55px] rounded-full bg-error-3 box-center
                absolute sm:-left-4 -top-4 -left-4 sm:-top-8  ${className}`}>
      <Trash className="stroke-white size-5" variant="Bold" />
    </button>
  );
}

export default DeleteBtn;
