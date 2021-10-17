import { FC, useCallback, useEffect, useRef, useState } from 'react';

interface Brewery {
  id: string;
  name: string;
  country: string;
}

export const Pagination: FC = () => {
  const ITEMS_PER_PAGE: number = 6;

  const [items, setItems] = useState<Brewery[]>([]);
  const [page, setPage] = useState<number>(0);
  const [itemsHeight, setItemsHeight] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const itemsRef = useRef<HTMLDivElement>(null);

  const handleLoad = (data: Brewery[]) => {
    setItems(data);
    setIsLoading(false);
  };

  const handleError = (error: any) => {
    console.error('Failed to get response from API: ', error);
    setIsLoading(false);
    setIsError(true);
  };

  useEffect(() => {
    fetch('https://api.openbrewerydb.org/breweries')
      .then((res) => res.json())
      .then((data) => handleLoad(data))
      .catch((error) => handleError(error));
  }, []);

  // Set height of items container so that it won't change if last page has fewer items
  useEffect(() => {
    setItemsHeight(itemsRef.current?.clientHeight || 0);
  }, [isLoading]);

  return (
    <div className="max-w-sm">
      <div className="mb-4 border border-gray-200 rounded-lg p-2 shadow">
        {/* Loading text */}
        {isLoading && <h2 className="px-1">Loading...</h2>}

        {/* Error text */}
        {isError && <h2 className="px-1">Error fetching API</h2>}

        {/* Items */}
        {!isLoading && (
          <div
            style={{ height: itemsHeight === 0 ? 'auto' : `${itemsHeight}px` }}
            className="hey"
            ref={itemsRef}
          >
            {items
              .slice(
                page * ITEMS_PER_PAGE,
                page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
              )
              .map((item) => (
                <div
                  key={item.id}
                  className="border-b border-gray-200 p-1 last:border-none"
                >
                  <h2 className="font-bold text-sm">{item.name}</h2>
                  <p className="text-xs">{item.country}</p>
                </div>
              ))}
          </div>
        )}
      </div>

      {/* Pagination */}
      {!isLoading && (
        <div className="text-center">
          {[...Array(Math.ceil(items.length / ITEMS_PER_PAGE))].map((e, i) => (
            <button
              type="button"
              key={i}
              className={[
                'border border-black rounded-full w-8 h-8 mr-2 text-sm',
                page === i ? 'bg-black text-white' : null,
              ].join(' ')}
              onClick={() => setPage(i)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
