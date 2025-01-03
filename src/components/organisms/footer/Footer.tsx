import Logo from "@/components/atoms/Logo";
import { footerLinks, licenceLogos } from "@/utils/constants";
import Link from "next/link";
import Instagram from "../../../../public/icons/svgs/Instagram";
import LinkedIn from "../../../../public/icons/svgs/LinkedIn";
import Image from "next/image";

function Footer() {
  return (
    <>
      <div
        className="w-full bg-[#0E453A] px-[95px] pt-[56px] pb-[22px] relative  
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
          <div className="flex items-center justify-between w-full">
            <FooterDesc />
            <SocialMedias />
          </div>
          {/* second row */}
          <div className="flex items-start justify-between w-full">
            {/* license logos */}
            <div className="relative flex items-center gap-x-4  rounded-full h-[60px] w-[60px]">
              {licenceLogos.map((logo, index) => {
                return (
                  <Image
                    key={index}
                    src={logo.src}
                    alt={logo.alt}
                    className="!relative  mx-auto"
                    fill
                  />
                );
              })}
            </div>
            {/* links */}
            <ShortcutLinks />
          </div>
        </div>
      </div>
      {/* license */}
      <div
        className="w-full py-4 text-center bg-[#0E453A] last:text-natural-gray3 border-t
                    box-center flex-col gap-y-2 "
      >
        <Link
          className="text-primary-500"
          target="_blank"
          href={"https://www.linkedin.com/in/alireza-naghavian"}
        >
          طراحی شده توسط Alireza-naghavian
        </Link>
        <p>
          تمامی حقوق این وبسایت متعلق به سفرکو است و هر گونه کپی برداری مطالب با
          ذکر منبع بلامانع است
        </p>
      </div>
    </>
  );
}

const FooterDesc = () => {
  return (
    <div className="flex flex-col items-start justify-between gap-y-6">
      <Logo hasCaption={true} size="xl" />
      <p className="w-[480px] h-[86px] text-white">
        <span className="text-primary-500">(سفرکو)</span>
        یک پلفترم بزرگ شناخت جاذبه های گردشگری است.هدف ما از این کار شناخت تمامی
        نقاط گردشگری ایران و معرفی آن به تمام مردم ایران و حتی جهان است ، تا به
        صنعت گردشگری ایران کمک کنیم.
      </p>
    </div>
  );
};

const ShortcutLinks = () => {
  return (
    <div className="flex items-start text-center gap-x-[72px]">
      {footerLinks.map((link, index) => {
        return (
          <div key={Math.random() * 100 * index}>
            <span className="md:text-h4Semi  lg:text-h3Semi  text-bodyB5semi text-primary-400">
              {link.title}
            </span>
            <ul
              className="box-center flex-col space-y-6 my-4 
                   child:text-white child:text-center lg:text-bodyB2Regular
                     md:text-bodyB4Regular text-bodyB6Regular  ">
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

const SocialMedias = () => {
  return (
    <div className="flex flex-col gap-y-6">
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

export default Footer;
