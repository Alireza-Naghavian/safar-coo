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
    <div className="w-full flex sm:flex-row flex-col sm:items-center sm:justify-between">
      <h2 className={`${className} lg:text-h1Semi md:text-h2Semi text-h3Semi  text-natural-black text-right`}>
        {title}
      </h2>
      {hasLink && (
        <Link
          className="sm:text-h4Semi text-bodyB4semi text-secondary-400 text-left mr-auto flex items-center gap-x-2"
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
