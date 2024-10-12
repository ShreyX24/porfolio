import { useSmoothScroll } from "../../hooks/smoothScroll";
import { navBtns } from "../../lib/navBtns";
import { Button } from "../common/button";

export const Navbtns = () => {
  const scrollToSection = useSmoothScroll();
  return (
    <>
      {/* Visible only in desktop */}
      <div className="hidden md:w-1/3 md:flex md:items-center md:justify-center md:gap-10 z-10">
        {navBtns.map((item, index) => (
          <Button
            key={index}
            className="flex gap-2 items-center font-semibold borderT"
            placeholder={item.name}
            src={`/assets/icons/${item.img}.png`}
            src_w="22"
            onclick={() => scrollToSection(item.id)}
          />
        ))}
      </div>
    </>
  );
};
