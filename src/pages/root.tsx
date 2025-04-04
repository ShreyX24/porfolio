// import { Navbar } from '../ui/root/navbar';
import { SectionsItems } from '../ui/root/sections-items';

export const Root = () => {
  return (
    <div className="bg-background flex h-screen flex-col overflow-hidden select-none">
      {/* <Navbar /> */}
      <SectionsItems indicator_style="square_rounded" />
    </div>
  );
};
