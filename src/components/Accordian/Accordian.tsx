import { FC, useState, useRef, useEffect } from 'react';

interface Props {
  title: string;
  content: string;
}

export const Accordian: FC<Props> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // Calculate the height of the content so we can animate opening and closing
  // and recalculate whenever window is resized
  useEffect(() => {
    setContentHeight(contentRef.current?.offsetHeight || 0);
    if (typeof window !== 'undefined')
      window.addEventListener('resize', () =>
        setContentHeight(contentRef.current?.offsetHeight || 0)
      );
  }, []);

  return (
    <div className="mb-4 shadow">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex-grow flex items-center justify-between bg-black px-6 py-2 text-white w-full"
      >
        <p className="font-bold mr-6 text-left text-sm sm:text-base">{title}</p>
        <div
          className={[
            'text-xl',
            'transform',
            'transition',
            isOpen ? 'rotate-180' : null,
          ].join(' ')}
        >
          ▼
        </div>
      </button>
      <div
        className="overflow-hidden border border-black"
        style={{
          height: isOpen ? `${contentHeight}px` : '0px',
          transition: 'height 0.2s',
        }}
      >
        <p ref={contentRef} className="px-6 py-4 text-sm sm:text-base">
          {content}
        </p>
      </div>
    </div>
  );
};
