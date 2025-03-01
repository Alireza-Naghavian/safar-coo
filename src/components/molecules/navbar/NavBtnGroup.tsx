"use client";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import NavLink from "@/components/atoms/buttons&links/NavLink";
import Skeleton_sample from "@/components/atoms/skeltons/SkeltonSample";
import LoginForm from "@/components/layouts/auth/LoginForm";
import SignUpForm from "@/components/layouts/auth/SignUpForm";
import { useGetMe } from "@/features/auth/hooks/auth.hook";
import useDisclosure from "@/hooks/useDisclosure";
import { Profile } from "iconsax-react";
import MainModal from "../modal/Modal";
import { useState } from "react";
import { FormType } from "@/types/auth.t";
import ForgetPassForm from "@/components/layouts/auth/ForgetPassForm";
function NavBtnGroup() {
  const { isOpen: isModalOpen, open, close } = useDisclosure();
  const [formType, setFormType] = useState<FormType>("signIn");
  const { userInfo, isUserLoading } = useGetMe();
  console.log(formType)
  return (
    <>
      {isUserLoading ? (
        <Skeleton_sample count={1}>
          <Skeleton_sample.Item
            backgroundColor="bg-secondary-400"
            height="h-[41px]"
            className=" gap-2 py-2 px-3 text-sm flex items-center font-YekanSemi justify-center"
            animated="background"
            width="w-[110px]"
          >
            بارگزاری...
          </Skeleton_sample.Item>
        </Skeleton_sample>
      ) : (
        <>
          {userInfo === undefined ? (
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
          ) : (
            <NavLink
              size="xl"
              state="normal"
              variant="fill"
              target="/user-panel"
              className="flex bg-secondary-400 rounded-4 items-center gap-x-4 justify-center"
            >
              <Profile variant="Bold" className="fill-white size-6" />
              <span className="line-clamp-1 child:line-clamp-1 max-w-[80px]">
                {userInfo?.username}
              </span>
            </NavLink>
          )}
        </>
      )}
      <MainBtn
        size="xl"
        state="hover"
        className=" w-[41px] sm:w-auto !hidden sm:!block 
            text-nowrap bg-secondary-400 hover:bg-secondary-500  sm:rounded-4"
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
         ${formType === "signUp" ? "h-[620px]" : "h-fit"}
         `}
        isShow={isModalOpen}
        onClose={close}
        effect="ease_out"
      >
        <MainModal.Header isClickable onClose={close}>
          <></>
        </MainModal.Header>
        <MainModal.Body>
          {formType === "signUp" ? (
            <div key={"signUpForm"} className="h-full ">
              <SignUpForm closeModalForm={close} setFormType={setFormType} />
            </div>
          ) :formType === "signIn"? (
            <div key={"loginForm"}>
              <LoginForm setFormType={setFormType} closeModalForm={close} />
            </div>
          ):<div key={"forgetPasswordForm"}>
            <ForgetPassForm setFormType={setFormType} closeModalForm={close}/>
            </div>}
        </MainModal.Body>
      </MainModal>
    </>
  );
}

export default NavBtnGroup;
