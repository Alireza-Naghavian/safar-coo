import { ClassName_T } from "@/types/global.t";
import Link from "next/link";
import React from "react";
import ArrowIcon from "../../../../public/icons/svgs/ArrowIcon";
type SectionTitle_T = ClassName_T & {
  hasLink?: boolean;
  href?: string;
  title: string;
  linkTitle?: string;
};
function SectionTitle({
  hasLink = false,
  className,
  href,
  title,
  linkTitle,
}: SectionTitle_T) {
  return (
    <div className="w-full flex items-center justify-between">
      <h2 className={`${className} text-h1Semi text-natural-black text-right`}>
        {title}
      </h2>
      {hasLink && (
        <Link
          className="text-h4Semi text-secondary-400 text-left mr-auto flex items-center gap-x-2"
          href={href as string}
        >
          <span>{linkTitle as string}</span>
          <ArrowIcon/>
        </Link>
      )}
    </div>
  );
}

export default SectionTitle;
