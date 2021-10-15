import React, { FC, useState, useRef, useEffect } from 'react';

export const Carousel: FC = ({ children }) => {
  const [position, setPosition] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState<boolean>(true);

  const carouselRef = useRef<HTMLDivElement>(null);
  const numberOfChildren = useRef<number>(React.Children.count(children));

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
      <div className="flex w-full justify-between items-center h-40 mb-4">
        <button
          onClick={decrementPosition}
          className="border w-10 h-10 rounded-full border-black z-10"
        >
          ◀️
        </button>
        <div className="bg-blue-200 flex-grow mx-4 relative h-full overflow-hidden">
          <div
            ref={carouselRef}
            onTransitionEnd={handleTransitionEnd}
            className="h-full bg-yellow-400 flex"
            style={{
              transition: isTransitionEnabled ? 'all 0.5s' : 'none',
              width: `${(numberOfChildren.current + 2) * 100}%`,
              transform: `translateX(${
                -position * (100 / (numberOfChildren.current + 2))
              }%) translateX(${-100 / (numberOfChildren.current + 2)}%)`,
            }}
          >
            {React.Children.map(children, (child, i) => {
              return i === numberOfChildren.current - 1 ? (
                <div className="h-full flex-1">{child}</div>
              ) : null;
            })}
            {React.Children.map(children, (child, i) => {
              return <div className="h-full flex-1">{child}</div>;
            })}
            {React.Children.map(children, (child, i) => {
              return i === 0 ? (
                <div className="h-full flex-1">{child}</div>
              ) : null;
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
