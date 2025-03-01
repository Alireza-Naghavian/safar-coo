import React from 'react'


interface SkeletonProps {
  count: number;
  children: React.ReactNode;
}
const Skeleton: React.FC<SkeletonProps> = (props) => {
  // ? Porps
  const { count, children } = props;

  const arr = Array(count).fill("_");

  // ? Render(s)
  return (
    <>
      {arr.map(() =>
        React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<SkeletonProps>)
            : child
        )
      )}
    </>
  );
};

interface ItemsProps {
  children: React.ReactNode;
  className?: string;
}

const Items: React.FC<ItemsProps> = (props) => {
  // ? Props
  const { children, className } = props;

  // ? Render(s)
  return (
    <div className={className}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement)
          : child
      )}
    </div>
  );
};

interface ItemProps {
    height: string
    width: string
    animated?: 'background' | 'border'
    className?: string
    children?: React.ReactNode
    backgroundColor:string
  }

  export const Item: React.FC<ItemProps> = (props) => {
    const { height, width, animated, className, children,backgroundColor } = props
  
    const key = Math.floor(Math.random() * 100)
  
    return (
      <div
        key={key}
        className={` ${height} ${width} ${
          animated === 'background'
            ? `animate-pulse ${backgroundColor} `
            : animated === 'border'
              ? 'animate-pulse border-2 border-gray-200 '
              : 'bg-white'
        } rounded-md  ${className}`}
      >
        {children}
      </div>
    )
  }
  

  const Skeleton_sample = Object.assign(Skeleton, {
    Skeleton,
    Items,
    Item,
  })
  export default Skeleton_sample