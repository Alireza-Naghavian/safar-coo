import { Badge_T } from "@/types/buttons.t";
import { cva } from "class-variance-authority";

const badgeStyles = cva(
  `box-center text-center px-3 py-1.5 text-natural-black font-YekanBold`,
  {
    variants: {
      variant: {
        fill: `text-xs  rounded-4 bg-secondary-300 `,
        outline: `rounded-8 bg-transparent text-sm  border border-secondary-300`,
      },
    },
    defaultVariants: {
      variant: "fill",
    },
  }
);
function Badge({ className, title, variant }: Badge_T) {
  return <span className={badgeStyles({ className, variant })}>{title}</span>;
}

export default Badge;
