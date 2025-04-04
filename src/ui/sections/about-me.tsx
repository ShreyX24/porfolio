import { ImgCards } from '../../components/custom/cards/img-cards';
import { Typewriter } from '../../components/custom/typewriter';
export const AboutMe = () => {
  return (
    <div className="flex h-full w-screen flex-col items-center justify-center text-start">
      <div className="flex flex-col items-start justify-center gap-5">
        <div className="flex items-center justify-center gap-10">
          <div className="flex h-full">
            <div className="font-main text-secondary flex w-full flex-col items-start justify-center gap-5 text-2xl">
              <span className="font-main">
                👋 Hey there, my name is{' '}
                <strong className="text-foreground">Shreyansh</strong>.
              </span>

              <span className="text-foreground w-[600px] text-start text-8xl font-[900]">
                I LOVE SMOOTH & ATTRACTIVE UI DESIGNS.
              </span>

              {/* <span>I'm a Gaming Validation Engineer @ Intel.</span> */}
            </div>
          </div>
          <div className="flex h-full items-center justify-start">
            <ImgCards />
          </div>
        </div>
        <div className="font-main text-secondary flex h-[100px] w-[850px] justify-center text-start md:justify-start md:text-4xl">
          <Typewriter
            dataType={[
              "I'm from a small town called Sambalpur located in Odisha, Bharat...",
              'Please feel free to browse through my portfolio...',
              'Hope you have a good day 😊.',
            ]}
            dataPeriod={2000}
          />
        </div>
      </div>
    </div>
  );
};
