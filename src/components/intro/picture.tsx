import { Img } from "../common/img";

export const Picture = () => {
  return (
    <div className=" ">
      <Img
        src="/assets/images/shrey.jpg"
        className="w-[200px] rounded-xl object-contain md:w-[300px]"
      />
    </div>
  );
};
