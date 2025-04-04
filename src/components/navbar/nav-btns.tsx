import { NavLink } from 'react-router-dom';
import { BgShadow } from '../bgShadow';

type ButtonStyleType = '1' | '2' | '3' | '4';

export const NavBtns = () => {
  // Instead of hardcoding to '4', define it as ButtonStyleType
  const btn_style: ButtonStyleType = '2';

  const NavButtonsLib = [
    {
      id: 1,
      link: '/',
      img: '',
      placeholder: 'Home',
    },
    {
      id: 2,
      link: '/about',
      img: '',
      placeholder: 'About Me',
    },
    {
      id: 3,
      link: '/techStack',
      img: '',
      placeholder: 'Tech Stack',
    },
    {
      id: 4,
      link: '/projects',
      img: '',
      placeholder: 'Projects',
    },
    {
      id: 5,
      link: '/timeLine',
      img: '',
      placeholder: 'Timeline',
    },
  ];

  // Map button styles to the appropriate Tailwind classes
  const buttonStyles = {
    '1': {
      normal: 'bg-button1',
      hovered: 'bg-button1-hovered',
    },
    '2': {
      normal: 'bg-button2',
      hovered: 'bg-button2-hovered',
    },
    '3': {
      normal: 'bg-button3',
      hovered: 'bg-button3-hovered',
    },
    '4': {
      normal: 'bg-button4',
      hovered: 'bg-button4-hovered',
    },
  };

  // Create a function that determines text color based on button style
  const getTextColor = (style: ButtonStyleType): string => {
    return style === '3' || style === '4' ? 'text-white' : 'text-foreground';
  };

  // Get the text color for the current button style
  const textColor = getTextColor(btn_style);
  return (
    <div className="flex items-center justify-center gap-6">
      {NavButtonsLib.map((item, index) => (
        <div className="relative" key={index}>
          <BgShadow borderRadius="3" />
          <NavLink
            className={({ isActive }) => {
              // Use the mapping object instead of string interpolation
              const baseClass = buttonStyles[btn_style].normal;
              const hoverClass = buttonStyles[btn_style].hovered;

              return `${isActive ? hoverClass : baseClass} relative z-10 flex w-full items-center rounded-[3px] border-3 border-gray-900 px-3 py-1 font-bold hover:-translate-x-[1px] hover:-translate-y-[1px] ${textColor} transition-all ${
                isActive
                  ? `${textColor} translate-x-[2px] translate-y-[2px] ${hoverClass}`
                  : baseClass
              }`;
            }}
            to={item.link}
          >
            {item.img}
            {item.placeholder}
          </NavLink>
        </div>
      ))}
    </div>
  );
};
