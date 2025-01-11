"use client";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import LoginForm from "@/components/layouts/auth/LoginForm";
import useDisclosure from "@/hooks/useDisclosure";
import ProfileIcon from "../../../../public/icons/svgs/ProfileIcon";
import MainModal from "../modal/Modal";

function NavBtnGroup() {
  const { isOpen: isModalOpen, open, close } = useDisclosure();
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
          <ProfileIcon />
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
        className="md:p-8 p-4 relative w-full max-w-[510px] h-full
         md:max-h-[680px] max-h-[550px]  overflow-y-auto !top-10  "
        isShow={isModalOpen}
        onClose={close}
        effect="ease_out"
      >
        <MainModal.Header onClose={close}>
          <></>
        </MainModal.Header>
        <MainModal.Body>
          <LoginForm />
        </MainModal.Body>
      </MainModal>
    </>
  );
}

export default NavBtnGroup;
