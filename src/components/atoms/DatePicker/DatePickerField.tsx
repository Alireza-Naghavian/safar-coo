"use client";
import React from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { ClassName_T, SetState } from "@/types/global.t";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
type DatePricker_T = ClassName_T & {
  label: string;
  date: DateObject;
  setDate: SetState<DateObject>;
  labeStyle:string

};
function DatePickerField({ date, label, setDate,className,labeStyle }: DatePricker_T) {
  return (
    <div className=" flex flex-col gap-y-3 ">
      <label className={`text-bodyB1semi text-natural-black ${labeStyle}`}>{label}</label>
      <DatePicker
      containerClassName="w-full"
      containerStyle={{width:'100%'}}
        onChange={(date) => setDate(date as DateObject)}
        value={date}
        calendar={persian}
        plugins={[
          <TimePicker position="bottom" />
        ]}
        locale={persian_fa}
        minDate={Date.now()}
        inputClass={className}
      />
    </div>
  );
}

export default DatePickerField;
