import { Badge_T } from "@/types/buttons.t";

function Badge({ className, title }: Badge_T) {
  return (
    <span
      className={` box-center text-center px-3 py-1.5
         text-natural-black text-xs font-YekanBold
          bg-secondary-300 rounded-4 ${className}`}
    >
      {title}
    </span>
  );
}

export default Badge;
