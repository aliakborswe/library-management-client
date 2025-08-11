import { cn } from "@/lib/utils";

type Props = {
  title: string;
  description?: string;
  className?: string
};

export const Banner = (props: Props) => {
  return (
    <div className={cn("relative", `${props.className}`)}>
      <div className='w-full h-full bg-black/50 absolute'></div>
      <div className='w-full px-4 h-full flex flex-col gap-3 text-white justify-center items-center absolute text-center'>
        <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold'>
          {props.title}
        </h1>
        {props.description && (
          <p className='max-w-[500px] text-gray-300 text-xl'>
            {props.description}
          </p>
        )}
      </div>
      <img
        className='w-full h-full'
        src='https://i.ibb.co.com/N2w9W7nx/abundant-collection-antique-books-wooden-shelves-generated-by-ai.jpg'
        alt='Library'
      />
    </div>
  );
};
