import { useColor } from "../../context/colorProvider";

export const PreventMobileView = () => {
  const { colors } = useColor();
  return (
    <div
      className="fixed top-0 z-[100] w-full h-full flex items-center justify-center md:hidden "
      style={{ backgroundColor: colors.secondary, color: colors.primary }}
    >
      <div className="flex flex-col items-center justify-center gap-10">
        <img src="/assets/icons/maintainence.png" alt="" width="55" />
        <div className="flex flex-col items-center justify-center">
          <span className="font-semibold text-2xl">
            Mobile UI Under Maintainence
          </span>

          <p>Please open this app in desktop or a laptop.</p>
        </div>
      </div>
    </div>
  );
};
