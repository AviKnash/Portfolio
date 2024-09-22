import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  spareImg,
  titleClassName,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
  titleClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.1] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: 'linear-gradient(90deg, rgba(0,0,0,1) 13%, rgba(7,7,12,1) 33%, rgba(12,12,20,1) 46%, rgba(17,17,27,1) 58%, rgba(26,25,40,1) 80%, rgba(0,0,0,1) 97%, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 100%, rgba(0,0,0,1) 114%)',
      }}
    >
        <div className={`${id === 6 && 'flex justify-center h-full'}`}>
      <div className="w-full h-full absolute">
      {img && (
        <img src={img} alt={img} className={cn(imgClassName, 'object-cover, object-center')}/>
      )}
      </div>
        </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
