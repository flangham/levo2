import React, { Children, FC, cloneElement } from 'react';

interface Props {
  widescreen?: boolean;
  fullscreen?: boolean;
}

export const Embed: FC<Props> = ({ children, widescreen, fullscreen }) => {
  return (
    <div
      className={[
        'w-full h-32 relative mb-6',
        widescreen ? 'pb-16/9' : null,
        fullscreen ? 'pb-4/3' : null,
      ].join(' ')}
    >
      {/* What type should 'child' be??? */}
      {Children.map(children, (child: any, i) => {
        if (i !== 0) return;
        return cloneElement(child, {
          className: 'embed-responsive-item',
        });
      })}
    </div>
  );
};
