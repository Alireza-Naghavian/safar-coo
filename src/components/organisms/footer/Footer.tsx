import Logo from "@/components/atoms/Logo";
import { footerLinks } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import Instagram from "../../../../public/icons/svgs/Instagram";
import LinkedIn from "../../../../public/icons/svgs/LinkedIn";

function Footer() {
  return (
    <div
      className="w-full bg-[#0E453A] px-[95px] pt-[56px]  pb-[22px] relative 
                     mt-[115px] gap-2  child:bg-transparent "
    >
      <div className="w-[1024px] h-auto  relative box-center flex-col mx-auto gap-y-10 mb-4">
      {/* image box */}
        <div className=" relative w-full h-[500px] ">
          <Image
            className="w-full h-full"
            alt="footer-bg.png"
            fill
            src={"/images/bg-footer.png"}
          />
        </div>

        {/* links & description */}
        <div className="flex   gap-x-[50px] w-full h-full">
          {/* desc */}
          <div className="flex flex-col gap-y-6">
            <Logo hasCaption={true} size="xl" />
            <p className="text-right max-w-[500px]  text-white">
              <span className="text-primary-500">(سفرکو)</span>
              یک پلفترم بزرگ شناخت جاذبه های گردشگری است.هدف ما از این کار شناخت
              تمامی نقاط گردشگری ایران و معرفی آن به تمام مردم ایران و حتی جهان
              است ، تا به صنعت گردشگری ایران کمک کنیم.
            </p>
            {/* social medias */}
            <div className="mt-[35px] flex flex-col gap-y-4">
                <span className="text-bodyB2semi text-primary-400">شبکه های اجتماعی ما:</span>
                <div className="flex items-center mr-3  gap-x-6">
                <Link target="_blank" href={"https://www.linkedin.com/in/alireza-naghavian"}><LinkedIn/></Link>
                <Link target="_blank" href={"https://www.instagram.com/alirezangh123123"}><Instagram/></Link>
                </div>
            </div>
          </div>
          <div className="flex items-center  ">
            <div className="flex  gap-x-[20px]  text-center justify-center">
              {footerLinks.map((link, index) => {
                return (
                  <div key={Math.random() * 100 * index} >
                    <span className="text-h2Semi text-primary-400">
                      {link.title}
                    </span>
                    <ul className="box-center flex-col space-y-6 my-4
                                 child:text-white child:text-center ">
                      {link.items.map((item, index) => {
                        return (
                          <li key={Math.random() * 100 * index}>
                            <Link href={item.href}>{item.content}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* license */}
      <div className="w-full py-4 text-center last:text-natural-gray3 
      border-t-1 border-t-natural-gray2 box-center flex-col gap-y-2 ">
        <Link className="text-primary-500" target="_blank" href={"https://www.linkedin.com/in/alireza-naghavian"}>طراحی شده توسط Alireza-naghavian</Link>
        <p>
        تمامی حقوق این وبسایت متعلق به سفرکو است
        و هر گونه کپی برداری مطالب با ذکر منبع بلامانع است
        </p>
      </div>
    </div>
  );
}

export default Footer;
