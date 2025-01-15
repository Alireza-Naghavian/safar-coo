import { ChildrenProps, ClassName_T } from "@/types/global.t";
import { ArrowLeft } from "iconsax-react";
import Link from "next/link";
type BackLink_T = Partial<ChildrenProps>&ClassName_T & {
    target: string;
  };
function BackLink({ target, children, className }: BackLink_T) {
  return (
    <Link className="relative flex items-center " href={target}>
      <span className="bg-accent-400 size-8 p-1 rounded-full">
        <ArrowLeft className={`${className} stroke-white`} />
      </span>
      {children}
    </Link>
  );
}

export default BackLink;
