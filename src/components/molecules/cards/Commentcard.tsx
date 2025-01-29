"use client";
import Avatar from "@/components/atoms/Avatar/Avatar";
import { CommentCard_T } from "@/types/cards.t";
import { ClassName_T } from "@/types/global.t";
import { Dislike, Like1 } from "iconsax-react";

function Commentcard({
  body,
  setLike,
  setDisLike,
  provider,
  ...rest
}: CommentCard_T & ClassName_T) {
  return (
    <div className={`w-full relative flex flex-col gap-y-2 ${rest.className}`}>
      {/* header */}
      <div className="w-full justify-between items-center flex">
        <Avatar className="line-clamp-1 sm:!text-bodyB2Regular text-bodyB3Regular " avatarHeight={48} avatarWidth={48} provider={provider} />
        {/* like & dislike */}
        <div className="w-[180px] flex items-center ">
          <div className="flex items-center gap-x-2.5 border-l border-natural-gray1 pl-3">
            <Like1
              onClick={() => setLike((prev) => prev + 1)}
              variant="Bold"
              className="size-6 cursor-pointer fill-success-1"
            />
            <span className="text-natural-black text-bodyB2semi">
              {rest.like}
            </span>
          </div>
          <div className="flex items-center gap-x-2.5  pr-3">
            <Dislike
              onClick={() => setDisLike((prev) => prev + 1)}
              variant="Bold"
              className="size-6 cursor-pointer fill-secondary-500"
            />
            <span className="text-natural-black text-bodyB2semi">
              {rest.disLike}
            </span>
          </div>
        </div>
      </div>
        {/* comment body */}
        <p
          className="rounded-12 w-full py-6 px-4 relative
         text-white md:text-bodyB3Regular text-bodyB4Regular
          bg-primary-700"
        >
            {body}
        </p>
    </div>
  );
}

export default Commentcard;
