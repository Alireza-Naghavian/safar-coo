import Logo from "@/components/atoms/Logo";
import { footerLinks, licenceLogos } from "@/utils/constants";
import Link from "next/link";
import Instagram from "../../../../public/icons/svgs/Instagram";
import LinkedIn from "../../../../public/icons/svgs/LinkedIn";
import Image from "next/image";
import { ClassName_T } from "@/types/global.t";

function Footer() {
  return (
    <footer className="w-full overflow-hidden ">
      <div
        className="w-full bg-[#0E453A] lg:px-[95px] px-2 pt-[56px] pb-[22px] relative  overflow-hidden
      mt-[115px] gap-2 child:bg-transparent"
      >
        <div
          className=" h-auto w-[90%] mx-auto relative 
                       box-center flex-col gap-y-10 mb-4"
        >
          {/* image box */}
          <div className="w-full rounded-4 max-h-[575px] relative">
            <Image
              src={"/images/bg-footer.png"}
              className="!relative  mx-auto"
              alt="footer-background.png"
              fill
              quality={100}
              priority
            />
          </div>
          {/* first row */}
          <div className="   relative  grid grid-cols-5 xl:gap-y-0 gap-y-10   w-full">
            <FooterDesc className="lg:col-span-2 col-span-5"/>
            <SocialMedias  className="xl:col-span-3 col-span-5 xl:mr-auto"/>
          </div>
          {/* second row */}
          <div className=" relative  grid grid-cols-5 xl:gap-y-0 gap-y-10   w-full">
            {/* license logos */}
            <LicenseLogos className=" lg:col-span-2 col-span-5"/>
            {/* links */}
            <ShortcutLinks className="xl:col-span-3 col-span-5 xl:mr-auto justify-center" />
          </div>
        </div>
      </div>
      {/* copywrite  */}
      <div
        className="w-full py-4 text-center bg-[#0E453A]  border-t
                    box-center flex-col gap-y-2 px-2 sm:px-0">
        <Link
          className="text-primary-500"
          target="_blank"
          href={"https://www.linkedin.com/in/alireza-naghavian"}
        >
          طراحی شده توسط Alireza-naghavian
        </Link>
        <p className="text-natural-gray3">
          تمامی حقوق این وبسایت متعلق به سفرکو است و هر گونه کپی برداری مطالب با
          ذکر منبع بلامانع است
        </p>
      </div>
    </footer>
  );
}

const FooterDesc = ({className}:ClassName_T) => {
  return (
    <div className={`flex flex-col items-start justify-between gap-y-6 ${className}`}>
      <Logo hasCaption={true} size="xl" />
      <p className="w-[480px] h-[86px] text-white hidden md:block">
        <span className="text-primary-500 ">(سفرکو)</span>
        یک پلفترم بزرگ شناخت جاذبه های گردشگری است.هدف ما از این کار شناخت تمامی
        نقاط گردشگری ایران و معرفی آن به تمام مردم ایران و حتی جهان است ، تا به
        صنعت گردشگری ایران کمک کنیم.
      </p>
    </div>
  );
};

const ShortcutLinks = ({className}:ClassName_T) => {
  return (
    <div className={`${className} w-full justify-end flex items-start text-center gap-x-[20px] sm:gap-x-[72px]`}>
      {footerLinks.map((link, index) => {
        return (
          <div key={Math.random() * 100 * index}>
            <span className=" md:text-h2Semi  sm:text-h3Semi  text-nowrap text-primary-400">
              {link.title}
            </span>
            <ul
              className="box-center flex-col space-y-6 my-4 
                   child:text-white child:text-center md:text-bodyB2Regular  sm:text-bodyB3Regular text-[14px]  ">
              {link.items.map((item, index) => {
                return (
                  <li key={Math.random() * 100 * index}>
                    <Link href={item.target}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

const SocialMedias = ({className}:ClassName_T) => {
  return (
    <div className={`flex flex-col gap-y-6 ${className}`}>
      <span className="text-primary-500 text-bodyB2semi">
        شبکه های اجتماعی ما:
      </span>
      <div className="flex items-center gap-x-6">
        <Link
          target="_blank"
          href={"https://www.linkedin.com/in/alireza-naghavian"}
        >
          <LinkedIn />
        </Link>
        <Link
          target="_blank"
          href={"https://www.instagram.com/alirezangh123123"}
        >
          <Instagram />
        </Link>
      </div>
    </div>
  );
};



const LicenseLogos = ({className}:ClassName_T)=>{
  return(
    <div className={` flex  justify-center items-center gap-x-4  rounded-full  sm:child:!w-[80px] child:!w-[50px]  sm:child:!h-[80px] child:!h-[50px] ${className}`}>
    {licenceLogos.map((logo) => {
      return (
        <Image
          key={logo._id}
          src={logo.src}
          alt={logo.alt}
          className="!relative !w-full !h-full !object-cover   mx-auto"
          fill
        />
      );
    })}
  </div>
  )
}
export default Footer;
