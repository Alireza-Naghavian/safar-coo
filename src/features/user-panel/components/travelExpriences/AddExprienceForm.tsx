"use client";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import DatePickerField from "@/components/atoms/DatePicker/DatePickerField";
import { TextField } from "@/components/atoms/inputFields/TextFields";
import MainModal from "@/components/molecules/modal/Modal";
import CustomSelect from "@/components/molecules/Select/CustomSelect";
import CustomMap from "@/components/organisms/Map/CustomMap";
import useDisclosure from "@/hooks/useDisclosure";
import { ResponseData_T, SetState } from "@/types/global.t";
import {
  ArticleCategories,
  defaultCoordinate,
  placePriceOptions,
} from "@/utils/constants";
import { customErorrToast } from "@/utils/CutomToast";
import { addExperienceValidation } from "@/utils/validators/experienceValidation";
import { SelectItem } from "@heroui/select";
import { yupResolver } from "@hookform/resolvers/yup";
import { LocationAdd } from "iconsax-react";
import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { DateObject } from "react-multi-date-picker";
import { TrExperienceReqBody, TrExperinceFormProps } from "../../user-panel.t";
import HeaderContentPanelLayout from "../HeaderContentPanelLayout";
import { AxiosError } from "axios";
import { useAddExperience } from "../../hooks/user.hook";
import Spinner from "@/components/atoms/Loaders/Spinner";
const TextEditor = dynamic(
  () => import("@/components/organisms/TextEditor/TextEditor"),
  { ssr: false }
);

