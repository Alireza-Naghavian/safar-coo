"use client";
import MainBtn from "@/components/atoms/buttons&links/MainBtn";
import DatePickerField from "@/components/atoms/DatePicker/DatePickerField";
import { TextField } from "@/components/atoms/inputFields/TextFields";
import Spinner from "@/components/atoms/Loaders/Spinner";
import CustomSelect from "@/components/molecules/Select/CustomSelect";
import useDisclosure from "@/hooks/useDisclosure";
import { ResponseData_T, SetState } from "@/types/global.t";
import { CustomSelectProps } from "@/types/textField.t";
import {
  ArticleCategories,
  defaultCoordinate,
  placePriceOptions,
} from "@/utils/constants";
import { customErorrToast } from "@/utils/CutomToast";
import { addExperienceValidation } from "@/utils/validators/experienceValidation";
import { SelectItem } from "@heroui/select";
import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import { LocationAdd } from "iconsax-react";
import iranCity from "iran-city";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { DateObject } from "react-multi-date-picker";
import { useAddExperience } from "../../hooks/user.hook";
import {
  IranCity_T,
  ObjectValue,
  TrExperienceReqBody,
  TrExperinceFormProps,
} from "../../user-panel.t";
import HeaderContentPanelLayout from "../HeaderContentPanelLayout";
import MapModal from "./MapModal";
import styles from "./trExp.module.css";
import BackLink from "@/components/atoms/buttons&links/BackLink";
type CustomRenderSelect_T = {
  schemaMsg: string;
  placeholder: string;
  name: CustomSelectProps<TrExperinceFormProps>["name"];
  label: string;
  options: ObjectValue[];
  isDisabled?: boolean;
};
const TextEditor = dynamic(
  () => import("@/components/organisms/TextEditor/TextEditor"),
  { ssr: false }
);

function AddExprienceForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, touchedFields },
  } = useForm<TrExperinceFormProps>({
    resolver: yupResolver(addExperienceValidation),
  });
  const [date, setDate] = useState<DateObject | null>();
  const [description, setDescription] = useState<string>("");
  const { push } = useRouter();

  // correct provinces structure
  const provincesArr: IranCity_T[] = iranCity.allProvinces();
  const provincesStructure = provincesArr.map((province) => {
    return { key: province.id, label: province.slug };
  });

    // correct cities structure
  const citiesOfProvince: IranCity_T[] = iranCity.citiesOfProvince(
    Number(watch("province"))
  );
  const citiesStructure = citiesOfProvince.map((city) => {
    return { key: city.id, label: city.slug };
  });

  const { close, open, isOpen: isMapOpen } = useDisclosure(false);
  const [locationStatus, setLocationStatus] = useState({
    value: false,
    label: "ثبت آدرس با نقشه",
  });

  const [coord, setCoord] = useState<[number, number]>(defaultCoordinate);
  const { addExperience, isAddLoading } = useAddExperience();

  // submit location
  useEffect(() => {
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
        publishTime: (date as DateObject) ?? null,
        province: data.province,
        city: data.city,
      };
      await addExperience(
        { data: addExperienceBody },
        {
          onSuccess: () => {
           setTimeout(()=> push("/user-panel/travel-exprience"),1000)
          },
        }
      );
    } catch (error: unknown) {
      customErorrToast({
        title: "خطا در ایجاد تجربه سفر",
        desc: error as ResponseData_T<string>,
      });
    } finally {
      setDescription("");
      setCoord(defaultCoordinate);
      setLocationStatus({
        value: false,
        label: "ثبت آدرس با نقشه",
      });
      setDate(null);
      reset();
    }
  };
  const RenderCustomSelect = ({
    label,
    name,
    options,
    placeholder,
    schemaMsg,
    ...rest
  }: CustomRenderSelect_T) => {
    return (
      <CustomSelect
        validationSchema={{
          required: schemaMsg,
        }}
        register={register}
        errors={errors}
        touchedFields={touchedFields}
        name={name}
        className="  w-full "
        placeholder={placeholder}
        label={label}
        isDisabled={rest.isDisabled}
        classNames={{
          label: "!text-bodyB3Regular",
          description: "text-red-500",
        }}
        labelPlacement="outside"
        {...rest}
      >
        {options.map((option) => (
          <SelectItem className="!rounded-12" key={option.key}>
            {option.label}
          </SelectItem>
        ))}
      </CustomSelect>
    );
  };
  return (
    <>
      <div className="user-panel-container">
        <HeaderContentPanelLayout
          title="نوشتن تجربه جدید از سفر"
          desc={`توی این بخش میتونی تجربه هایی که از سفرت به یه مکان یا شهری که رفتی رو بنویسی
        و اونو در سایت منتشر کنی تا بقیه هم 
        از تجربه ات استفاده کنن و هم اینکه جزو نویسنده های سایت ما بشی.`}
        >
              <BackLink target="/user-panel/travel-exprience" />
        </HeaderContentPanelLayout>
        <div className="sm:px-11 px-4   py-4">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="sm:mt-20 mt-12 flex flex-col gap-y-8  relative size-full "
          >
            {/* input group */}
            <div className={styles.inputGroupMainContainer}>
              <div className={styles.inputGroupContainer}>
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
                {RenderCustomSelect({
                  label: "دسته بندی مقاله",
                  name: "category",
                  options: ArticleCategories,
                  placeholder: "دسته بندی را انتخاب کنید",
                  schemaMsg: "دسته بندی الزامی است",
                })}
              </div>
              <div className="h-[63px] gap-2 sm:block hidden w-0"></div>
            </div>
            {/* input group  */}
            <div className={styles.inputGroupMainContainer}>
              <div className={styles.inputGroupContainer}>
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
                <div className="self-start">
                  {RenderCustomSelect({
                    label: "هزینه بازدید",
                    name: "plan",
                    options: placePriceOptions,
                    placeholder: "رایگان؟غیررایگان؟",
                    schemaMsg: "هزینه بازدید باید مشخص شود",
                  })}
                </div>
              </div>
              <div className="h-[63px] gap-2 sm:block hidden w-0"></div>
            </div>
            <div className={styles.inputGroupMainContainer}>
              <div className={styles.inputGroupContainer}>
                {RenderCustomSelect({
                  label: "استان محل سفر",
                  name: "province",
                  options: provincesStructure,
                  placeholder: "استان محل سفر را انتخاب کنید",
                  schemaMsg: "انتخاب استان الزامی است",
                })}
                {RenderCustomSelect({
                  label: "شهر محل سفر",
                  isDisabled: watch("province") == undefined,
                  name: "city",
                  options: citiesStructure,
                  placeholder: "شهر محل سفر را انتخاب کنید",
                  schemaMsg: "انتخاب شهر الزامی است",
                })}
              </div>
            </div>
            {/* blog description */}
            <TextEditor
              placeholder="لطفا تجربه سفر خود را توضیح دهید"
              value={description}
              onChange={setDescription}
            />
            {/* input group */}
            <div className={styles.inputGroupContainer}>
              <div className="sm:w-1/2 w-full"></div>
              <div className="sm:w-1/2 w-full">
                <DatePickerField
                  date={date as DateObject}
                  setDate={setDate as SetState<DateObject>}
                  label="ساعت انتشار مقاله"
                  className="h-10  rounded-8 p-2 w-full relative"
                  labeStyle="sm:text-bodyB3Regular text-bodyB4Regular"
                />
                <span className="text-right text-natural-black text-bodyB5semi">
                  در صورت انتشار‌آنی این بخش را نادیده بگیرید.
                </span>
              </div>
            </div>
            <MainBtn
              variant="fill"
              className="bg-primary-300
               text-natural-black
               mr-auto rounded-8 "
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
      <MapModal
        close={close}
        isMapOpen={isMapOpen}
        coord={coord}
        setCoord={setCoord}
      />
    </>
  );
}

export default AddExprienceForm;
