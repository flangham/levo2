import { FC } from 'react';

interface Props {
  image: string;
  title: string;
  blurb: string;
  linkText: string;
  url: string;
}

export const StretchedLink: FC<Props> = ({
  blurb,
  image,
  linkText,
  title,
  url,
}) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden relative w-60 inline-block m-4 shadow">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-full h-32 bg-cover bg-center"
      ></div>
      <div className="p-4">
        <h2 className="linkTitle">{title}</h2>
        <p className="linkDescription">{blurb}</p>
        <a
          href={url}
          className="stretched-link text-blue-700 font-bold hover:underline"
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};
