import Badge from "@/components/atoms/Badge/Badge";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import { ButtonState_T } from "@/types/buttons.t";
import { ChildrenProps, Icon_T } from "@/types/global.t";
import {
  Clock,
  DollarCircle,
  Location,
  Map,
  Routing,
  Star1,
} from "iconsax-react";
import Image from "next/image";
import { PlaceIntro_T, UtilBtn_T } from "../../experiences.t";

function ShortIntro({ cover, title, visitCost, ...rest }: PlaceIntro_T) {
  return (
    <section
      className={`flex items-center gap-x-14 md:mt-[120px]  ${rest.className}`}
    >
      <div className="relative  rounded-12   md:w-[60%] h-full">
        <Image
          fill
          quality={100}
          priority
          src={cover}
          alt={title as string}
          className="rounded-12 !relative !max-h-[455px]  !w-full !h-full  "
        />
        <Badge
          title={<BadgeContent score={rest.score as number} />}
          variant="fill"
          className="absolute top-4 right-4 py-1   px-4 !bg-white"
        />
      </div>
      {/* short desc */}
      <div className="md:w-[40%]">
        <div
          className="flex flex-col items-start w-full gap-y-6 first:pb-0 child:pb-4 
                    child:border-b child:border-natural-gray2 child:w-full"
        >
          <h3 className="text-h3Semi !border-none text-natural-black text-right">
            اطلاعات مکان گردشگری
          </h3>
          <DescItem Icon={Location}>
            <p className="w-full text-bodyB2Regular">{rest.address}</p>
          </DescItem>
          <DescItem Icon={DollarCircle}>
            <p className="w-full text-bodyB2Regular">
              بازدید از این جاذبه گردشگری &nbsp;
              <span className="text-accent-400">
                {visitCost === "FREE" ? "رایگان" : "غیر رایگان"}
              </span>
              &nbsp; است
            </p>
          </DescItem>
          <DescItem Icon={Clock}>
            <p className="w-full text-bodyB2Regular">
              ساعت فعالیت:
              <span className="text-accent-400">
                از &nbsp;
                {
                  new Date(rest.activeTime).toLocaleString("fa-IR", {
                    timeStyle: "short",
                    hour12: true,
                  }) as string
                }
                &nbsp; تا &nbsp;
                {
                  new Date(rest.activeTime).toLocaleString("fa-IR", {
                    timeStyle: "short",
                    hour12: true,
                  }) as string
                }
              </span>
            </p>
          </DescItem>
        </div>
        <div className="mt-6 flex items-center gap-x-6">
          <UtilBtn
            className="px-3 py-2 bg-secondary-300 "
            title=" نمایش آدرس روی نقشه "
            Icon={Map}
            state="hover"
          />
          <UtilBtn
            className="!px-3 !py-2 bg-natural-gray3 w-[203px]"
            title="مسیریابی"
            Icon={Routing}
            state="disable"
          />
        </div>
      </div>
    </section>
  );
}

const UtilBtn = ({ title, Icon, className, state }: UtilBtn_T) => {
  return (
    <MainBtn
      variant="fill"
      size="xl"
      state={state as ButtonState_T}
      className={`flex items-center rounded-8 gap-x-1 ${className}`}
    >
      <Icon className="size-4 fill-natural-black" variant="Bold" />
      <span className="text-natural-black  text-btnTextXl">{title}</span>
    </MainBtn>
  );
};

const DescItem = ({ Icon, children }: ChildrenProps & { Icon: Icon_T }) => {
  return (
    <div className="flex items-start gap-x-1">
      <Icon variant="Bold" className="fill-accent-400 size-6" />
      {children}
    </div>
  );
};

const BadgeContent = ({ score }: { score: number }) => {
  return (
    <div className="flex gap-x-1 bg-white rounded-4 ">
      <span className="text-natural-black text-btnTextXl">{score}</span>
      <Star1 className="size-[20px] fill-danger-1" />
    </div>
  );
};
export default ShortIntro;
