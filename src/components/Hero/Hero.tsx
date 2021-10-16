import { FC } from 'react';
import { Layout } from '../Layout/Layout';

interface Props {
  header: string;
  subheader: string;
  image: string;
  CTA?: string;
  url?: string;
}

export const Hero: FC<Props> = ({ header, subheader, image, CTA, url }) => {
  return (
    <div
      className="relative bg-cover bg-center py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 2xl:py-20"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <Layout>
        <div className="w-full bg-white opacity-60 h-full absolute top-0 left-0"></div>
        <div className="w-full md:w-3/4 bg-gradient-to-r  from-white to-transparent h-full absolute top-0 left-0"></div>
        <div className="relative">
          <div className="w-full md:w-1/2">
            <h1 className="font-bold text-xl sm:text-2xl lg:text-4xl mb-4">
              {header}
            </h1>
            <p className="mb-4">{subheader}</p>
            {CTA && url && (
              <a
                className="bg-black text-white px-6 py-2 inline-block hover:bg-white hover:text-black transition border border-black"
                href={url}
              >
                {CTA}
              </a>
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
};
