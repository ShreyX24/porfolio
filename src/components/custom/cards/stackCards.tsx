import { TbPin } from 'react-icons/tb';
import { Button } from '../buttons/button';
import { useState } from 'react';
import { StackType } from '../../../lib/stacks';

interface StackCardsProps {
  stack: StackType[];
  card_header: string;
  icon_comp: React.ReactNode;
  onPinChange?: (isPinned: boolean) => void;
}

export const StackCards = ({
  stack,
  card_header,
  icon_comp,
  onPinChange,
}: StackCardsProps) => {
  const [divHovered, setDivHovered] = useState<boolean>(false);
  const [pinClicked, setPinClicked] = useState<boolean>(false);
  
  const handleHoveredOn = () => {
    if (!pinClicked) {
      setDivHovered(true);
    }
  };
  
  const handleHoveredOff = () => {
    if (!pinClicked) {
      setDivHovered(false);
    }
  };
  
  const handlePinClick = () => {
    const newPinState = !pinClicked;
    setPinClicked(newPinState);
    
    // Notify parent component about pin state change
    if (onPinChange) {
      onPinChange(newPinState);
    }
    
    // If unpinning, and mouse is not over the card, hide content
    if (!newPinState && !divHovered) {
      setDivHovered(false);
    } else if (newPinState) {
      // If pinning, always show content
      setDivHovered(true);
    }
  };

  return (
    <div
      className="flex h-full w-full items-center justify-center"
      onMouseEnter={handleHoveredOn}
      onMouseLeave={handleHoveredOff}
    >
      {/* Show content if hovered or pinned */}
      {(divHovered || pinClicked) ? (
        //*   card content
        <div className="h-full w-full">
          {/* top div */}
          <div className="flex h-[70px] w-full items-center justify-between border-b-2 border-black">
            {/* card header */}
            <span className="px-4">{card_header}</span>
            {/* pin button */}
            <div className="px-4">
              <Button
                placeholder=""
                icon_comp={<TbPin className="size-5" />}
                onClick={handlePinClick}
                className={pinClicked ? "translate-x-[1.5px] translate-y-[1.5px]" : ""}
              />
            </div>
          </div>
          {/* bottom div */}
          <div className="relative h-[calc(100%-30px)] w-full overflow-auto">
            <div className="flex flex-wrap items-center gap-4 p-4">
              {stack.map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <img src={`/icons/${item.img}.png`} width={44} alt={item.name} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        //*   front side of the card
        <div className="flex items-center justify-center gap-2">
          {icon_comp}
          <span className="text-xl">{card_header}</span>
        </div>
      )}
    </div>
  );
};