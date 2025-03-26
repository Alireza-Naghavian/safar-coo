"use client";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import Spinner from "@/components/atoms/Loaders/Spinner";
import MainModal from "./Modal";
type DeleteModalProps = {
  subject: string;
  _id: string;
  close: () => void;
  isModalOpen: boolean;
  isRemoveLoading:boolean
  removeHandler:(id:string)=>void
};
function DeleteModal({ subject, _id, ...rest }: DeleteModalProps) {

  return (
    <MainModal
      key={_id}
      className="md:w-[30%] sm:w-2/3 xs:w-[90%] top-[30%]"
      effect="ease_out"
      isClickable
      isShow={rest.isModalOpen}
      onClose={rest.close}
    >
      <MainModal.Header isClickable onClose={rest.close}>
        <></>
      </MainModal.Header>
      <MainModal.Body>
        <div className="box-center gap-y-6 flex-col  w-full h-full p-4">
          <p className="text-bodyB2semi text-natural-black text-right ml-auto ">{`آیا از حذف  ${subject} اطمینان دارید ؟`}</p>
          <div className="flex sm:w-1/2 w-full mr-auto items-center justify-between gap-x-4">
            <MainBtn
              onClick={rest.close}
              size="xl"
              state="hover"
              variant="outline"
              type="button"
              className="!border-error-3 hover:text-white hover:!bg-error-2 rounded-8 w-1/2"
            >
              خیر
            </MainBtn>
            <MainBtn
              className="!bg-error-1/75 text-white rounded-8 w-1/2"
              size="xl"
              state="normal"
              variant="fill"
              type="button"
              onClick={()=>rest.removeHandler(_id)}
            >
           {rest.isRemoveLoading ?  <Spinner width="w-6" height="h-6" color={"stroke-white"} />:"حذف"}
            </MainBtn>
          </div>
        </div>
      </MainModal.Body>
    </MainModal>
  );
}

export default DeleteModal;