function AddExprienceForm() {
  const [date, setDate] = useState<DateObject | null>();
  const [description, setDescription] = useState<string>("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, touchedFields },
  } = useForm<TrExperinceFormProps>({
    resolver: yupResolver(addExperienceValidation),
  });
  const { close, open, isOpen: isMapOpen } = useDisclosure(false);
  const [locationStatus, setLocationStatus] = useState({
    value: false,
    label: "ثبت آدرس با نقشه",
  });
  const [coord, setCoord] = useState<[number, number]>(defaultCoordinate);

  const { addExperience, isAddLoading } = useAddExperience();

  // submit location
  useMemo(() => {
    if (coord !== defaultCoordinate) {
      setLocationStatus({ value: true, label: "موقعیت مکانی ثبت شد" });
    }
  }, [setLocationStatus, coord]);

  // send to server
  const submitHandler = async (data: TrExperinceFormProps) => {
    try {
      const isSameCoord = coord === defaultCoordinate;
      if (isSameCoord && data.address?.trim().length == 0) {
        customErorrToast({
          title: "آدرس را به صورت دستی یا ازطریق نقشه وارد کنید",
          desc: new AxiosError(
            "آدرس را به صورت دستی یا ازطریق نقشه وارد کنید"
          ) as unknown as ResponseData_T<string>,
        });
        return;
      } else if (description.trim().length === 0) {
        customErorrToast({
          title: "محتوای تجربه سفر الزامی است",
          desc: new AxiosError(
            "آدرس را به صورت دستی یا ازطریق نقشه وارد کنید"
          ) as unknown as ResponseData_T<string>,
        });
        return;
      }
      const addExperienceBody: TrExperienceReqBody = {
        title: data.title,
        body: description,
        plan: data.plan,
        category: data.category,
        location: isSameCoord ? null : coord,
        address: data.address ?? null,
        publishTime: date as DateObject ?? null,
      };
      await addExperience({data:addExperienceBody})
    } catch (error: unknown) {
      customErorrToast({
        title: "خطا در ایجاد تجربه سفر",
        desc: error as ResponseData_T<string>,
      });
    } finally {
      setDescription("")
      setCoord(defaultCoordinate)
      setLocationStatus({
        value: false,
        label: "ثبت آدرس با نقشه",
      })
      setDate(null)
      reset();
    }
  };

  return (
    <>
      <div className="user-panel-container">
        <HeaderContentPanelLayout
          title="نوشتن تجربه جدید از سفر"
          desc={`توی این بخش میتونی تجربه هایی که از سفرت به یه مکان یا شهری که رفتی رو بنویسی
        و اونو در سایت منتشر کنی تا بقیه هم 
        از تجربه ات استفاده کنن و هم اینکه جزو نویسنده های سایت ما بشی.`}
        />
        <div className="sm:px-11 px-4   py-4">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="sm:mt-20 mt-12 flex flex-col gap-y-8  relative size-full "
          >
            {/* input group */}
            <div className=" first:w-full ">
              <div className="flex child:w-1/2 sm:flex-row flex-col items-center sm:gap-y-0 gap-y-6 gap-x-6">
                <TextField
                  register={register}
                  touchedFields={touchedFields}
                  errors={errors}
                  name="title"
                  labelstyles="sm:text-bodyB3Regular text-bodyB4Regular"
                  placeholder={" "}
                  isClearable
                  className=" w-full tracking-tighter "
                  label={"عنوان مقاله"}
                />
                <CustomSelect
                  validationSchema={{
                    required: "دسته بندی الزامی است",
                  }}
                  register={register}
                  errors={errors}
                  touchedFields={touchedFields}
                  name="category"
                  className="  w-full "
                  placeholder="دسته بندی را انتخاب کنید"
                  label="دسته بندی مقاله"
                  classNames={{
                    label: "!text-bodyB3Regular",
                    description: "text-red-500",
                  }}
                  labelPlacement="outside"
                >
                  {ArticleCategories.map((option) => (
                    <SelectItem className="!rounded-12" key={option.key}>
                      {option.label}
                    </SelectItem>
                  ))}
                </CustomSelect>
              </div>
              <div className="h-[63px] gap-2 sm:block hidden w-0"></div>
            </div>
            {/* input group  */}
            <div className=" first:w-full ">
              <div className="flex child:w-1/2 sm:flex-row flex-col items-center sm:gap-y-0 gap-y-6 gap-x-6">
                <div className="flex flex-col  w-full items-start">
                  <TextField
                    touchedFields={touchedFields}
                    readOnly={locationStatus.value}
                    register={register}
                    errors={errors}
                    name="address"
                    labelstyles="sm:text-bodyB3Regular text-bodyB4Regular"
                    placeholder={
                      locationStatus.value
                        ? "آدرس به وسیله نقشه ثبت شد."
                        : "آدرس دقیق را وارد کنید یا از موقعیت مکانی استفاده کنید"
                    }
                    isClearable
                    className="w-full tracking-tighter "
                    label={"آدرس جاذبه گردشگری"}
                  />
                  <MainBtn
                    onClick={open}
                    type="button"
                    name="location"
                    variant="fill"
                    className={`
                  text-natural-black ${
                    locationStatus.value
                      ? "!bg-primary-300"
                      : "!bg-secondary-300"
                  }
                w-full md:max-w-[210px] sm:max-w-[180px]
                rounded-8 flex items-center gap-x-2 mt-4
                  `}
                    size="xxl"
                    state="hover"
                  >
                    <LocationAdd className="size-4 stroke-natural-black" />
                    <span className="md:text-btnTextXl text-btnTextM ">
                      {locationStatus.label}
                    </span>
                  </MainBtn>
                </div>
                <CustomSelect
                  validationSchema={{
                    required: "هزینه بازدید باید مشخص شود",
                  }}
                  register={register}
                  errors={errors}
                  touchedFields={touchedFields}
                  className="w-full mb-[63px]"
                  placeholder="رایگان؟غیررایگان؟"
                  label="هزینه بازدید"
                  name="plan"
                  classNames={{
                    label: "!text-bodyB3Regular",
                  }}
                  labelPlacement="outside"
                >
                  {placePriceOptions.map((option) => (
                    <SelectItem className="!rounded-12" key={option.key}>
                      {option.label}
                    </SelectItem>
                  ))}
                </CustomSelect>
              </div>
              <div className="h-[63px] gap-2 sm:block hidden w-0"></div>
            </div>
             {/* blog description */}
             <TextEditor
              placeholder="لطفا تجربه سفر خود را توضیح دهید"
              value={description}
              onChange={setDescription}
            />
            {/* input group */}
            <div className=" relative flex sm:flex-row flex-col w-full  gap-x-6  ">
              <div className="sm:w-1/2 w-full"></div>
              <div className="sm:w-1/2 w-full">
                <DatePickerField
                  date={date as DateObject}
                  setDate={setDate as SetState<DateObject>}
                  label="ساعت انتشار مقاله"
                  className="h-10  rounded-8 p-2 w-full relative"
                  labeStyle="sm:text-bodyB3Regular text-bodyB4Regular"
                />
                <span className="text-right text-natural-black text-bodyB5semi">در صورت انتشار‌آنی این بخش را نادیده بگیرید.</span>
              </div>
            </div>
           
            <MainBtn
              variant="fill"
              className="bg-primary-300 text-natural-black mr-auto rounded-8 "
              size="xxl"
              state="normal"
              type="submit"
            >
              {isAddLoading ? (
                <Spinner width="w-8" height="h-8" color={"stroke-white"} />
              ) : (
                "انتشار مقاله"
              )}
            </MainBtn>
          </form>
        </div>
      </div>
      {/* Map modal */}
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
    </>
  );
}

export default AddExprienceForm;
