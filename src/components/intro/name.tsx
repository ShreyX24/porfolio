import { Slide } from "../../animations/slide";

export const Name = () => {
  return (
    <div className="flex flex-col">
      <Slide width="fit-content" animdelay={true}>
        <span className="flex flex-wrap text-center font-bold text-[60px] py-2 leading-tight md:w-[520px] md:text-[100px] md:text-left md:py-5 abril">
          Shreyansh
        </span>
      </Slide>
      <Slide width="fit-content" animdelay={true}>
        <span className="flex flex-wrap text-center font-bold text-[60px] py-2 leading-tight md:w-[520px] md:text-[100px] md:text-left md:py-5 abril">
          Tripathy
        </span>
      </Slide>
    </div>
  );
};
