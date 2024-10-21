import { useColor } from "../../context/colorProvider";

export const Footer = () => {
  const { colors, isMobile } = useColor();
  const deskHeight = "200px";
  const mobHeight = "50vh";
  const year = new Date().getFullYear();
  return (
    <div
      className="w-screen"
      style={{
        color: colors.primary,
        height: isMobile ? mobHeight : deskHeight,
        backgroundColor: colors.secondary,
      }}
    >
      <div className="flex h-full items-end justify-center text-center">
        <span className="py-4">
          This site is developed and maintained by <strong>shrey.dev</strong> © {" "}
          {year}
        </span>
      </div>
    </div>
  );
};
