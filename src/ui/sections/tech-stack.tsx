import { FaCodeBranch } from 'react-icons/fa';
import { Cards } from '../../components/custom/cards/cards';
import { StackCards } from '../../components/custom/cards/stackCards';
import { backStack, dbStack, frontStack } from '../../lib/stacks';
import { CgDatabase, CgWebsite } from 'react-icons/cg';
import { useState } from 'react';

export const TechStack = () => {
  const [frontEndPinned, setFrontEndPinned] = useState(false);
  const [backEndPinned, setBackEndPinned] = useState(false);
  const [dbPinned, setDbPinned] = useState(false);

  return (
    <div className="flex h-full w-screen items-center justify-center">
      <div className="h-full w-[90%] ">
        {/* top div */}
        <div className="flex h-1/2 w-full items-center justify-center gap-10 ">
          <Cards isPinned={frontEndPinned}>
            <StackCards
              stack={frontStack}
              card_header="Frontend"
              icon_comp={<CgWebsite className="size-7" />}
              onPinChange={setFrontEndPinned}
            />
          </Cards>
          <Cards isPinned={backEndPinned}>
            <StackCards
              stack={backStack}
              card_header="Backend"
              icon_comp={<FaCodeBranch className="size-7" />}
              onPinChange={setBackEndPinned}
            />
          </Cards>
          <Cards isPinned={dbPinned}>
            <StackCards
              stack={dbStack}
              card_header="Database"
              icon_comp={<CgDatabase className="size-7" />}
              onPinChange={setDbPinned}
            />
          </Cards>
        </div>
        {/* bottom div */}
        <div className="h-1/2 w-full "></div>
      </div>
    </div>
  );
};