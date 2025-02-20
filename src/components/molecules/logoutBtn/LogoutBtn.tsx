import { LogoutCurve } from "iconsax-react";
import MainModal from "../modal/Modal";
import useDisclosure from "@/hooks/useDisclosure";
import Image from "next/image";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import { useLogout } from "@/features/auth/hooks/auth.hook";
import Spinner from "@/components/atoms/Loader/Spinner";

function LogoutBtn({ isMenuOpen }: { isMenuOpen?: boolean }) {
  const { open, isOpen: isModalShow, close } = useDisclosure(false);
  const { islogoutLoading, logout } = useLogout();
  const logoutHandler = async () => {
    try {
      await logout();
    } catch (error) {
      return error;
    } finally {
      close();
    }
  };
  return (
    <>
      <button
        onClick={open}
        className={`${
          isMenuOpen ? "w-full" : "w-auto"
        } flex gap-x-2 rounded-4 tr-300 items-center py-2 px-3    hover:!bg-accent-200`}
      >
        <LogoutCurve className="stroke-natural-black group-hover:stroke-accent-500 size-7" />
        {isMenuOpen && (
          <span className="text-bodyB2Regular group text-natural-gray2 group-hover:text-natural-black  ">
            خروج
          </span>
        )}
      </button>
      <MainModal
        isClickable
        effect="ease_out"
        isShow={isModalShow}
        className="w-full sm:max-w-[553px]   max-w-[271px]
        overflow-y-auto
        px-8 py-4 "
        onClose={close}
      >
        <MainModal.Header isClickable onClose={close}>
          <></>
        </MainModal.Header>
        <MainModal.Body>
          <div className="flex flex-col  w-full mt-12 ">
            {/* picture */}
            <div
              className=" w-[143px] sm:w-[333px] mx-auto 
        h-[99px] sm:h-[230px] relative flex justify-center"
            >
              <Image
                fill
                alt="logout.png"
                src={"/images/logout.png"}
                sizes="333"
                quality={100}
                priority
              />
            </div>
            {/* title */}
            <h2
              className="w-full max-w-[289px] mx-auto text-center md:mt-[72px] mt-[52px]
            text-natural-black md:text-h2Semi 
             text-bodyB2semi   "
            >
              واقعا از حساب کاربری خودت میخوای خارج بشی؟
            </h2>
          </div>
          {/* btn group */}
          <div
            className="flex items-center gap-x-14
         justify-center mt-[52px] child:w-full 
         child:max-w-[195px] child:rounded-12 child:shadow-sm 
         child:text-bodyB2semi
         child:border-2 child:border-natural-gray3"
          >
            <MainBtn onClick={close} variant="fill" size="xxl" state="hover">
              خیر
            </MainBtn>
            <MainBtn
              disabled={islogoutLoading}
              type="button"
              onClick={logoutHandler}
              variant="fill"
              size="xxl"
              state="hover"
            >
              {islogoutLoading ? (
                <Spinner width="w-8" height="h-8" color={"stroke-white"} />
              ) : (
                "بله"
              )}
            </MainBtn>
          </div>
        </MainModal.Body>
      </MainModal>
    </>
  );
}

export default LogoutBtn;
