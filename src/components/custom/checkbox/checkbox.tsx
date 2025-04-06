import { BtnBgShadow } from "../buttons/btn-bg-shadow";

export const Checkbox = () => {
  return (
    <div className="relative inline-block h-5 w-5">
      <BtnBgShadow translate="4"/>
      <input
        id="remember-me"
        type="checkbox"
        className="relative z-10 h-5 w-5 rounded-[3px] border-2 border-gray-900 accent-yellow-400"
      />
    </div>
  );
};
