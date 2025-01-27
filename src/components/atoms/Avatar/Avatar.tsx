import { ClassName_T } from "@/types/global.t";
import Image from "next/image";
import React from "react";
type Avatar_T =ClassName_T& {
    avatarHeight?:number;
    avatarWidth?:number
  provider?: string|null|undefined;
  src?: string;
  wrapperStyles?:string
};
function Avatar({
  src = "/images/user_sample.png",
  provider,
  avatarHeight=45,avatarWidth=45,
...rest
}: Avatar_T) {
  return (
    <div className={`w-fit relative flex  items-center gap-x-2 ${rest.wrapperStyles}`}>
      <Image
        alt="blog-provider-image"
        src={src}
        width={avatarWidth}
        height={avatarHeight}
        sizes="45px"
        className="rounded-full border border-primary-400"
      />
      {provider && (
        <span className={`text-natural-black text-bodyB2Regular tracking-tighter ${rest.className}`}>
          {provider}
        </span>
      )}
    </div>
  );
}

export default Avatar;
