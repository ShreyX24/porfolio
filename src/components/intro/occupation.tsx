import { Slide } from "../../animations/slide";

interface OccupationProps {
  placeholder: string;
}

export const Occupation = ({ placeholder }: OccupationProps) => {
  return (
    <Slide animdelay={true}>
      <span className="text-[18px] font-semibold md:font-normal md:text-[30px] poppins">
        <span>~</span>
        {placeholder}
      </span>
    </Slide>
  );
};
