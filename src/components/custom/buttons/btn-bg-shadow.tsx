interface BtnBgShadowProps {
  borderRadius?: string;
  translate?: '0' | '1' | '2' | '4' | '6';
}

export const BtnBgShadow = ({
  borderRadius = '3',
  translate = '2',
}: BtnBgShadowProps) => {
  // Map different border radius values to specific Tailwind classes
  const radiusClasses = {
    '0': 'rounded-none',
    '3': 'rounded-[3px]',
    '4': 'rounded-[4px]',
    '100': 'rounded-full',
    // Add more mappings as needed
  };
  const translateClass = {
    '0': 'translate-[0px]',
    '1': 'translate-[1px]',
    '2': 'translate-[2px]',
    '4': 'translate-[4px]',
    '6': 'translate-[6px]',
    // Add more mappings as needed
  };

  // Get the appropriate class or default to rounded-[3px]
  const radiusClass =
    radiusClasses[borderRadius as keyof typeof radiusClasses] ||
    'rounded-[3px]';

  return (
    <div
      className={`${translateClass[translate]} absolute inset-0 h-full w-full ${radiusClass} bg-black`}
    ></div>
  );
};
