"use client"
import { ArrowForward } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
type GlobalError_T={
    error: Error & { digest?: string }
    reset: () => void
}
const utilLinks = [
     { href: "/", Icon: ArrowForward, title: "بازگشت به صفحه اصلی" }
]
function GlobalError({error}:GlobalError_T) {
  return (
    <section className="mx-auto child:text-center child:text-natural-black flex flex-col items-center  mt-12 md:mt-22">
    <h1 className=" lg:text-h1B sm:text-h2B text-h3Semi ">
      اوه مشکلی پیش اومد!
    </h1>
    <p
      className="sm:mt-12 lg:text-h4Semi sm:text-bodyB1semi text-bodyB3semi
        w-full sm:max-w-[464px] max-w-[261px] "
    >
    احتمالا مشکلی پیش اومده ادامه مسیر رو از لینک های زیر دنبال کن
    <span className="">{error.message}</span>
    </p>
    <div className={`md:w-[505px] sm:w-[410px] w-[226px] md:h-[385px] 
        sm:h-[285px] h-[189px] sm:mt-[72px] mt-10`}>
      <Image
        fill
        quality={100}
        priority
        alt={"not-found.png"}
        src={"/images/notFound.png"}
        className="!relative"
      />
    </div>
    <div
      className="gap-y-4 flex flex-col mt-8 child:flex child:items-center  child:gap-x-2 
child:pb-1 child:border-b child:border-natural-black"
    >
      {utilLinks.map((item, index) => {
        return (
          <Link key={index} href={item.href}>
            <item.Icon className=" stroke-natural-black sm:size-8 size-4" />
            <span className="text-natural-black sm:text-bodyB1semi text-bodyB4semi">
              {item.title}
            </span>
          </Link>
        );
      })}
    </div>
  </section>
  )
}

export default GlobalError
