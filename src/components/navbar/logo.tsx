import { PopUp } from "../../animations/popUp";
import { useColor } from "../../context/colorProvider";

export const Logo = () => {
  const { colors } = useColor();
  return (
    <div
      className="w-full md:w-1/3 flex items-center justify-center"
      style={{ color: colors.cream }}
    >
      <div className="flex items-center justify-center p-2 text-3xl md:p-4 md:text-5xl roboto">
        <PopUp>
          <span>shrey</span>
          <span style={{ color: colors.orange }}>.</span>
          <span>dev</span>
        </PopUp>
        <PopUp>
          <span style={{ color: colors.orange }}>.</span>
          <span style={{ color: colors.cyan }}>_</span>
        </PopUp>
      </div>
    </div>
  );
};
