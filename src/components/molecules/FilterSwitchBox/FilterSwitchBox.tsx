"use client"
import CustomSwitch from '@/components/atoms/Switch/CustomSwitch';
import { FilterSwitchBox_T } from '@/features/iranology/iranology.t';
import React from 'react'

const FilterSwitchBox = ({ label, contentBox, ...rest }: FilterSwitchBox_T) => {
    return (
      <div
        className={`w-full relative  p-3 rounded-8
           bg-white flex flex-col gap-y-6  items-start text-natural-black ${rest.className}`}
      >
        <span className="text-right md:text-bodyB3semi text-bodyB4semi">
          {label}
        </span>
        <div className="flex  flex-wrap w-full items-center gap-x-6 gap-y-3 ">
          {contentBox.map((content) => {
            return (
              <CustomSwitch
                key={content.key as string}
                name={content.name}
                label={content.label}
                className="w-full !text-natural-black"
              />
            );
          })}
        </div>
      </div>
    );
  };

export default FilterSwitchBox