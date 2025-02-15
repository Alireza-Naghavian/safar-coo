import React from 'react'
import BoatIcon from '../../../../public/icons/svgs/BoatIcon'
import TrExprienceCard from '@/components/molecules/cards/TrExprienceCard'

function LatestExperiences() {
  return (
    <section className='relative w-full flex flex-col mt-24 md:gap-y-[90px] gap-y-7'>
        <div className="flex items-center gap-x-1">
        <BoatIcon/>
        <h2 className="text-natural-black md:text-h2Semi">آخرین تجربیات سفر دیگران به مکان های مختلف</h2>
        </div>
            <div className="w-full grid  lg:grid-cols-3 sm:grid-cols-2 md:gap-x-6 
            gap-x-4 md:gap-y-22 gap-y-10 ">
                    <TrExprienceCard
            title="تجربه بازدید از کاخ چهلستون-اصفهان"
            cover="/images/sotoon.png"
            href=""
            provider="علیرضا رضایی"
            badgeContent="جاذبه تاریخی"
          />
                <TrExprienceCard
            title="تجربه بازدید از کاخ چهلستون-اصفهان"
            cover="/images/sotoon.png"
            href=""
            provider="علیرضا رضایی"
            badgeContent="جاذبه تاریخی"
          />
                <TrExprienceCard
            title="تجربه بازدید از کاخ چهلستون-اصفهان"
            cover="/images/sotoon.png"
            href=""
            provider="علیرضا رضایی"
            badgeContent="جاذبه تاریخی"
          />
                <TrExprienceCard
            title="تجربه بازدید از کاخ چهلستون-اصفهان"
            cover="/images/sotoon.png"
            href=""
            provider="علیرضا رضایی"
            badgeContent="جاذبه تاریخی"
          />
                <TrExprienceCard
            title="تجربه بازدید از کاخ چهلستون-اصفهان"
            cover="/images/sotoon.png"
            href=""
            provider="علیرضا رضایی"
            badgeContent="جاذبه تاریخی"
          />
                <TrExprienceCard
            title="تجربه بازدید از کاخ چهلستون-اصفهان"
            cover="/images/sotoon.png"
            href=""
            provider="علیرضا رضایی"
            badgeContent="جاذبه تاریخی"
          />
                <TrExprienceCard
            title="تجربه بازدید از کاخ چهلستون-اصفهان"
            cover="/images/sotoon.png"
            href=""
            provider="علیرضا رضایی"
            badgeContent="جاذبه تاریخی"
          />

            </div>
    </section>
  )
}

export default LatestExperiences