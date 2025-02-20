"use client";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import LoginForm from "@/components/layouts/auth/LoginForm";
import SignUpForm from "@/components/layouts/auth/SignUpForm";
import useDisclosure from "@/hooks/useDisclosure";
import MainModal from "../modal/Modal";
import { Profile } from "iconsax-react";
import Providers from "@/providers/QueryClientProvider";
function NavBtnGroup() {
  const { isOpen: isModalOpen, open, close } = useDisclosure();
  const { isOpen: isSignUpOpen, toggle: toggleSignUp } = useDisclosure();
  return (
    <>
      <MainBtn
        onClick={open}
        size="xl"
        state="hover"
        className="text-nowrap bg-secondary-300   rounded-4"
        variant="fill"
      >
        <span className="sm:hidden">
          <Profile variant="Outline" className="size-6 fill-white" />
        </span>
        <span className="">ثبت نام</span>
      </MainBtn>
      <MainBtn
        size="xl"
        state="hover"
        className=" w-[41px] sm:w-auto    !hidden  sm:!block  text-nowrap bg-secondary-400 hover:bg-secondary-500  sm:rounded-4"
        variant="fill"
      >
        <span className="hidden sm:block">نصب اپلیکیشن</span>
      </MainBtn>
      {/* modal */}

      <MainModal
        isClickable
        className={`
          md:p-8 p-4 relative w-full max-w-[510px] 
          !top-8 
          overflow-y-auto 
         ${isSignUpOpen ? "h-[620px]" : "h-fit"}
         `}
        isShow={isModalOpen}
        onClose={close}
        effect="ease_out"
      >
        <MainModal.Header isClickable onClose={close}>
          <></>
        </MainModal.Header>
        <MainModal.Body>
          {isSignUpOpen ? (
            <div key={"signUpForm"} className="h-full ">
              <Providers>
                <SignUpForm
                  closeModalForm={close}
                  toggleSignUp={toggleSignUp}
                />
              </Providers>
            </div>
          ) : (
            <div key={"loginForm"}>
              <LoginForm toggleSignUp={toggleSignUp} />
            </div>
          )}
        </MainModal.Body>
      </MainModal>
    </>
  );
}

export default NavBtnGroup;
