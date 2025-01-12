import Link from 'next/link';
import React from 'react'
type BreadcrumbProps = {
    firstTarget: string;
    firstTitle: React.ReactNode;
    seperator?: React.ReactNode;
    nestedStep: number;
    nestedLinks: { target: string; title: React.ReactNode }[];
  };
function BreadCrumb({firstTarget,firstTitle,nestedStep,...rest}:BreadcrumbProps) {
  return (
    <div
    className="flex justify-start items-center  gap-x-1 gap-y-2 max-w-[640px]
                max-h-6  ml-auto flex-wrap  child:text-natural-black bg-transparent
                 child:text-bodyB4Regular">
    <Link href={firstTarget}>
      <span>{firstTitle}</span>
    </Link>

    {Array.from({ length: nestedStep }).map((_, index) => (
      <React.Fragment key={index}>
        {rest.nestedLinks[index] && (
          <>
            <span>{rest.seperator}</span>
            <Link href={rest.nestedLinks[index].target}>
              <span>{rest.nestedLinks[index].title}</span>
            </Link>
          </>
        )}
      </React.Fragment>
    ))}
  </div>
  )
}

export default BreadCrumb