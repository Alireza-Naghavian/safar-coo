import Skeleton_sample from "@/components/atoms/skeltons/SkeltonSample";
import React from "react";

function NotifSkeltons() {
  return (
    <Skeleton_sample count={4}>
      <Skeleton_sample.Items className="   py-6 px-3 text-sm flex flex-col gap-y-5 items-center w-full h-full justify-center">
        <Skeleton_sample.Item
          backgroundColor="bg-accent-400"
          height="h-[100px]"
          className=" gap-2 py-2 px-3 text-sm  block child:mt-2  items-center font-YekanSemi justify-center"
          animated="background"
          width="w-[80%]"
        >
          <SkeltonItem />
          <SkeltonItem />
          <SkeltonItem />
        </Skeleton_sample.Item>
      </Skeleton_sample.Items>
    </Skeleton_sample>
  );
}

const SkeltonItem = () => {
  return (
    <Skeleton_sample.Item
      backgroundColor="bg-natural-gray3"
      height="h-[10px]"
      className=" gap-2 py-2 px-3 text-sm !block   items-center font-YekanSemi justify-center"
      animated="background"
      width="w-full"
    ></Skeleton_sample.Item>
  );
};

export default NotifSkeltons;
