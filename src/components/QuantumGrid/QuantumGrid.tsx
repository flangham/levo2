import React, { FC } from 'react';

export const QuantumGrid: FC = ({ children }) => {
  return (
    <div className="lg:grid grid-cols-3 lg:-m-4">
      {React.Children.map(children, (child, i) => {
        return (
          <>
            <div
              className={[
                'lg:m-4',
                i % 4 === 0 || i % 4 === 3
                  ? 'col-span-2 gridLarge'
                  : 'col-span-1 gridSmall',
              ].join(' ')}
            >
              {child}
            </div>
          </>
        );
      })}
    </div>
  );
};
