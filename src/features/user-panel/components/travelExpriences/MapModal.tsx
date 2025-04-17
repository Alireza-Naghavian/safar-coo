"use client"
import MainBtn from '@/components/atoms/buttons&links/MainBtn'
import MainModal from '@/components/molecules/modal/Modal'
import CustomMap from '@/components/organisms/Map/CustomMap'
import { SetState } from '@/types/global.t'
import React from 'react'
type MapModal_T = {
    isMapOpen:boolean,
    close:()=>void;
    setCoord:SetState<[number,number]>
    coord:[number,number]
}
function MapModal({close,coord,isMapOpen,setCoord}:MapModal_T) {
  return (
    <MainModal
    className={`
    md:p-8 p-4 relative w-full max-w-[60%] 
    !top-8 
    overflow-y-auto h-[520px]
   `}
    isClickable
    isShow={isMapOpen}
    onClose={close}
    effect="ease_out"
  >
    <MainModal.Header isClickable onClose={close}>
      <></>
    </MainModal.Header>
    <MainModal.Body>
      <CustomMap
        setPosition={setCoord}
        popupTitle="مکان مورد نظر شما"
        position={coord}
      />
      <div className="mt-4 w-full">
        <MainBtn
          variant="fill"
          className="bg-primary-300 text-natural-black mr-auto rounded-8 "
          size="xxl"
          state="normal"
          type="button"
          onClick={close}
        >
          تایید مکان
        </MainBtn>
      </div>
    </MainModal.Body>
  </MainModal>
  )
}

export default MapModal