import Skeleton_sample from "@/components/atoms/skeltons/SkeltonSample";
import React from "react";

function InfoCardSkelton({ count = 1 }: { count?: number }) {
  return (
    <Skeleton_sample count={count}>
      <Skeleton_sample.Item
        backgroundColor="bg-primary-700"
        height="h-[241px]"
        className=" gap-1 py-2 px-3 text-sm flex items-center font-YekanSemi justify-center"
        animated="background"
        width="w-full"
      ></Skeleton_sample.Item>
    </Skeleton_sample>
  );
}

export default InfoCardSkelton;
