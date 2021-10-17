import { FC } from 'react';

interface Props {
  closingSoon?: boolean;
  snippet: string;
  title: string;
  description: string;
  image: string;
  linkText: string;
  url: string;
}

export const GridTile: FC<Props> = ({
  closingSoon,
  snippet,
  title,
  description,
  image,
  linkText,
  url,
}) => {
  return (
    <div className="tileShell1 max-w-md md:max-w-xl m-auto pt-6 lg:p-0 h-full lg:max-w-none tile lg:m-0 border-t lg:border border-gray-200 lg:rounded-lg overflow-hidden lg:shadow">
      <div className="tileShell2 flex w-full mb-4 lg:p-0 relative h-full">
        <div className="tileShell3 w-20 h-20 md:h-24 md:w-36  mr-4 md:mr-6 rounded overflow-hidden flex-shrink-0">
          <div
            className="tileImage bg-center bg-cover w-full h-full"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        <div className="tileText lg:flex lg:flex-col">
          {closingSoon && (
            <span className="tileClosing text-xs border md:border-none  text-gray-500 rounded px-1 mb-2 inline-block md:absolute left-2 top-2 bg-white">
              CLOSING SOON
            </span>
          )}
          <h3 className="tileSnippet text-blue-900 uppercase text-xs mb-1">
            {snippet}
          </h3>
          <a href={url}>
            <h2 className="tileTitle linkTitle">{title}</h2>
          </a>
          <p className="tileDescriptions linkDescription">{description}</p>
          <div>
            <a className="tileLink linkCTA" href={url}>
              <span className="transition-all mr-0 group-hover:mr-2">
                {linkText}
              </span>
              <span> &gt;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
