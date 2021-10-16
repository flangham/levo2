import React, { FC, useState, useRef, useEffect } from 'react';

export const Carousel: FC = ({ children }) => {
  const [position, setPosition] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState<boolean>(true);
  const [carouselContainerWidth, setCarouselContainerWidth] =
    useState<number>(0);
  const [carouselHeight, setCarouselHeight] = useState<number>(0);
  const [hasLoaded, setHasLoaded] = useState<boolean>(false);

  const carouselRowRef = useRef<HTMLDivElement>(null);
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const numberOfChildren = useRef<number>(React.Children.count(children));

  // SETUP OF HEIGHT + WIDTH
  //////////////////////////

  // First we find the width of the carousel container to determine the full width of the slider row
  useEffect(() => {
    setCarouselContainerWidth(carouselContainerRef.current?.clientWidth || 0);
  }, []);

  // Once the width is determined, we can find the height of the slider row to set the height of the container
  // and add resize listener
  useEffect(() => {
    setCarouselHeight(
      carouselRowRef.current?.children[position + 1].children[0].clientHeight ||
        0
    );
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => {
        setCarouselContainerWidth(
          carouselContainerRef.current?.clientWidth || 0
        );
        setCarouselHeight(
          carouselRowRef.current?.children[position + 1].children[0]
            .clientHeight || 0
        );
      });
    }
  }, [carouselContainerWidth, position]);

  // Once the height has been set, we can add transition height
  // I've used setTimeout to make it synchronous as it was still showing the initial height transition
  useEffect(() => {
    if (carouselHeight !== 0) setTimeout(() => setHasLoaded(true));
  }, [carouselHeight]);

  // SETUP OF SLIDE FUNCTIONALITY
  ///////////////////////////////

  const incrementPosition = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setPosition((prev) => prev + 1);
  };

  const decrementPosition = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setPosition((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    // Disable transition if we need to loop over either way
    if (position === -1 || position === numberOfChildren.current) {
      setIsTransitionEnabled(false);
      // If at start, loop to end. If at end, loop to start.
      position === -1
        ? setPosition(numberOfChildren.current - 1)
        : setPosition(0);
    }
    // Renable buttons once transition has completed
    setIsTransitioning(false);
  };

  // Enable transition if we've just looped over
  useEffect(() => {
    if (
      (position === 0 || position === numberOfChildren.current - 1) &&
      !isTransitionEnabled
    ) {
      setIsTransitionEnabled(true);
    }
  }, [position, isTransitionEnabled]);

  return (
    <>
      <div
        className={[
          'flex justify-between items-center mb-4 transition',
          hasLoaded ? 'opacity-100' : 'opacity-0',
        ].join(' ')}
      >
        <button
          onClick={decrementPosition}
          className="border w-10 h-10 rounded-full border-black z-10"
        >
          ◀️
        </button>

        {/* Carousel items */}
        <div
          ref={carouselContainerRef}
          style={{ height: `${carouselHeight}px` }}
          className={[
            'flex-grow mx-4 relative overflow-hidden ',
            hasLoaded ? 'transition-all duration-500' : null,
          ].join(' ')}
        >
          <div
            ref={carouselRowRef}
            onTransitionEnd={handleTransitionEnd}
            className="flex absolute top-0 left-0"
            style={{
              transition: isTransitionEnabled ? 'transform 0.5s' : 'none',
              width: `${
                (numberOfChildren.current + 2) * carouselContainerWidth
              }px`,
              transform: `translateX(${
                -position * (100 / (numberOfChildren.current + 2))
              }%) translateX(${-100 / (numberOfChildren.current + 2)}%)`,
            }}
          >
            {/* Duplicate of last item at front */}
            {React.Children.map(children, (child, i) => {
              return i === numberOfChildren.current - 1 ? (
                <div className="flex-1">{child}</div>
              ) : null;
            })}

            {React.Children.map(children, (child, i) => {
              return <div className="flex-1">{child}</div>;
            })}

            {/* Duplicate of first item at back */}
            {React.Children.map(children, (child, i) => {
              return i === 0 ? <div className="flex-1">{child}</div> : null;
            })}
          </div>
        </div>

        <button
          onClick={incrementPosition}
          className="border w-10 h-10 rounded-full border-black z-10"
        >
          ▶️
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mb-4">
        {React.Children.map(children, (child, i) => {
          return (
            <>
              {/* First Dot */}
              {i === 0 && (
                <button
                  onClick={() => setPosition(i)}
                  className={[
                    'border border-black h-3 w-3 rounded-full mx-2 transition',
                    (position === 0 || position === numberOfChildren.current) &&
                      'bg-black',
                  ].join(' ')}
                ></button>
              )}

              {/* Middle Dots */}
              {i !== 0 && i !== numberOfChildren.current - 1 && (
                <button
                  onClick={() => setPosition(i)}
                  className={[
                    'border border-black h-3 w-3 rounded-full mx-2 transition',
                    position === i && 'bg-black',
                  ].join(' ')}
                ></button>
              )}

              {/* Last Dot */}
              {i === numberOfChildren.current - 1 && (
                <button
                  onClick={() => setPosition(i)}
                  className={[
                    'border border-black h-3 w-3 rounded-full mx-2 transition',
                    (position === numberOfChildren.current - 1 ||
                      position === -1) &&
                      'bg-black',
                  ].join(' ')}
                ></button>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};
