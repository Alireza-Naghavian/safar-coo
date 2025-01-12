import { FullBLogCard_T } from '@/types/cards.t';
import { Calendar2, Clock } from 'iconsax-react';
import Link from 'next/link';
import ClockIcon from '../../../../public/icons/svgs/ClockIcon';
import BlogCard from './BlogCard';

 const FullBlogCard = ({
    title,
    desc,
    cover,
    ...restProps
  }: FullBLogCard_T) => {
    return (
      <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-4 items-start
       md:max-h-[285px]  gap-x-6 lg:pb-[73px] sm:pb-8 pb-4 border-b border-natural-gray3 ">
        <div className="md:max-w-[390px]  w-full  h-full">
          <BlogCard
            title={title}
            cover={cover}
            href={restProps.href}
            variant="full-detail"
            badgeContent={restProps.badgeContent}
          />
        </div>
        <div className="flex flex-col items-start  gap-y-4 max-w-[590px] sm:px-0 px-2">
          <Link
            href={restProps.href}
            className="text-natural-black lg:text-h2Semi 
                      sm:text-h3Semi text-hB4semi   "
          >
            {title}
          </Link>
          <p
            className="text-natural-black line-clamp-2 w-full relative 
          lg:text-bodyB3Regular text-bodyB4Regular lg:mt-10 sm:mt-4 "
          >
            {desc}
          </p>
          {/* date & time */}
          <div className="flex lg:flex-col lg:gap-x-0 gap-x-4 items-start gap-y-3">
            <div className="flex  gap-x-1">
              <span className="mt-0.5"><Calendar2 className='size-[18px] stroke-natural-gray2 '/></span>
              <span className="text-natural-gray3 sm:text-bodyB3Regular  ">
                {
                  new Date(restProps.date).toLocaleString("fa-IR",
                       {dateStyle: "medium"}) as string
                }
              </span>
            </div>
            <div className="flex  gap-x-1">
              <span className="mt-0.5"><Clock className='size-[18px] stroke-natural-gray2 ' /></span>
              <span className="text-natural-gray3 sm:text-bodyB3Regular  ">
                {
                  new Date(restProps.date).toLocaleString("fa-IR",
                       {timeStyle:"short",hour12:true}) as string
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default FullBlogCard