import { AnimatedComponent } from '../../animations/animations';
import { Cards } from '../../components/custom/cards/cards';
import { ProjectCards } from '../../components/custom/cards/projectCards';

export const Projects = () => {
  return (
    <div className="flex h-full w-screen items-center justify-center">
      <div className="flex h-full w-full items-center justify-center">
        {/* wrapper div */}
        <div className="flex h-[70%] w-[70%] flex-wrap items-start justify-center gap-10">
          {/* First card with animation */}
          <AnimatedComponent
            type="flip-vertical"
            delay={0.3}
            duration={0.8}
            animateWhenInView={true}
            className="size-[400px]"
          >
            <Cards size="500">
              <ProjectCards />
            </Cards>
          </AnimatedComponent>
        </div>
      </div>
    </div>
  );
};
