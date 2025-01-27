import Avatar from "@/components/atoms/Avatar/Avatar";
import Badge from "@/components/atoms/Badge/Badge";
import NavLink from "@/components/atoms/buttons&links/NavLink";
import { TrExp_T } from "@/types/cards.t";
import { ClassName_T } from "@/types/global.t";
import Image from "next/image";
import Link from "next/link";
function TrExprienceCard({
  title,
  href,
  cover,
  ...rest
}: TrExp_T & ClassName_T) {
  return (
    <div
      className={`w-full sm:max-w-[386px] sm:h-[368px] h-[390px] border border-secondary-200 rounded-12  shadow-xl flex  flex-col justify-between px-3 py-4 relative gap-y-4 ${rest.className}`}
    >
      <div className="w-full  flex items-center justify-between">
        <Avatar  className="!text-bodyB4Regular" avatarHeight={30} avatarWidth={30} provider={rest.provider} />
        <Badge variant="outline" title={rest.badgeContent as string} />
      </div>
      <div className="w-full relative sm:max-w-[362px] rounded-8">
        <Image
          alt={title}
          src={cover}
          fill
          quality={100}
          priority
          className="!relative rounded-8"
        />
      </div>
      <Link href={href} className="text-right line-clamp-2 text-natural-black text-btnText2xl w-full max-w-[339px]">{title}</Link>
      <NavLink size="lg" state="hover" 
      variant="fill" 
      target={href}
      className="mt-[7px] text-btnTextM !bg-accent-300 hover:!bg-accent-500 text-white w-fit rounded-8 mr-auto "
      >
        ادامه مطلب
      </NavLink>
    </div>
  );
}

export default TrExprienceCard;
